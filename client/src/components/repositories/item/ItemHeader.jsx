// React Native
import { Text, View, Image, StyleSheet } from "react-native";

// Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  mainRow: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.large,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.medium,
  },
  infoSection: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.small,
    flexShrink: 1,
  },
  nameRow: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  descriptionRow: {
    fontFamily: theme.fonts.main,
    color: theme.colors.textSecondary,
  },
  languageRow: {
    fontFamily: theme.fonts.main,
    borderRadius: theme.borderRadius.small,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: theme.spacing.small,
    alignSelf: "flex-start", // width wraps content
  },
});

// Component
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
