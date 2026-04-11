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
    fontSize: theme.fontSize.large
  },
  content: {
    fontFamily: theme.fonts.main,
  }
});

// Component
export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <Text style={styles.content}>Your favorite repositories will be displayed in here.</Text>
    </View>
  );
};
