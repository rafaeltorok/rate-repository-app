// React Native
import { StyleSheet, Text } from "react-native";

// React
import { useState } from "react";

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
  // Handle the ordering for the repositories list on the main page
  const [value, setValue] = useState("Latest");
  let orderBy;
  let orderDirection;

  // Match the option to the respective query variable
  switch (value) {
    case "Latest":
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
      break;
    case "Highest":
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
      break;
    case "Lowest":
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
      break;
  }

  // Fetch the list with all available repositories
  const { repositories, loading, error } = useRepositories(orderBy, orderDirection);

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
    <RepositoryListContainer repositories={repositories} value={value} setValue={setValue} />
  );
}
