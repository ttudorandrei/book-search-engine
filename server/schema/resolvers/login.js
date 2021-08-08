const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../../models");
const { signToken } = require("../../utils/auth");

const login = async (_, { input }) => {
  // destructure email and password from input
  const { email, password } = input;

  // we find specific user by email
  const user = await User.findOne({ email });

  // if there is no user with specified email in the database, an error will be thrown
  if (!user) {
    throw new AuthenticationError(
      "User does not exist! Please check your credentials and try again!"
    );
  }

  // we check if password is valid
  const isValidPassword = await user.validatePassword(password);

  // if the password is nod valid an error will be thrown
  if (!isValidPassword) {
    throw new AuthenticationError(
      "Password does not match to this account. Please try typing your password again."
    );
  }

  // if the password is valid, we tokenise the user id, username and email
  const token = signToken({
    id: user.id,
    username: user.username,
    email: user.email,
  });

  // we return the token and the user
  return { token, user };
};

module.exports = login;
