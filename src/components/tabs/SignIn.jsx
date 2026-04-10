// React Native
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button 
} from "react-native";

// Formik
import { useFormik } from 'formik';

// CSS Styles
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

// Component
export default function SignIn() {
  // Create an instance of Formik
  const formik = useFormik({
    initialValues: ({
      username: "",
      password: ""
    }),
    onSubmit
  });

  // Submit button function
  function onSubmit(values) {
    console.log(`Username: ${values.username}; Password: ${values.password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign-in</Text>
      <TextInput
        id="username"
        name="username"
        style={styles.inputField}
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        id="password"
        name="password"
        style={styles.inputField}
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        secureTextEntry={true}
      />
      <Button
        title="Submit"
        onPress={formik.handleSubmit}
      />
    </View>
  );
};
