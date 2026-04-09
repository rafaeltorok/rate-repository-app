// React Native
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainRow: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  infoSection: {
    display: "flex",
    flexDirection: "column",
    gap: 5
  },
  nameRow: {
    fontWeight: "bold",
  },
  descriptionRow: {
    color: "#505050",
  },
  languageRow: {
    borderRadius: 5,
    backgroundColor: "#0366d6",
    color: "white",
    padding: 5,
    alignSelf: "flex-start"  // width wraps content
  },
});

export default function ItemHeader({ repository }) {
  return (
    <View style={styles.mainRow}>
      <Image
        style={styles.profilePic}
        source={{ uri: repository.ownerAvatarUrl }}
      />
      <View style={styles.infoSection}>
        <Text style={styles.nameRow}>{repository.fullName}</Text>
        <Text style={styles.descriptionRow}>{repository.description}</Text>
        <Text style={styles.languageRow}>{repository.language}</Text>
      </View>
    </View>
  );
}
