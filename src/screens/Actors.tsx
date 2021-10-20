import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { getActorIdByName } from "../api/Actors";

const renderActor = ({ item }) => <Text>{item.name}</Text>;

const Actors = () => {
  const [needle, setNeedle] = useState();
  const [actor, setActor] = useState([]);

  useEffect(() => {
    getActorIdByName(needle).then((response) => setActor(response.results));
  }, [needle]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        onChangeText={(text) => setNeedle(text)}
      />
      <View style={styles.result}>
        <FlatList
          data={actor}
          keyExtractor={(item) => item.imdb_id}
          renderItem={renderActor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  search: {
    width: "100%",
    height: 40,
    borderWidth: 1,
  },
  result: {
    flex: 1,
  },
});

export default Actors;
