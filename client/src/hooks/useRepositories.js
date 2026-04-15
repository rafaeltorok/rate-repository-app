// Apollo client
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

export default function useRepositories() {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const repositories = data
    ? data.repositories.edges
        .map((edge) => edge.node)
        .filter((repo) => repo != null)
    : [];

  return { repositories, loading, error };
}
