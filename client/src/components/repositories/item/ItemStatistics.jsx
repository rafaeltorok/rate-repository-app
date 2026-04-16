// React Native
import { Text, View, StyleSheet } from "react-native";

// Utils
import formatNumber from "../../../utils/formatNumber";

// Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  row: {
    margin: theme.spacing.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  section: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: theme.spacing.small,
    alignItems: "center",
  },
  label: {
    fontFamily: theme.fonts.main,
    color: theme.colors.textSecondary,
  },
  data: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
});

// Component
export default function ItemStatistics({ repository }) {
  return (
    <View style={styles.row}>
      <View style={styles.section}>
        <Text style={styles.data}>
          {formatNumber(repository.stargazersCount)}
        </Text>
        <Text style={styles.label}>Stars</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.data}>{formatNumber(repository.forksCount)}</Text>
        <Text style={styles.label}>Forks</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.data}>{formatNumber(repository.reviewCount)}</Text>
        <Text style={styles.label}>Reviews</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.data}>
          {formatNumber(repository.ratingAverage)}
        </Text>
        <Text style={styles.label}>Rating</Text>
      </View>
    </View>
  );
}
