import React, { useState, useCallback } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { getMovieByName } from "../api/Search";
import ActivityIndicator from "../components/ActivityIndicator";
import MovieCard from "../components/MovieCard";
import useApi from "../hooks/useApi";
import { colors } from "../utils/colors";
import { debounce } from "../utils/helper";

const renderMovie = ({ item }) => <MovieCard movie={item} />;

const SearchMovie = () => {
  const [search, setSearch] = useState("");

  const {
    data: movie,
    error,
    loading,
    request: loadMovieByName,
  } = useApi(getMovieByName);

  const handleCallAPI = () => loadMovieByName(search);

  const delayedQuery = useCallback(debounce(handleCallAPI, 1200), [search]);

  const onChange = (name) => {
    setSearch(name);
    delayedQuery();
  };

  if (loading) return <ActivityIndicator visible={true} />;

  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={search}
        style={styles.search}
        onChangeText={(name) => onChange(name)}
        placeholder="Enter Name of a Movie..."
        placeholderTextColor={colors.green}
      />
      <View style={styles.result}>
        <FlatList
          data={movie.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMovie}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    margin: 10,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  result: {
    flex: 1,
  },
});

export default SearchMovie;
