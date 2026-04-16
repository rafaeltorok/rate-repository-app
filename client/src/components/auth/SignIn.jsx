// React Native
import { Text, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

// Components
import SignInForm from "./SignInForm";

// Hooks
import useSignIn from "../../hooks/useSignIn";

// CSS Styles
import theme from "../../theme";

const styles = StyleSheet.create({
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
});

// Component
export default function SignIn() {
  // Custom hook to handle user authentication
  const [signIn, result] = useSignIn();

  // React Router hook
  const navigate = useNavigate();

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

  // Loading screen
  if (result.loading) {
    return <Text style={styles.header}>Authenticating user...</Text>;
  }

  // Login form when there are no currently logged in users
  return (
    <SignInForm onSubmit={onSubmit} error={result?.error} />
  );
}
