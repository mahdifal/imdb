import React from "react";
import { StyleSheet, Text } from "react-native";

type RatingProps = {
  rate: string;
};

export default function NumberRating({ rate }: RatingProps) {
  return <Text style={styles.rate}>{rate}</Text>;
}

const styles = StyleSheet.create({
  rate: {
    color: "#ff8c00",
    fontWeight: "bold",
  },
});
