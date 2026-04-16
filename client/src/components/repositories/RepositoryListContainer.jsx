// React Native
import { FlatList, View, StyleSheet } from "react-native";

// Components
import RepositoryItem from "./item/RepositoryItem";

// Styles
import theme from "../../theme";

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
export default function RepositoryListContainer({ repositories }) {
  // Repositories list
  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
      />
    </View>
  );
}
