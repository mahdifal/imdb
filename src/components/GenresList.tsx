import React, { useEffect, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { getGenreMovieById } from "../api/Genre";
import useApi from "../hooks/useApi";
import AppContext from "../state/AppContext";
import { colors } from "../utils/colors";
import ActivityIndicator from "./ActivityIndicator";
import Error from "./Error";
import Thumbnail from "./Thumbnail";
import Title from "./Title";

type GenresListProps = {
  genre: {
    id: string;
    name: string;
  };
};

type RenderMovieProps = {
  item: {
    id: string[];
    movie: string[];
  };
};

const rendermovie = ({ item }: RenderMovieProps) => (
  <Thumbnail id={item.id} movie={item} />
);

export default function GenresList({ genre }: GenresListProps) {
  const { theme } = useContext(AppContext);

  const {
    data: movie,
    error,
    loading,
    request: loadGenreMovieById,
  } = useApi(getGenreMovieById);

  useEffect(() => {
    loadGenreMovieById(genre.id);
  }, []);

  return (
    <View
      style={[
        theme === "dark"
          ? styles.container
          : { ...styles.container, backgroundColor: colors.white },
      ]}
    >
      {error && <Error loadFunc={() => loadGenreMovieById(genre.id)} />}
      <ActivityIndicator visible={loading} />
      <Title theme={theme} title={genre.name} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(56,56,56,0.9)",
    paddingHorizontal: 10,
  },
});
