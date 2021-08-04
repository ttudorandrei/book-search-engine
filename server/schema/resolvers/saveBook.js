const Book = require("../../models/Book");
const User = require("../../models/User");

const saveBook = async (_, { user, input }) => {
  const { authors, description, title, bookId, image, link } = input;

  const bookToSave = { authors, description, title, bookId, image, link };

  console.log(bookToSave);

  const book = await User.findOneAndUpdate(
    { _id: "610ac5f666ff620464b333bc" },
    {
      $set: { savedBooks: bookToSave },
    },
    { new: true, runValidators: true }
  );

  return { book };
};

module.exports = saveBook;
