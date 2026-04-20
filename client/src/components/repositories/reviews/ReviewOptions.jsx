// React Native
import { View, StyleSheet, Button } from "react-native";

// Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  reviewOptions: {
    flex: 1,
    flexDirection: "row",
    margin: theme.spacing.medium,
    gap: theme.spacing.large
  },
});

export default function ReviewOptions({ repositoryId, reviewId, handleVisit, handleDelete }) {
  return (
    <View style={styles.reviewOptions}>
      <Button
        title="View repository"
        onPress={() => handleVisit(repositoryId)}
      />
      <Button
        color={theme.colors.error}
        title="Delete review"
        onPress={() => handleDelete(reviewId)}
      />
    </View>
  )
}
