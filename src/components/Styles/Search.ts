import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    margin: 10,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  result: {
    flex: 1,
  },
  loaderStyle: {
    marginVertical: 16,
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
    marginVertical: 16,
    alignItems: "center",
  },
});
