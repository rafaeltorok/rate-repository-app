// React Native
import { StyleSheet, Text } from "react-native";

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
    return <Text style={styles.header}>Loading repositories...</Text>;
  }

  // Error screen
  if (error) {
    return <Text style={styles.header}>Failed to load repositories</Text>;
  }

  // Renders the repositories container
  return (
    <RepositoryListContainer repositories={repositories} />
  );
}
