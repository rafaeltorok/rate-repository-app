// React Native
import { View, StyleSheet } from 'react-native';

// Components
import ItemHeader from './ItemHeader';
import ItemStatistics from './ItemStatistics';

const styles = StyleSheet.create({
  repositoryItem: {
    padding: 20,
    backgroundColor: "white"
  },
});

export default function RepositoryItem({ repository }) {
  return (
    <View style={styles.repositoryItem}>
      <ItemHeader repository={repository} />
      <ItemStatistics repository={repository} />
    </View>
  );
};
