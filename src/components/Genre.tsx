import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

export default function Genre({ movie }) {
  return (
    <View style={styles.genre}>
      {movie?.map((item) => (
        <Text style={styles.badge} key={item}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  genre: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge: {
    borderRadius: 3,
    borderWidth: 1,
    paddingHorizontal: 3,
    alignSelf: "flex-start",
    margin: 3,
    color: colors.darkGreen,
    borderColor: colors.green,
  },
});
