import React, { useContext } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AppContext from "../state/AppContext";
import { darkStyles, lightStyles } from "./Styles/Thumbnail";

export default function Thumbnail({ movie }) {
  const { theme } = useContext(AppContext);

  const navigation = useNavigation();

  if (!movie) return null;

  return (
    <Pressable
      onPress={() => navigation.navigate("SingleMovie", { id: movie.id })}
    >
      <Image
        style={[theme === "dark" ? darkStyles.banner : lightStyles.banner]}
        source={{ uri: movie.poster }}
      />
      <View
        style={[
          theme === "dark" ? darkStyles.container : lightStyles.container,
        ]}
      >
        <Text style={[theme === "dark" ? darkStyles.title : lightStyles.title]}>
          {movie.title}
        </Text>
      </View>
    </Pressable>
  );
}
