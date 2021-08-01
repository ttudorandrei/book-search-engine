const Book = require("./book");
const me = require("./user");

const resolvers = {
  Query: {
    // Book,
    me,
  },
};

module.exports = resolvers;
