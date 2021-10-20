import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getUpcomingMovies } from "../api/Movie";
import MovieCard from "../components/MovieCard";

const renderMovieCard = ({ item }) => <MovieCard id={item.imdb_id} />;

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const unsubscribe = getUpcomingMovies().then((response) =>
      setMovies(response.results)
    );

    return () => unsubscribe;
  }, []);
  // console.log("home =>", movies);
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.imdb_id}
      renderItem={renderMovieCard}
      initialNumToRender={6}
      getItemLayout={(data, index) => ({
        length: 150,
        offset: 150 * index,
        index,
      })}
    />
  );
}

export default Movies;
