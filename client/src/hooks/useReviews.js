// Apollo client
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/reviews";

// Custom hook
export default function useReviews(id) {
  const { data, loading, error } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables: { id }
  });

  const reviews = data?.repository?.reviews?.edges
    ? data.repository.reviews.edges
        .map((edge) => edge.node)
        .filter((review) => review != null)
    : [];

  return { reviews, loading, error };
}
