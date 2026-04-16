// Apollo dependencies
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Expo modules
import Constants from "expo-constants";

// Handles the link to the Apollo Server
const httpLink = createHttpLink({
  uri: Constants.expoConfig.extra.APOLLO_SERVER_URL,
});

// Client function
export default function createApolloClient(authStorage) {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (err) {
      console.log(err);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
