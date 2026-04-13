// Apollo dependencies
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Expo modules
import Constants from 'expo-constants';

// Client function
export default function createApolloClient() {
  return new ApolloClient({
    uri: Constants.expoConfig.extra.APOLLO_SERVER_URL,
    cache: new InMemoryCache(),
  });
};
