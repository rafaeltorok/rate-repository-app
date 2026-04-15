// React Native
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigate } from "react-router-native";

// Hooks
import useSignIn from "../../hooks/useSignIn";

// Formik
import { useFormik } from "formik";

// Yup
import * as yup from "yup";

// CSS Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,
    padding: theme.spacing.veryLarge,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
  inputField: {
    fontFamily: theme.fonts.main,
    borderWidth: 1,
    borderColor: theme.colors.input,
    borderRadius: theme.borderRadius.small,
    padding: theme.spacing.medium,
  },
  errorField: {
    fontFamily: theme.fonts.main,
    borderColor: theme.colors.error,
  },
});

// Component
export default function SignIn() {
  // Custom hook to handle user authentication
  const [signIn, result] = useSignIn();

  // React Router hook
  const navigate = useNavigate();

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

  // Submit button function
  async function onSubmit(values) {
    const { username, password } = values;

    try {
      // Sign in mutation
      await signIn({ username, password });

      // Redirect after successful authentication
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  // Create an instance of Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  // Loading screen
  if (result.loading) {
    return <Text style={styles.header}>Authenticating user...</Text>;
  }

  // Error screen
  if (result.error) {
    return <Text style={styles.header}>Failed to authenticate user</Text>;
  }

  // Login form when there are no currently logged in users
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign-in</Text>
      <TextInput
        style={[
          styles.inputField,
          formik.touched.username &&
            formik.errors.username &&
            styles.errorField,
        ]}
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[
          styles.inputField,
          formik.touched.password &&
            formik.errors.password &&
            styles.errorField,
        ]}
        placeholder="password"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "#d73a4a" }}>{formik.errors.password}</Text>
      )}
      <Button title="Submit" onPress={formik.handleSubmit} />
    </View>
  );
}
