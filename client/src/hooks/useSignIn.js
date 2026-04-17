// Apollo client dependencies
import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/authentication";

// Hooks
import useAuthStorage from "./useAuthStorage";

// Custom hook
export default function useSignIn() {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  // Get the current Apollo client instance
  const apolloClient = useApolloClient();

  // Custom hook to handle access to the Authentication storage
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    // Sends the mutation query to log the user
    const result = await mutate({ variables: { username, password } });

    // Extracts the data from the mutation result
    const { data } = result;

    // Persist the access token for future authenticated requests
    await authStorage.setAccessToken(data?.authenticate.accessToken);

    // Refetches queries to update authentication state
    await apolloClient.resetStore();

    return result;
  };

  return [signIn, result];
}
