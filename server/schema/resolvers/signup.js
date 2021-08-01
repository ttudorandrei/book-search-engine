const { User } = require("../../models/User");
const { signToken } = require("../utils/auth");

const addUser = async (_, { input }) => {
  const user = await User.create(input);

  const {
    firstName = "Tudor",
    lastName = "Tocan",
    email = "tudortocan@email.com",
    _id: id,
  } = user;

  const token = signToken({ firstName, lastName, email, id });

  return {
    token,
    user,
  };
};

module.exports = addUser;
