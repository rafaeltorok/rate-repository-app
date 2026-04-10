// React Native
import { FlatList, View, StyleSheet } from 'react-native';

// Data
import repositories from '../data/repositories';

// Components
import RepositoryItem from './item/RepositoryItem';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) =>
          <RepositoryItem repository={item} />
        }
      />
    </View>
  );
};
