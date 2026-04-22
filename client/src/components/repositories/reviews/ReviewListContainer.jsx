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
    marginTop: theme.spacing.large,
  },
  noReviews: {
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    marginTop: theme.spacing.medium,
  },
});

// Separator
const ItemSeparator = () => <View style={styles.separator} />;

// Component
export default function ReviewListContainer({ id, repository }) {
  // Fetch all reviews from a particular repository
  const { reviews, loading } = useReviews(id);

  // Loading screen
  if (loading) {
    return <Text style={styles.header}>Loading reviews...</Text>;
  }

  // Order the reviews from newest to oldest
  const orderedReviews = reviews.slice().sort((a, b) => {
    // Create a copy of the original array to be sorted
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // Render the container for the reviews list
  return (
    <FlatList
      data={orderedReviews}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <RepositoryItem repository={repository} showFullInfo={true} />
      )}
      ListEmptyComponent={<Text style={styles.noReviews}>No reviews yet</Text>}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
}
