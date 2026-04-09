// React Native
import { StyleSheet, View } from 'react-native';

// Components
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8"
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default Main;