// React Native
import { FlatList, View, StyleSheet, Text } from 'react-native';

// Hooks
import useRepositories from '../hooks/useRepositories';

// Components
import RepositoryItem from "./item/RepositoryItem";

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
  const { repositories, loading, error } = useRepositories();

  if (loading) return <View><Text>Loading repositories...</Text></View>;

  if (error) return <View><Text>Failed to load repositories</Text></View>;

  console.log(repositories)

  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        keyExtractor={(item, index) =>
          item?.id ?? index.toString()
        }
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) =>
          <RepositoryItem repository={item} />
        }
      />
    </View>
  );
};
