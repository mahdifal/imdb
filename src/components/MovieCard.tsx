import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import StarRating from "./StarRating";
import { getMovieById, getCastByMovieId } from "../api/Movie";
import { useNavigation } from "@react-navigation/core";
import NumberRating from "./NumberRating";
import Title from "./Title";
import Genre from "./Genre";

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  if (!movie) return null;

  return (
    <Pressable
      onPress={() => navigation.navigate("SingleMovie", { id: movie.id })}
      style={[styles.container, styles.shadow]}
    >
      <View>
        <Image style={styles.image} source={{ uri: movie.poster }} />
      </View>
      <View style={styles.detailes}>
        <Title title={movie.title} />
        {/* <Text style={styles.normalText}>Actor: {cast.actor}</Text> */}
        <Genre movie={movie.genres} />
        <View style={styles.rateContainer}>
          <NumberRating rate={movie.rating} />
          <StarRating
            scorePercent={(movie.imdb_rating / 10) * 100}
            totalScore={5}
          />
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    margin: 8,
    backgroundColor: "#ffffff",
  },
  shadow: {
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  image: {
    width: 100,
    height: 152,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  detailes: {
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10,
    overflow: "hidden",
    flex: 1,
  },
  normalText: {
    marginBottom: 10,
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
export default MovieCard;
