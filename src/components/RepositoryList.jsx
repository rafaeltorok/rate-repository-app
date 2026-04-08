// React Native
import { FlatList, View, StyleSheet } from 'react-native';

// Data
import repositories from '../data/repositories';

// Components
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) =>
        <RepositoryItem repository={item} />
      }
    />
  );
};
