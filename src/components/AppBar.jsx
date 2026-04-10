// React Native
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Components
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    justifyContent: "space-evenly",
  },
});

export default function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTab tabName={"Repositories"} link={"/"} />
      <AppBarTab tabName={"Sign-in"} link={"/signin"} />
    </View>
  );
};
