import React, { useContext } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AppContext from "../state/AppContext";
import { darkStyles, lightStyles } from "./Styles/Thumbnail";

type ThumbnailProps = {
  movie: {
    id: string;
    poster: string;
    title: string;
  };
};

export default function Thumbnail({ movie }: ThumbnailProps) {
  const { theme } = useContext(AppContext);

  const navigation = useNavigation();

  if (!movie) {
    return null;
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("SingleMovie" as never, { id: movie.id } as never)
      }
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
