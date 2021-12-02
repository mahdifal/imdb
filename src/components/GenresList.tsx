import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getGenreMovieById } from "../api/Genre";
import useApi from "../hooks/useApi";
import ActivityIndicator from "./ActivityIndicator";
import Thumbnail from "./Thumbnail";
import Title from "./Title";

const rendermovie = ({ item }) => <Thumbnail id={item.id} movie={item} />;

export default function movieList({ genre }) {
  const {
    data: movie,
    error,
    loading,
    request: loadGenreMovieById,
  } = useApi(getGenreMovieById);

  // const load = React.useCallback(loadGenreMovieById(genre.id), []);
  useEffect(() => {
    loadGenreMovieById(genre.id);
    // load();
  }, []);

  if (!movie) return null;
  // console.log(movie);

  return (
    <View>
      <ActivityIndicator visible={loading} />
      <Title title={genre.name} />
      <FlatList
        data={movie.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={rendermovie}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
