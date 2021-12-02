import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import GenresList from "../components/GenresList";
import { getMoiveByGenre } from "../api/Genre";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const Genre = () => {
  const {
    data: genre,
    error,
    loading,
    request: loadMovieByGenre,
  } = useApi(getMoiveByGenre);

  useEffect(() => {
    loadMovieByGenre();
  }, []);

  if (loading) return <ActivityIndicator visible={loading} />;

  return (
    <ScrollView style={styles.container}>
      {genre?.map((item) => (
        <GenresList genre={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default Genre;
