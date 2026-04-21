// React Native
import { NativeRouter } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

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
console.log('Client type:', typeof apolloClient);
console.log('Client methods:', apolloClient ? Object.keys(apolloClient) : 'undefined');

const App = () => {
  return (
    <>
      <StatusBar style="light" />
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
