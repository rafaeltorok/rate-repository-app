// Apollo client dependencies
import { useApolloClient } from '@apollo/client';

// Hooks
import useAuthStorage from './useAuthStorage';

// Custom hook
export default function useSignOut() {
  // Get the current Apollo client instance
  const apolloClient = useApolloClient();

  // Custom hook to handle access to the Authentication storage
  const authStorage = useAuthStorage();

  const signOut = async() => {
    // Remove the token and reset the client cache
    await authStorage.removeAccessToken();
      
    // Triggers refetch of queries like `me` to update auth state
    await apolloClient.resetStore();
  };

  return signOut;
};
