import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export default LOGIN;