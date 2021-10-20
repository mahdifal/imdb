import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import StarRating from "./StarRating";
import { getMovieById, getCastByMovieId } from "../api/Movie";
import { useNavigation } from "@react-navigation/core";
import NumberRating from "./NumberRating";
import Title from "./Title";

const MovieCard = ({ id }) => {
  const navigation = useNavigation();

  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieById(id).then((response) => setMovie(response.results));
    getCastByMovieId(id).then((response) => setCast(response));
  }, [id]);

  if (!movie) return null;

  return (
    <Pressable
      onPress={() => navigation.navigate("SingleMovie", { id })}
      style={[styles.container, styles.shadow]}
    >
      <View>
        <Image style={styles.image} source={{ uri: movie.image_url }} />
      </View>
      <View style={styles.detailes}>
        <Title title={movie.title} />
        {/* <Text style={styles.normalText}>Actor: {cast.actor}</Text> */}
        <View style={styles.genre}>
          {movie?.gen?.map((item) => (
            <Text style={styles.badge} key={item.id}>
              {item.genre}
            </Text>
          ))}
          {/* <Text style={styles.badge}>action</Text>
          <Text style={styles.badge}>drama</Text> */}
        </View>
        <View style={styles.rateContainer}>
          <NumberRating rate={movie.rating} />
          <StarRating scorePercent={(movie.rating / 10) * 100} totalScore={5} />
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
    width: "100%",
  },
  normalText: {
    marginBottom: 10,
  },
  genre: {
    flexDirection: "row",
  },
  badge: {
    borderRadius: 3,
    borderWidth: 1,
    paddingHorizontal: 3,
    alignSelf: "flex-start",
    margin: 3,
    color: "#bcbcbc",
    borderColor: "#bcbcbc",
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
export default MovieCard;
