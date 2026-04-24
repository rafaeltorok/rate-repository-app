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
    fontSize: theme.fontSize.medium,
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
  const { data, loading, fetchMore } = useReviews({
    id,
    first: 5,
  });

  // Filter the reviews from the response data
  const reviews = data?.repository?.reviews?.edges
    ? data.repository.reviews.edges
        .map((edge) => edge.node)
        .filter((review) => review != null)
    : [];

  // Render the container for the reviews list
  return (
    <FlatList
      data={reviews}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <RepositoryItem repository={repository} showFullInfo={true} />
      )}
      ListEmptyComponent={
        loading ? (
          <Text style={styles.header}>Loading reviews...</Text>
        ) : (
          <Text style={styles.noReviews}>No reviews yet</Text>
        )
      }
      // Wrap the function to avoid accidental double calls
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
}
