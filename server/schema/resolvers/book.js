const { Book } = require("../../models/Book");

const book = async (_, { id }) => {
  const book = await Book.find({});
  return book;
};

module.exports = book;
