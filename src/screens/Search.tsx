import React, { useState, useCallback, useContext } from "react";
import { View, TextInput, FlatList, ActivityIndicator } from "react-native";
import { getMovieByName } from "../api/Search";
import MovieCard from "../components/MovieCard";
import useApi from "../hooks/useApi";
import { colors } from "../utils/colors";
import { debounce } from "../utils/helper";
import { lightStyles, darkStyles } from "../components/Styles/Search";
import AppContext from "../state/AppContext";

const renderMovie = ({ item }) => <MovieCard movie={item} />;

const SearchMovie = () => {
  const { theme } = useContext(AppContext);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const {
    // data: movie,
    error,
    loading,
    request: loadMovieByName,
  } = useApi(getMovieByName);

  const handleCallAPI = () =>
    loadMovieByName(search, currentPage).then((res) =>
      setData([...data, ...res.data.data])
    );

  const delayedQuery = useCallback(debounce(handleCallAPI, 1000), [
    search,
    currentPage,
  ]);

  const onChange = (name) => {
    setSearch(name);
    delayedQuery();
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
    // delayedQuery();
  };

  const renderLoader = () => {
    return loading ? (
      <View
        style={[
          theme === "dark" ? darkStyles.loaderStyle : lightStyles.loaderStyle,
        ]}
      >
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  // console.log("search =>", search, data.length, currentPage);

  // if (loading) return <ActivityIndicator visible={true} />;

  return (
    <View
      style={[theme === "dark" ? darkStyles.container : lightStyles.container]}
    >
      <TextInput
        defaultValue={search}
        style={[
          theme === "dark" ? darkStyles.searchInput : lightStyles.searchInput,
        ]}
        onChangeText={(name) => onChange(name)}
        placeholder="Enter Name of a Movie..."
        placeholderTextColor={theme === "dark" ? colors.gray : colors.green}
      />
      <View style={[theme === "dark" ? darkStyles.result : lightStyles.result]}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderMovie}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderLoader}
        />
      </View>
    </View>
  );
};

export default SearchMovie;
