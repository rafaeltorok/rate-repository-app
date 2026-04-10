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
  author: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#505050"
  }
});

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About the app</Text>
      <Text>From the FullStackOpen course, Part 10. Section about React Native.</Text>
      <Text style={styles.author}>Developed by Rafael G. Torok</Text>
    </View>
  );
};
