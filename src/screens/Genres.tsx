import React, { useEffect } from "react";
import { ScrollView } from "react-native";
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

  if (loading) {
    return <ActivityIndicator visible={loading} />;
  }

  return (
    <ScrollView>
      {genre?.map((item) => (
        <GenresList genre={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default Genre;
