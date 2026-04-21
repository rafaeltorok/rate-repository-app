// Apollo client dependencies
import { useMutation } from "@apollo/client/react";
import { CREATE_REVIEW } from "../graphql/reviews";

// Custom hook
export default function useCreateReview() {
  const [mutate, reviewResult] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    // Send the mutation query to create a new review
    const result = await mutate({ variables: { ownerName, repositoryName, rating, text } });
    return result.data.createReview;
  };

  return [createReview, reviewResult];
}
