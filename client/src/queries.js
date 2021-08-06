import { gql } from "@apollo/client";

const GET_USER = gql`
  query Query {
    me {
      username
      _id
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export { GET_USER };
