// React Native
import { View, StyleSheet, Text } from "react-native";

// Hooks
import useRepositories from "../../hooks/useRepositories";

// Components
import RepositoryListContainer from "./RepositoryListContainer";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
});

// Component
export default function RepositoryList() {
  // Fetch the list with all available repositories
  const { repositories, loading, error } = useRepositories();

  // Loading screen
  if (loading) {
    return (
      <View>
        <Text style={styles.header}>Loading repositories...</Text>
      </View>
    );
  }

  // Error screen
  if (error) {
    return (
      <View>
        <Text style={styles.header}>Failed to load repositories</Text>
      </View>
    );
  }

  // Renders the repositories container
  return (
    <RepositoryListContainer repositories={repositories} />
  );
}
