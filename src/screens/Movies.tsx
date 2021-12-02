import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getMovies } from "../api/Movie";
import ActivityIndicator from "../components/ActivityIndicator";
import MovieCard from "../components/MovieCard";
import useApi from "../hooks/useApi";
import { spacing } from "../utils/sizes";

const renderMovieCard = ({ item }) => <MovieCard movie={item} />;

function Movies() {
  const {
    data: movies,
    error,
    loading,
    request: loadMovies,
  } = useApi(getMovies);

  useEffect(() => {
    loadMovies();
  }, []);

  if (loading) return <ActivityIndicator visible={loading} />;

  return (
    <FlatList
      data={movies.data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMovieCard}
      // initialNumToRender={6}
      contentContainerStyle={{
        padding: spacing.sm,
        paddingTop: StatusBar.currentHeight,
      }}
      getItemLayout={(data, index) => ({
        length: 150,
        offset: 150 * index,
        index,
      })}
    />
  );
}

export default Movies;
