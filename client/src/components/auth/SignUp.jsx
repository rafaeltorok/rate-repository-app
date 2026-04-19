// React Native
import { Text, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

// Components
import SignUpForm from "./SignUpForm";

// Hooks
import useSignUp from "../../hooks/useSignUp";
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
export default function SignUp() {
  // Custom hook to handle user authentication
  const [signUp, result] = useSignUp();
  const [signIn] = useSignIn();

  // React Router hook
  const navigate = useNavigate();

  // Submit button function
  async function onSubmit(values) {
    const { username, password } = values;

    try {
      // Sign up mutation
      await signUp({ username, password });

      // Automatically login the newly created user
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

  // Sign up form when there are no currently logged in users
  return (
    <SignUpForm onSubmit={onSubmit} error={result?.error} />
  );
}
