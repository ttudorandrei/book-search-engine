const User = require("../../models/User");

const saveBook = async (_, { input }, context) => {
  const { id } = context.user;

  const bookToSave = await User.findOneAndUpdate(
    id,
    {
      $push: {
        savedBooks: input,
      },
    },
    { new: true, runValidators: true }
  ).populate("savedBooks");

  return bookToSave;
};

module.exports = saveBook;
