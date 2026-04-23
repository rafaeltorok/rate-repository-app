// Apollo client
import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/repositories";

export default function useRepositories(variables) {
  const guardedVariables = {
    // Add defaults to protect from null values
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    first: 5,

    // Override them in case valid variables are already present
    ...variables,
  };

  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: guardedVariables,
  });
  
  const handleFetchMore = () => {
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

  return { 
    data, 
    loading, 
    error,
    fetchMore: handleFetchMore,
  };
}
