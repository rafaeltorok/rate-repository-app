import { gql } from "graphql-tag";

export const GET_REVIEWS = gql`
  query (
    $id: ID!
    $first: Int
    $after: String
  ) {
    repository(
      id: $id
    ) {
      id
      fullName
      reviews (
        first: $first
        after: $after
      ) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview(
    $ownerName: String!
    $repositoryName: String!
    $rating: Int!
    $text: String
  ) {
    createReview(
      review: {
        ownerName: $ownerName
        repositoryName: $repositoryName
        rating: $rating
        text: $text
      }
    ) {
      id
      repositoryId
      userId
      rating
      text
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;
