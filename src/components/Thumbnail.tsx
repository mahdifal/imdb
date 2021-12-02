import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function Thumbnail({ movie }) {
  const navigation = useNavigation();

  if (!movie) return null;

  return (
    <Pressable
      onPress={() => navigation.navigate("SingleMovie", { id: movie.id })}
    >
      <Image style={styles.banner} source={{ uri: movie.poster }} />
      <View style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 102,
  },
  banner: {
    width: 102,
    height: 150,
    borderRadius: 8,
    margin: 5,
  },
  title: {
    marginLeft: 8,
  },
});
