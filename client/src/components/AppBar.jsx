// React Native
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

// GraphQL queries
import { useQuery } from "@apollo/client/react";
import { LOGGED_USER } from "../graphql/authentication";

// Components
import AppBarTab from "./AppBarTab";

// Styles
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    justifyContent: "space-evenly",
  },
});

// Component
export default function AppBar() {
  // Fetches the currently logged in user data if present
  const { data } = useQuery(LOGGED_USER);

  // Renders the Repositories and Sign-out tabs for logged users only
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {/* Main page, the repositories list */}
        {data?.me && <AppBarTab tabName={"Repositories"} link={"/"} />}

        {/* The Sign In and Sign Out pages, depending if there is an user logged in */}
        {data?.me ? (
          <AppBarTab tabName={"Sign Out"} link={"/signout"} />
        ) : (
          <AppBarTab tabName={"Sign In"} link={"/signin"} />
        )}

        {/* Create a new review form */}
        {data?.me && <AppBarTab tabName={"Create a review"} link={"/review"} />}

        {/* The currently logged in user's reviews */}
        {data?.me && <AppBarTab tabName={"My reviews"} link={"/myreviews"} />}

        {/* About page */}
        <AppBarTab tabName={"About"} link={"/about"} />
      </ScrollView>
    </View>
  );
}
