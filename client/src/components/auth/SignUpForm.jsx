// React Native
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

// Formik
import { useFormik } from "formik";

// Yup
import * as yup from "yup";

// Utils
import handlePasswordConfirmation from "../../utils/confirmPassword";

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
export default function SignUpForm({ onSubmit, error }) {
  // Handle the password confirmation
  yup.addMethod(yup.string, 'equalTo', handlePasswordConfirmation);

  // Yup validation Schema
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, "Username must be at least 5 chars long")
      .max(30, "Username cannot be more than 30 chars long")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "Password must be at least 5 chars long")
      .max(50, "Password cannot be more than 50 chars long")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .equalTo(yup.ref('password'), 'Passwords must match')
      .required("You must confirm your password"),
  });

  // Create an instance of Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      {/* Username field */}
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
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.username}
        </Text>
      )}

      {/* Password field */}
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
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.password}
        </Text>
      )}

      {/* Confirm password field */}
      <TextInput
        style={[
          styles.inputField,
          formik.touched.confirmPassword &&
            formik.errors.confirmPassword &&
            styles.errorField,
        ]}
        placeholder="confirm password"
        secureTextEntry={true}
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange("confirmPassword")}
        onBlur={formik.handleBlur("confirmPassword")}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.confirmPassword}
        </Text>
      )}

      {/* Submit button */}
      <Button title="Submit" onPress={formik.handleSubmit} />

      {/* Form error */}
      {error && (
        <Text
          style={{
            color: theme.colors.error,
            fontWeight: theme.fontWeights.bold,
          }}
        >
          {error?.message}
        </Text>
      )}
    </View>
  );
}
