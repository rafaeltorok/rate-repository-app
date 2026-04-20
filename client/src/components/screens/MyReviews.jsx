// React Native
import { View, Text, FlatList, StyleSheet } from "react-native";

// Components
import ReviewItem from "../repositories/reviews/ReviewItem";

// Hooks
import useMyReviews from "../../hooks/useMyReviews";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  separator: {
    height: theme.spacing.medium,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.medium,
    textAlign: "center",
    marginTop: theme.spacing.large
  },
  noReviews: {
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    marginTop: theme.spacing.medium,
  }
});

// Separator
const ItemSeparator = () => <View style={styles.separator} />;

// Render all the reviews for the currently logged in user
export default function MyReviews() {
  // Hook to get the list with all the user's reviews
  const { myReviews, loading, error } = useMyReviews();

  // Loading screen
  if (loading) {
    return <Text style={styles.header}>Loading reviews...</Text>;
  }

  // Error screen
  if (error) {
    return <Text style={styles.header}>Failed to load reviews</Text>;
  }

  return (
    <FlatList
      data={myReviews}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      ItemSeparatorComponent={ItemSeparator}
      ListEmptyComponent={<Text style={styles.noReviews}>No reviews yet</Text>}
      renderItem={({ item }) => (
        <ReviewItem review={item} myReview={true} />
      )}
    />
  );
}