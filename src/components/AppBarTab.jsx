// React Native
import { View, Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
  tabText: {
    color: "#ffffff",
  },
});

export default function AppBarTab ({ tabName }) {
  return (
    <View>
      <Pressable>
        <Text style={styles.tabText}>{tabName}</Text>
      </Pressable>
    </View>
  );
};
