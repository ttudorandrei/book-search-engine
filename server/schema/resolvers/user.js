const { User } = require("../../models");

const user = async (_, args, context) => {
  const user = await User.findOne({ _id: context.user.id });

  return user;
};

module.exports = user;
