// Apollo client
import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/repositories";

// Hook
export default function useRepositories(variables) {
  const guardedVariables = {
    // Add defaults to protect from null values
    orderBy: "CREATED_AT",
    orderDirection: "DESC",

    // Override them in case valid variables are already present
    ...variables,
  };

  // The fetch more function should only run when pagination is enabled
  const isPaginated = Boolean(guardedVariables.first);

  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: guardedVariables,
  });
  
  // Handle pagination
  const handleFetchMore = () => {
    if (!isPaginated) return;

    // Check if there are more pages
    const canFetchMore = !loading && data?.repositories?.pageInfo?.hasNextPage;
 
    if (!canFetchMore) {
      return;
    }
 
    fetchMore({
      variables: {
        ...guardedVariables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  // Return the query response
  return { 
    data, 
    loading, 
    error,
    fetchMore: handleFetchMore,
  };
}
