const { User } = require("../../models");

const user = async (_, args, context) => {
  const user = await User.findById(context.user.id).populate("savedBooks");

  return user;
};

module.exports = user;
