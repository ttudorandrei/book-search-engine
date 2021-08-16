const { User } = require("../../models");

const user = async (_, args, context) => {
  const { id } = context.user;

  try {
    // we try to find a specific user by id the user id in the context
    return await User.findById(id).populate("savedBooks");
  } catch (error) {
    // if the method is not successful, an error will be thrown and displayed in the console
    console.error(error.message);
  }
};

module.exports = user;
