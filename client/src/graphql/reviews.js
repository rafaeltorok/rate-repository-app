import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
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
        }
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview (
    $ownerName: String!
    $repositoryName: String!
    $rating: Int!
    $text: String
    ) {
    createReview (
      review: {
        ownerName: $ownerName,
        repositoryName: $repositoryName,
        rating: $rating,
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
