import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import SeriesList from "../components/SeriesList";
import { getSeriesByGenre } from "../api/Movie";

const Series = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    getSeriesByGenre().then((res) => setGenre(res));
  }, []);

  // console.log(genre);

  return (
    <ScrollView style={styles.container}>
      {genre?.map((item) => (
        <SeriesList genre={item} key={item.id} />
      ))}
      {/* <SeriesList genre="Drama" />
      <SeriesList genre="Family" />
      <SeriesList genre="Fantasy" />
      <SeriesList genre="Comedy" />
      <SeriesList genre="Romance" />
      <SeriesList genre="Horror" /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default Series;
