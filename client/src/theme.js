import { Platform } from "react-native";

const theme = {
  colors: {
    backgroundColor: "#e1e4e8",
    primary: "#0366d6",
    textPrimary: "#24292e",
    textSecondary: "#505050",
    white: "#ffffff",
    input: "#757575",
    error: "#d73a4a",
    appBar: "#24292e",
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontSize: {
    large: 25,
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  spacing: {
    small: 5,
    medium: 10,
    large: 20,
    veryLarge: 30,
  },
  borderRadius: {
    small: 5,
    medium: 10,
  },
};

export default theme;
