import React, { useState, useCallback, useContext } from "react";
import { View, TextInput, FlatList } from "react-native";
import { getMovieByName } from "../api/Search";
import MovieCard from "../components/MovieCard";
import useApi from "../hooks/useApi";
import { colors } from "../utils/colors";
import { debounce } from "../utils/helper";
import { lightStyles, darkStyles } from "../components/Styles/Search";
import AppContext from "../state/AppContext";
import Error from "../components/Error";

const renderMovie = ({ item }) => <MovieCard movie={item} />;

const SearchMovie = () => {
  const { theme } = useContext(AppContext);

  const [search, setSearch] = useState<string>("");

  const [data, setData] = useState<[]>([]);

  const { error, request: loadMovieByName } = useApi(getMovieByName);

  const handleCallAPI = () =>
    loadMovieByName(search).then((res) => {
      setData(res.data.data);
    });

  const delayedQuery = useCallback(debounce(handleCallAPI, 1000), [search]);

  const onChange = (name: string) => {
    setSearch(name);
    delayedQuery();
  };

  return (
    <View
      style={[theme === "dark" ? darkStyles.container : lightStyles.container]}
    >
      {error && <Error loadFunc={handleCallAPI} />}
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
          keyExtractor={(_, index) => String(index)}
          renderItem={renderMovie}
        />
      </View>
    </View>
  );
};

export default SearchMovie;
