import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 30,
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#757575",
    borderRadius: 5,
    padding: 10
  },
});

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign-in</Text>
      <TextInput
        style={styles.inputField}
        placeholder="username"
      />
      <TextInput
        style={styles.inputField}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button
        title="Login"
      />
    </View>
  );
};
