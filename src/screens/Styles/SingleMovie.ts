import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { fontSize } from "../../utils/sizes";

const HEADER_MAX_HEIGHT = 600;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const lightStyles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: "#eff3fb",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#402583",
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#62d1bc",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: colors.lemon,
    fontSize: fontSize.xl,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: "contain",
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
  rating: {
    fontSize: fontSize.md,
    color: colors.lightOrange,
  },
  description: {
    fontSize: fontSize.md,
  },
});

export const darkStyles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#402583",
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#62d1bc",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: colors.lemon,
    fontSize: fontSize.xl,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: "contain",
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
  rating: {
    fontSize: fontSize.md,
    color: colors.lightOrange,
  },
  description: {
    fontSize: fontSize.md,
  },
});
