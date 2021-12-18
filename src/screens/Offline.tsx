import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import { fontSize } from "../utils/sizes";
import { MaterialIcons } from "@expo/vector-icons";

export default function Offline() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Internet is unreachable</Text>
      <MaterialIcons name="wifi-off" size={fontSize.xxl} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coolGray,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: fontSize.lg,
    color: colors.white,
  },
});
