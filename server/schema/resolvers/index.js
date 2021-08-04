const Book = require("./book");
const me = require("./user");
const signup = require("./signup");
const login = require("./login");

const resolvers = {
  Query: {
    // Book,
    me,
  },

  Mutation: { signup, login },
};

module.exports = resolvers;
