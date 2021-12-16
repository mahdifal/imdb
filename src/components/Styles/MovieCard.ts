import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { fontSize } from "../../utils/sizes";

export const lightStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    margin: 8,
    backgroundColor: colors.white,
  },
  shadow: {
    elevation: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  image: {
    width: 100,
    height: 152,
    borderBottomLeftRadius: fontSize.sm,
    borderTopLeftRadius: fontSize.sm,
  },
  detailes: {
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10,
    overflow: "hidden",
    flex: 1,
  },
  normalText: {
    marginBottom: 10,
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  yearContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  yearText: {
    color: colors.darkSplash,
  },
});

export const darkStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    margin: 8,
    backgroundColor: "rgba(56,56,56,0.9)",
  },
  shadow: {
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  image: {
    width: 100,
    height: 152,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  detailes: {
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10,
    overflow: "hidden",
    flex: 1,
  },
  normalText: {
    marginBottom: 10,
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  yearContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  yearText: {
    color: colors.lightGray,
  },
});
