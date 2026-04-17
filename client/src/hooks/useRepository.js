// Apollo client
import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/repositories";

export default function useRepository(id) {
  const { data, loading, error } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id }
  });

  return { data, loading, error };
}
