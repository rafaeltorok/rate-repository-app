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
    marginBottom: theme.spacing.medium,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
  pressed: {
    backgroundColor: theme.colors.pressed,
  },
  normal: {
    backgroundColor: theme.colors.white,
  },
});

// Component
export default function RepositoryItem({
  repository,
  showFullInfo,
  isPressed = false,
}) {
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
    <View
      style={
        isPressed
          ? [styles.repositoryItem, styles.pressed]
          : [styles.repositoryItem, styles.normal]
      }
      testID="repositoryItem"
    >
      <ItemHeader repository={repository} />
      <ItemStatistics repository={repository} />
      {showFullInfo && <Button title="Open in Github" onPress={handleUrl} />}
    </View>
  );
}
