import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    margin: 10,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.lightGray,
    color: colors.darkSplash,
  },
  result: {
    flex: 1,
  },
  loaderStyle: {
    marginVertical: spacing.md,
    alignItems: "center",
  },
});

export const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(56,56,56,0.9)",
  },
  searchInput: {
    margin: 10,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
    color: colors.lightGray,
  },
  result: {
    flex: 1,
  },
  loaderStyle: {
    marginVertical: spacing.md,
    alignItems: "center",
  },
});
