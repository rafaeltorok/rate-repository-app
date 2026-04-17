// React Native
import { View, StyleSheet, Text } from "react-native";

// Utils
import formatDate from "../../../utils/formatDate";

// Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  reviewItem: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
  },
  reviewInfo: {
    flex: 1,
    flexDirection: "column",
  },
  ratingCircle: {
    width: theme.borderRadius.reviewRating,
    height: theme.borderRadius.reviewRating,
    borderWidth: 2,
    borderRadius: theme.borderRadius.reviewRating / 2,
    borderColor: theme.colors.primary,
    marginRight: theme.spacing.medium,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: theme.colors.primary,
    fontSize: theme.fontSize.medium,
    fontWeight: theme.fontWeights.bold
  },
  username: {
    fontWeight: theme.fontWeights.bold,
  },
  date: {
    color: theme.colors.textSecondary,
  },
  text: {
    paddingTop: theme.spacing.small,
  }
});

// Component
export default function ReviewItem({ review }) {
  // Error message
  if (!review) {
    return <Text>Failed to get review</Text>
  }

  // Display the review
  return (
    <View style={styles.reviewItem}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{formatDate(review.createdAt)}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
}
