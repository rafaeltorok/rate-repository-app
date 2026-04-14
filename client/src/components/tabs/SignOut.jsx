// React Native
import { View, Text, Button, StyleSheet } from "react-native";

// GraphQL queries
import { useQuery } from '@apollo/client';
import { LOGGED_USER } from "../../graphql/queries";

// React Router
import { useNavigate } from "react-router-native";

// Hooks
import useSignOut from "../../hooks/useSignOut";

// CSS styles
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
});

export default function SignOut() {
  // Fetches the currently logged in user data
  const { data, loading, error } = useQuery(LOGGED_USER);

  // Custom hook to handle an user logging out
  const signOut = useSignOut();

  // React Router hook
  const navigate = useNavigate();

  // Handles the logout option for the user
  async function handleSignOut() {
    await signOut();

    // Navigates to the Sign-in tab
    navigate("/signin");
  }

  // Loading screen
  if (loading) {
    return (
      <Text style={styles.header}>Loading user information...</Text>
    );
  }
  
  // Error screen
  if (error) {
    return (
      <Text style={styles.header}>Failed to load the logged in user info</Text>
    );
  }

  // Logged in user view
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Welcome, {data?.me.username}!</Text>
        <Button
          title="Logout"
          onPress={handleSignOut}
        />
    </View>
  );
}
