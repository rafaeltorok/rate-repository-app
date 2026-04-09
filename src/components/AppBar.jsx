// React Native
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Components
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 75,
    justifyContent: "center",
  },
});

export default function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTab tabName={"Repositories"} />
    </View>
  );
};
