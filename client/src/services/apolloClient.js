// Apollo dependencies
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

// Client function
export default function createApolloClient(authStorage) {
  // Handle the link to the Apollo Server
  const httpLink = new HttpLink({
    uri: process.env.EXPO_PUBLIC_APOLLO_SERVER_URL,
  });

  // Handle the current logged in user access token
  const authLink = new SetContextLink(async ({ headers }) => {
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
    cache: new InMemoryCache({
      typePolicies: {
        Repository: {
          fields: {
            reviews: relayStylePagination()
          },
        },
        Query: {
          fields: {
            repositories: relayStylePagination([
              "orderBy",
              "orderDirection",
              "searchKeyword"
            ]),
          }
        }
      },
    }),
  });
}
