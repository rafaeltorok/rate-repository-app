// React Native
import { View, StyleSheet, Text, FlatList } from "react-native";

// Hooks
import useReviews from "../../../hooks/useReviews";

// Components
import ReviewItem from "./ReviewItem";
import RepositoryItem from "../RepositoryItem";

// Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  separator: {
    height: theme.spacing.medium,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
    marginTop: theme.spacing.large
  },
});

// Separator
const ItemSeparator = () => <View style={styles.separator} />;

// Component
export default function ReviewListContainer({ id, repository }) {
  // Fetch all reviews from a particular repository
  const { reviews, loading, error } = useReviews(id);
  
  // Loading screen
  if (loading) {
    return <Text style={styles.header}>Loading reviews...</Text>;
  }

  // Error screen
  if (error) {
    return <Text style={styles.header}>Failed to load reviews</Text>;
  }

  // Render the container for the reviews list
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem repository={repository} showFullInfo={true} />}
      renderItem={({ item }) => (
        <ReviewItem review={item} />
      )}
    />
  );
}
