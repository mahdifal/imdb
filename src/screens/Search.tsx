import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { getActorIdByName } from "../api/Actors";
import MovieCard from "../components/MovieCard";
import { colors } from "../utils/colors";
import { debounce } from "../utils/helper";

// const renderActor = ({ item }) => <Text>  {item.title}</Text>;
const renderActor = ({ item }) => <MovieCard movie={item} />;

const Actors = () => {
  const [needle, setNeedle] = useState("");
  const [actor, setActor] = useState([]);

  const handleCallAPI = () =>
    getActorIdByName(needle).then((response) => setActor(response.data));

  const delayedQuery = useCallback(debounce(handleCallAPI, 1500), [needle]);

  const onChange = (name) => {
    setNeedle(name);
    delayedQuery();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={(name) => onChange(name)}
        placeholder="Enter Name of a Movie..."
        placeholderTextColor={colors.green}
      />
      <View style={styles.result}>
        <FlatList
          data={actor}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderActor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 10,
    // marginTop: 10,
  },
  search: {
    // width: "100%",
    marginHorizontal: 10,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  result: {
    flex: 1,
  },
});

export default Actors;
