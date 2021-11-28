import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StarRating = ({ style, scorePercent, totalScore = 5 }) => {
  let stars = "";

  for (let i = 0; i < totalScore; i++) {
    stars += "★";
  }

  // const scorePercent = (score / totalScore) * 100;

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
    color: "red",
  },
});

export default StarRating;
