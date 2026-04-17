// React Native
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

// GraphQL queries
import { useQuery } from "@apollo/client";
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
        {data?.me && <AppBarTab tabName={"Repositories"} link={"/"} />}
        {data?.me ? (
          <AppBarTab tabName={"Sign-out"} link={"/signout"} />
        ) : (
          <AppBarTab tabName={"Sign-in"} link={"/signin"} />
        )}
        <AppBarTab tabName={"Favorites"} link={"/favorites"} />
        <AppBarTab tabName={"Settings"} link={"/settings"} />
        <AppBarTab tabName={"About"} link={"/about"} />
        <AppBarTab tabName={"FAQ"} link={"/faq"} />
      </ScrollView>
    </View>
  );
}
