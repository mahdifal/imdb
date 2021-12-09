import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const lightStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    margin: 8,
    backgroundColor: "#ffffff",
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
});
