import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getSeriesByGenre } from "../api/Movie";
import Thumbnail from "./Thumbnail";
import Title from "./Title";

const renderSeries = ({ item }) => <Thumbnail id={item.imdb_id} />;

export default function SeriesList({ genre }) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const unsubscribe = getSeriesByGenre(genre).then((response) =>
      setSeries(response.results)
    );

    return () => unsubscribe;
  }, [genre]);

  if (!series) return null;

  return (
    <View>
      <Title title={genre} />
      <FlatList
        data={series}
        keyExtractor={(item) => item.imdb_id}
        renderItem={renderSeries}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
