import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { getSeriesByImdbId } from "../api/Series";
import NumberRating from "./NumberRating";
import StarRating from "./StarRating";

export default function Thumbnail({ movie }) {
  // const [serie, setSerie] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = getSeriesByImdbId(id).then((response) =>
  //     setSerie(response.results)
  //   );

  //   return () => unsubscribe;
  // }, [id]);

  // if (!serie) return null;

  return (
    <Pressable style={styles.container}>
      <Image style={styles.banner} source={{ uri: movie.poster }} />
      <View style={styles.rateContainer}>
        {/* <View>
          <NumberRating rate={movie.imdb_rating} />
        </View> */}
        {/* <StarRating scorePercent={(movie.rating / 10) * 100} totalScore={5} /> */}
        <Text>{movie.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: "row",
    width: 102,
  },
  banner: {
    width: 102,
    height: 150,
    borderRadius: 8,
    margin: 5,
  },
});
