import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getGenreMovieById } from "../api/Movie";
import Thumbnail from "./Thumbnail";
import Title from "./Title";

const rendermovie = ({ item }) => <Thumbnail id={item.id} movie={item} />;

export default function movieList({ genre }) {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const unsubscribe = getGenreMovieById(genre.id).then((response) =>
      setmovie(response.data)
    );

    return () => unsubscribe;
  }, [genre]);

  if (!movie) return null;

  return (
    <View>
      <Title title={genre.name} />
      <FlatList
        data={movie}
        keyExtractor={(item) => item.id}
        renderItem={rendermovie}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
