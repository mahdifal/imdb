import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const lightStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 102,
  },
  banner: {
    width: 102,
    height: 150,
    borderRadius: 8,
    margin: 5,
  },
  title: {
    marginLeft: 8,
    color: colors.black,
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 102,
  },
  banner: {
    width: 102,
    height: 150,
    borderRadius: 8,
    margin: 5,
  },
  title: {
    marginLeft: 8,
    color: colors.lightGray,
  },
});
