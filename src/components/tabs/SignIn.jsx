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

// Yup
import * as yup from 'yup';

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
  errorField: {
    borderColor: "#d73a4a",
  }
});

// Component
export default function SignIn() {
  // Yup validation Schema
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 chars long")
      .required("Username is required"),
    password: yup
      .string()
      .min(3, "Password must be at least 3 chars long")
      .required("Password is required"),
  });

  // Create an instance of Formik
  const formik = useFormik({
    initialValues: ({
      username: "",
      password: ""
    }),
    validationSchema,
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
        style={[
          styles.inputField, 
          formik.touched.username && formik.errors.username && styles.errorField
        ]}
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.inputField,
          formik.touched.password && formik.errors.password && styles.errorField
        ]}
        placeholder="password"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.password}</Text>
      )}
      <Button
        title="Submit"
        onPress={formik.handleSubmit}
      />
    </View>
  );
};
