import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

export const lightStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 102,
  },
  banner: {
    width: 102,
    height: 150,
    borderRadius: spacing.sm,
    margin: 5,
  },
  title: {
    marginLeft: spacing.sm,
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
    borderRadius: spacing.sm,
    margin: 5,
  },
  title: {
    marginLeft: 8,
    color: colors.lightGray,
  },
});
