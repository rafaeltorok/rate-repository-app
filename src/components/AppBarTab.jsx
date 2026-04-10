import { Text, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  tabText: {
    color: "#ffffff",
    fontWeight: "bold"
  },
});

export default function AppBarTab({ tabName, link }) {
  return (
    <Link to={link} style={styles.tab}>
      <Text style={styles.tabText}>{tabName}</Text>
    </Link>
  );
}
