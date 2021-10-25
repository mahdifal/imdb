import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getUpcomingMovies } from "../api/Movie";
import MovieCard from "../components/MovieCard";
import { spacing } from "../utils/sizes";

const renderMovieCard = ({ item }) => <MovieCard id={item.imdb_id} />;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = getUpcomingMovies().then((response) =>
      setMovies(response.results)
    );

    return () => unsubscribe;
  }, []);

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.imdb_id}
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
