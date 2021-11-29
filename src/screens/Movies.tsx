import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getUpcomingMovies } from "../api/Movie";
import MovieCard from "../components/MovieCard";
import { spacing } from "../utils/sizes";

const renderMovieCard = ({ item }) => <MovieCard movie={item} />;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = getUpcomingMovies().then((response) =>
      setMovies(response.data)
    );

    return () => unsubscribe;
  }, []);

  return (
    <FlatList
      data={movies}
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
