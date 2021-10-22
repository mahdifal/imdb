import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
}

export default Movies;
