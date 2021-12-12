import React, { useEffect, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getGenreMovieById } from "../api/Genre";
import useApi from "../hooks/useApi";
import AppContext from "../state/AppContext";
import { colors } from "../utils/colors";
import ActivityIndicator from "./ActivityIndicator";
import Thumbnail from "./Thumbnail";
import Title from "./Title";

const rendermovie = ({ item }) => <Thumbnail id={item.id} movie={item} />;

export default function movieList({ genre }) {
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

  if (error) {
    return <Text>A Error has Accord.</Text>;
  }

  return (
    <View
      style={[
        theme === "dark"
          ? styles.container
          : { ...styles.container, backgroundColor: colors.white },
      ]}
    >
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
