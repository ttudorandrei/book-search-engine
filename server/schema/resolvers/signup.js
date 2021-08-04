const { AuthenticationError } = require("apollo-server-express");
const User = require("../../models/User");
const { signToken } = require("../../utils/auth");

const signup = async (_, { input }) => {
  const { email, password, username } = input;

  const userAlreadyExists = await User.findOne({ email });

  if (!userAlreadyExists) {
    const user = await User.create({
      username,
      email,
      password,
    });

    if (!user) {
      throw new AuthenticationError(
        "Oops! There was an error! Please try again!"
      );
    }

    const token = signToken({
      username: user.username,
      email: user.email,
    });

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
