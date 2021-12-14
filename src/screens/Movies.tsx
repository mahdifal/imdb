import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";
import { getMovies } from "../api/Movie";
import Error from "../components/Error";
import MovieCard from "../components/MovieCard";
import useApi from "../hooks/useApi";
import AppContext from "../state/AppContext";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

const renderMovieCard = ({ item }) => <MovieCard movie={item} />;

function Movies() {
  const { theme } = useContext(AppContext);
  const { error, loading, request: loadMovies } = useApi(getMovies);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState([]);

  const ApiLoadMovie = () =>
    loadMovies(currentPage).then((res) => {
      setData([...data, ...res.data.data]);
    });

  useEffect(() => {
    // loadMovies(currentPage).then((res) => setData([...data, ...res.data.data]));
    loadMovies(currentPage).then((res) => console.log(res.data));
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderLoader = () => {
    return loading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <View
      style={[
        theme === "dark"
          ? styles.container
          : { ...styles.container, backgroundColor: colors.white },
      ]}
    >
      {error && <Error loadFunc={loadMovies(currentPage)} />}
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderMovieCard}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.01}
        ListFooterComponent={renderLoader}
        // removeClippedSubviews={true}
        contentContainerStyle={{
          padding: spacing.sm,
          paddingTop: StatusBar.currentHeight,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  loaderStyle: {
    alignItems: "center",
  },
});

export default Movies;
