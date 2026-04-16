// React Native
import { View, Text, StyleSheet } from "react-native";

// Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.large,
    padding: theme.spacing.veryLarge,
  },
  header: {
    fontFamily: theme.fonts.main,
    textAlign: "center",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSize.large,
  },
  author: {
    fontFamily: theme.fonts.main,
    textAlign: "center",
    fontStyle: "italic",
    color: theme.colors.textSecondary,
  },
  content: {
    fontFamily: theme.fonts.main,
  },
});

// Component
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About the app</Text>
      <Text style={styles.content}>
        From the FullStackOpen course, Part 10. Section about React Native.
      </Text>
      <Text style={styles.author}>Developed by Rafael G. Torok</Text>
    </View>
  );
}
