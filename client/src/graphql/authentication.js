import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
  mutation AuthenticateUser($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
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
