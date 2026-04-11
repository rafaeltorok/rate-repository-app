// React Native
import { NativeRouter } from 'react-router-native';

// Components
import Main from './src/components/Main';

// Apollo Client
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
const apolloClient = createApolloClient();

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
};

export default App;
