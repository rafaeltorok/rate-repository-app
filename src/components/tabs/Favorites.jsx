import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 30,
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  },
});

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
      <Text>Your favorite repositories will be displayed in here.</Text>
    </View>
  );
};
