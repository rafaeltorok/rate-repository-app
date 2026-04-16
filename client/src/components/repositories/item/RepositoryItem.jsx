// React Native
import { View, StyleSheet, Text } from "react-native";

// Components
import ItemHeader from "./ItemHeader";
import ItemStatistics from "./ItemStatistics";

// Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  repositoryItem: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
});

// Component
export default function RepositoryItem({ repository }) {
  // Guards against null repository values
  if (!repository) {
    return (
      <View>
        <Text style={styles.header}>Failed to load repository information</Text>
      </View>
    );
  }

  // Display the full repository info on the screen
  return (
    <View style={styles.repositoryItem} testID="repositoryItem">
      <ItemHeader repository={repository} />
      <ItemStatistics repository={repository} />
    </View>
  );
}
