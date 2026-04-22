// React Native
import { View, StyleSheet, Text, Button } from "react-native";

// Expo Linking
import * as Linking from "expo-linking";

// Components
import ItemHeader from "./ItemHeader";
import ItemStatistics from "./ItemStatistics";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  repositoryItem: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
    marginBottom: theme.spacing.medium,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
});

// Component
export default function RepositoryItem({ repository, showFullInfo }) {
  function handleUrl() {
    if (repository.url) Linking.openURL(repository.url);
  }

  // Guards against null repository values
  if (!repository) {
    return (
      <View>
        <Text>Failed to load repository information</Text>
      </View>
    );
  }

  // Display the full repository info on the screen
  return (
    <View style={styles.repositoryItem} testID="repositoryItem">
      <ItemHeader repository={repository} />
      <ItemStatistics repository={repository} />
      {showFullInfo && <Button title="Open in Github" onPress={handleUrl} />}
    </View>
  );
}
