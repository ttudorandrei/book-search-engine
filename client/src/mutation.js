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

const SIGNUP = gql`
  mutation Mutation($signupInput: SignupInput) {
    signup(input: $signupInput) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export { LOGIN, SIGNUP };
