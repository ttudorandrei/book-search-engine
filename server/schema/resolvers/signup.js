const { AuthenticationError } = require("apollo-server-express");
const User = require("../../models/User");
const { signToken } = require("../../utils/auth");

const signup = async (_, { input }) => {
  // we destructure required information from the input
  const { email, password, username } = input;

  // we check the database for possibly matching credentials
  const userAlreadyExists = await User.findOne({ email });

  // if the credentials are new, we create the user and store it into our database
  if (!userAlreadyExists) {
    const user = await User.create({
      username,
      email,
      password,
    });

    // if the user cannot be created an error will be thrown
    if (!user) {
      throw new AuthenticationError(
        "Oops! There was an error! Please try again!"
      );
    }

    // if the user was successfully created, we tokenise the id, username and email address
    const token = signToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    // we return the token and the user
    return {
      token,
      user,
    };
  } else {
    throw new AuthenticationError(
      "Oops! There already exists a user with these credentials"
    );
  }
};

module.exports = signup;
