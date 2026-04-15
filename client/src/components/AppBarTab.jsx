// React Native
import { Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

// Styles
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.large,
  },
  tabText: {
    fontFamily: theme.fonts.main,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

// Component
export default function AppBarTab({ tabName, link }) {
  return (
    <Link to={link} style={styles.tab}>
      <Text style={styles.tabText}>{tabName}</Text>
    </Link>
  );
}
