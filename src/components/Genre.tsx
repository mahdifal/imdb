import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

export default function Genre({ movie, theme }) {
  return (
    <View style={styles.genre}>
      {movie?.map((item) => (
        <Text
          style={[
            theme === "dark"
              ? styles.badge
              : {
                  ...styles.badge,
                  color: colors.green,
                  borderColor: colors.darkGreen,
                },
          ]}
          key={item}
        >
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
    color: colors.lightGray,
    borderColor: colors.gray,
  },
});
