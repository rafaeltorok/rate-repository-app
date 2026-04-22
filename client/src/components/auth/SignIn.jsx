// React Native
import { Text, StyleSheet, View, Pressable } from "react-native";
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
  link: {
    textDecorationLine: "underline",
    color: theme.colors.primary,
    textAlign: "center"
  }
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

      // Redirect to the repositories list after a successful authentication
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  // Handle click on a single repository
  function handlePress() {
    navigate(`/signup`);
  }

  // Loading screen
  if (result.loading) {
    return <Text style={styles.header}>Authenticating user...</Text>;
  }

  // Login form when there are no currently logged in users
  return (
    <View>
      <SignInForm onSubmit={onSubmit} error={result?.error} />
      <Pressable
        onPress={handlePress}
      >
        <Text style={styles.link}>Not an user yet? Create an account</Text>
      </Pressable>
    </View>
  );
}
