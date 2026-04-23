// React Native
import { StyleSheet, Text, View } from "react-native";
import { useParams } from "react-router-native";

// Components
import ReviewListContainer from "./reviews/ReviewListContainer";

// Hooks
import useRepository from "../../hooks/useRepository";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: theme.spacing.small,
  },
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.medium,
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
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Loading repository information...</Text>
      </View>
    );
  }

  // Error screen
  if (error) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Failed to load repository information</Text>
      </View>
    );
  }

  // Display repository info
  return (
    <View style={styles.container}>
      <ReviewListContainer id={id} repository={data?.repository} />
    </View>
  );
}
