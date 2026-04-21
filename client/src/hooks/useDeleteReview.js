// Apollo client dependencies
import { useMutation } from "@apollo/client/react";
import { DELETE_REVIEW } from "../graphql/reviews";

// Custom hook
export default function useDeleteReview() {
  const [mutate, deleteResult] = useMutation(DELETE_REVIEW);

  const deleteReview = async (reviewId) => {
    // Send the mutation query to remove the review
    const result = await mutate({ variables: { id: reviewId } });
    return result.data.deleteReview;
  };

  return { deleteReview, deleteResult };
}
