const me = require("./user");
const signup = require("./signup");
const login = require("./login");
const saveBook = require("./saveBook");
const removeBook = require("./deleteBook");

const resolvers = {
  Query: {
    me,
  },

  Mutation: { signup, login, saveBook, removeBook },
};

module.exports = resolvers;
