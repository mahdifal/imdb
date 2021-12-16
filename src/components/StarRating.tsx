import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

type StarRatingProps = {
  style?: {};
  scorePercent: number;
  totalScore: number;
};

const StarRating = ({
  style,
  scorePercent,
  totalScore = 5,
}: StarRatingProps) => {
  let stars = "";

  for (let i = 0; i < totalScore; i++) {
    stars += "★";
  }

  return (
    <View style={[styles.container, style]}>
      <Text numberOfLines={1}>{stars}</Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="clip"
        style={[styles.score, { width: `${scorePercent}%` }]}
      >
        {stars}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  score: {
    position: "absolute",
    color: colors.red,
  },
});

export default StarRating;
