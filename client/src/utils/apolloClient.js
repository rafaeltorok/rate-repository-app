// Apollo dependencies
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Client function
export default function createApolloClient() {
  return new ApolloClient({
    uri: process.env.EXPO_PUBLIC_APOLLO_SERVER_URL,
    cache: new InMemoryCache(),
  });
};
