// Apollo client
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/users";

// Custom hook
export default function useMyReviews() {
  const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true }
  });

  const myReviews = data
    ? data.me?.reviews.edges
        .map((edge) => edge.node)
        .filter((review) => review != null)
    : [];

  return { myReviews, loading, error, refetch };
}
