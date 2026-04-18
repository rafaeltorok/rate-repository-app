// React Native
import { StyleSheet, View, Text } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

// GraphQL queries
import { useQuery } from "@apollo/client";
import { LOGGED_USER } from "../graphql/authentication";

// Components
import AppBar from "./AppBar";
import RepositoryList from "./repositories/RepositoryList";
import SingleRepository from "./repositories/SingleRepository";
import SignIn from "./auth/SignIn";
import SignOut from "./auth/SignOut";
import CreateReview from "./screens/CreateReview";
import About from "./screens/About";

// Styles
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
});

// Main component
export default function Main() {
  // Fetches the currently logged in user data if present
  const { data, loading } = useQuery(LOGGED_USER);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Loading app information...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        {/* Main page, the repositories list */}
        <Route
          path="/"
          element={
            data?.me ? <RepositoryList /> : <Navigate to="/signin" replace />
          }
        />

        {/* The single repository page, containing the full information */}
        <Route
          path="/repository/:id"
          element={
            data?.me ? <SingleRepository /> : <Navigate to="/signin" replace />
          }
        />

        {/* Sign-in form */}
        <Route path="/signin" element={<SignIn />} />

        {/* Sign-out page */}
        <Route
          path="/signout"
          element={data?.me ? <SignOut /> : <Navigate to="/signin" replace />}
        />

        {/* Create a new review form */}
        <Route
          path="/review"
          element={
            data?.me ? <CreateReview /> : <Navigate to="/signin" replace />
          }
        />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* catch-all route */}
        {data?.me ? (
          <Route path="*" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="*" element={<Navigate to="/signin" replace />} />
        )}
      </Routes>
    </View>
  );
}
