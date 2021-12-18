import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../utils/colors";

type RatingProps = {
  rate: string;
};

export default function NumberRating({ rate }: RatingProps) {
  return <Text style={styles.rate}>{rate}</Text>;
}

const styles = StyleSheet.create({
  rate: {
    color: colors.darkOrange,
    fontWeight: "bold",
  },
});
