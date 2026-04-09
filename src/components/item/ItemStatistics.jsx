// React Native
import { Text, View, StyleSheet } from 'react-native';

// Utils
import formatNumber from "../../utils/formatNumber";

const styles = StyleSheet.create({
  row: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  section: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 5,
    alignItems: "center"
  },
  label: {
    color: "#505050",
  },
  data: {
    fontWeight: "bold",
  },
});

export default function ItemStatistics({ repository }) {
  return (
    <View style={styles.row}>
      <View style={styles.section}>
        <Text style={styles.data}>{formatNumber(repository.stargazersCount)}</Text>
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
        <Text style={styles.data}>{formatNumber(repository.ratingAverage)}</Text>
        <Text style={styles.label}>Rating</Text>
      </View>
    </View>
  );
}
