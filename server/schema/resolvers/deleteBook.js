const User = require("../../models");

const deleteBook = async (_, { input }) => {
  // return await Book.deleteOne({ _id: "id123" });

  return await User.findOneAndUpdate(
    { _id: "610ac5f666ff620464b333bc" },
    { $pull: { savedBooks: { bookId: input.bookId } } },
    { new: true }
  );
};

module.exports = deleteBook;
