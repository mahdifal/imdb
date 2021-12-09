import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

export default function Title({ title, theme }) {
  return (
    <Text
      style={[
        theme === "dark"
          ? styles.title
          : { ...styles.title, color: colors.black },
      ]}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: colors.white,
  },
});
