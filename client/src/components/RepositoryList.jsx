// React Native
import { FlatList, View, StyleSheet } from 'react-native';

// Data
import repositories from '../data/repositories';

// Components
import RepositoryItem from './item/RepositoryItem';

// Styles
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  separator: {
    height: theme.spacing.medium,
  },
});

// Separator
const ItemSeparator = () => <View style={styles.separator} />;

// Component
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
