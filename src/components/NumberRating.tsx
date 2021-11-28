import React from "react";
import { StyleSheet, Text } from "react-native";

export default function NumberRating({ rate }) {
  return <Text style={styles.rate}>{rate}</Text>;
}

const styles = StyleSheet.create({
  rate: {
    color: "#ff8c00",
    fontWeight: "bold",
  },
});
