// React Native
import { NativeRouter } from "react-router-native";

// Components
import Main from "./src/components/Main";

// Utils
import createApolloClient from "./src/services/apolloClient";
import AuthStorage from "./src/services/authStorage";

// Context
import AuthStorageContext from "./src/contexts/AuthStorageContext";

// Apollo client
import { ApolloProvider } from "@apollo/client/react";
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
