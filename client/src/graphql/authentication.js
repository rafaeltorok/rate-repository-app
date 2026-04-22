import { gql } from "graphql-tag";

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
      user {
        id
        username
      }
    }
  }
`;

export const LOGGED_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
