import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SeriesList from "../components/SeriesList";

const Series = () => {
  return (
    <ScrollView style={styles.container}>
      <SeriesList genre="Drama" />
      <SeriesList genre="Family" />
      <SeriesList genre="Fantasy" />
      <SeriesList genre="Comedy" />
      <SeriesList genre="Romance" />
      <SeriesList genre="Horror" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default Series;
