import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../utils/colors";

type TitleProps = {
  title: string;
  theme: "dark" | "light";
};

export default function Title({ title, theme }: TitleProps) {
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
