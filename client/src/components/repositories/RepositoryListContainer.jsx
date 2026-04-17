// React Native
import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";

// Components
import RepositoryItem from "./RepositoryItem";

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
  pressed: {
    backgroundColor: theme.colors.input,
  },
  normal: {
    backgroundColor: theme.colors.white,
  }
});

// Separator
const ItemSeparator = () => <View style={styles.separator} />;

// Component
export default function RepositoryListContainer({ repositories }) {
  // React Router hook
  const navigate = useNavigate();

  // Handles clicking on a single repository
  function handlePress(id) {
    navigate(`/repository/${id}`);
  }

  // Repositories list
  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => handlePress(item.id)}
            style={({pressed}) => pressed ? styles.pressed : styles.normal}
          >
            <RepositoryItem repository={item} />
          </Pressable>
        )}
      />
    </View>
  );
}
