// Apollo client
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/repositories";

export default function useRepositories(orderBy, orderDirection, searchKeyword) {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: { 
      orderBy: orderBy || "CREATED_AT", 
      orderDirection: orderDirection || "DESC",
      searchKeyword: searchKeyword
    }
  });

  const repositories = data
    ? data.repositories.edges
        .map((edge) => edge.node)
        .filter((repo) => repo != null)
    : [];

  return { repositories, loading, error };
}
