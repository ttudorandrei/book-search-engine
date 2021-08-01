const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(input: LoginInput): Auth
    addUser(input: AddUserInput): Auth
    saveBook(input: SaveBookInput): User
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;
