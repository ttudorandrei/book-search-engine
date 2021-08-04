const { Book } = require("../../models");

const deleteBook = async () => {
  return await Book.deleteOne({ _id: "610861d1dadfdd579ccd3c83" });
};

module.exports = deleteBook;
