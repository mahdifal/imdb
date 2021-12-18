import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { fontSize } from "../../utils/sizes";

export const lightStyles = StyleSheet.create({
  name: {
    fontSize: fontSize.xl,
    color: colors.darkGreen,
  },
  details: {
    flex: 1,
    margin: 10,
    marginTop: 40,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
  },
  mainTitle: {
    fontSize: fontSize.md,
    color: colors.coolGray,
  },
  subTitle: {
    fontSize: fontSize.md,
    color: colors.gray,
    marginLeft: 10,
  },
});

export const darkStyles = StyleSheet.create({
  name: {
    fontSize: fontSize.xl,
    color: colors.lightGray,
  },
  details: {
    flex: 1,
    margin: 10,
    marginTop: 40,
    padding: 10,
    backgroundColor: "rgba(56,56,56,0.9)",
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleBox: {
    display: "flex",
    flexDirection: "row",
  },
  mainTitle: {
    fontSize: fontSize.md,
    color: colors.white,
  },
  subTitle: {
    fontSize: fontSize.md,
    color: colors.lightGray,
    marginLeft: 10,
  },
});
