// Apollo client
import { useQuery } from "@apollo/client/react";
import { GET_REVIEWS } from "../graphql/reviews";

// React
import { useState } from "react";

// Hook
export default function useReviews(variables) {
  // Local flag for the fetch more function to know if it currently fetching data or not
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { data, loading, error, fetchMore } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  // Handle pagination
  const handleFetchMore = async () => {
    // Check if there are more pages
    const canFetchMore =
      !loading && data?.repository?.reviews?.pageInfo?.hasNextPage;

    if (!canFetchMore || isFetchingMore) {
      return;
    }

    setIsFetchingMore(true);

    await fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });

    setIsFetchingMore(false);
  };

  // Return the query response
  return {
    data,
    loading,
    error,
    fetchMore: handleFetchMore,
  };
}
