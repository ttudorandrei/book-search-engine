const User = require("../../models/User");
const { signToken } = require("../../utils/auth");

const signup = async (_, { input }) => {
  const { firstName, lastName, email, password, username } = input;

  const user = await User.create({
    firstName,
    lastName,
    username,
    email,
    password,
  });

  const token = signToken({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
  });

  return {
    token,
    user,
  };
};

module.exports = signup;
