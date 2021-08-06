const { User } = require("../../models");

const deleteBook = async (_, { bookId }, context) => {
  return await User.findOneAndUpdate(
    { _id: context.user.id },
    { $pull: { savedBooks: { bookId } } },
    { new: true }
  );
};

module.exports = deleteBook;
