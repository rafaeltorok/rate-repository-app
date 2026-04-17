// React Native
import { StyleSheet, Text } from "react-native";
import { useParams } from 'react-router-native';

// Components
import RepositoryItem from "./RepositoryItem";

// Hooks
import useRepository from "../../hooks/useRepository";

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
export default function SingleRepository() {
  // Obtain the id through the url
  const { id } = useParams();

  // Fetch the data for a single repository
  const { data, loading, error } = useRepository(id);

  // Loading screen
  if (loading) {
    return <Text style={styles.header}>Loading repository information...</Text>;
  }

  // Error screen
  if (error) {
    return <Text style={styles.header}>Failed to load repository information</Text>;
  }

  // Display repository info
  return (
    <RepositoryItem repository={data?.repository} showFullInfo={true} />
  );
}
