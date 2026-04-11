// React Native
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// Components
import AppBarTab from './AppBarTab';

// Styles
import theme from '../theme';

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Repositories"} link={"/"} />
        <AppBarTab tabName={"Sign-in"} link={"/signin"} />
        <AppBarTab tabName={"Favorites"} link={"/favorites"} />
        <AppBarTab tabName={"Settings"} link={"/settings"} />
        <AppBarTab tabName={"About"} link={"/about"} />
        <AppBarTab tabName={"FAQ"} link={"/faq"} />
      </ScrollView>
    </View>
  );
};
