const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../../models");
const { signToken } = require("../../utils/auth");

const login = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError(
      "User does not exist! Please check your credentials and try again!"
    );
  }

  const isValidPassword = await user.validatePassword(password);

  if (!isValidPassword) {
    throw new AuthenticationError(
      "Password does not match to this account. Please try typing your password again."
    );
  }

  const token = signToken({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
  });

  return { token, user };
};

module.exports = login;
