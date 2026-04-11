// React Native
import { NativeRouter } from 'react-router-native';

// Components
import Main from './src/components/Main';

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
};

export default App;
