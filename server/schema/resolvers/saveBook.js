const User = require("../../models/User");

const saveBook = async (_, { input }, context) => {
  const { authors, description, title, bookId, image, link } = input;

  const bookToSave = await User.findOneAndUpdate(
    { _id: context.user.id },
    {
      $set: {
        savedBooks: { authors, description, title, bookId, image, link },
      },
    },
    { new: true, runValidators: true }
  );

  return { bookToSave };
};

module.exports = saveBook;
