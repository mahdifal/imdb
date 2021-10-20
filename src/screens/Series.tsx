import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getSeriesByGenre } from "../api/Movie";
import Thumbnail from "../components/Thumbnail";

const renderSeries = ({ item }) => <Thumbnail id={item.imdb_id} />;

const Series = () => {
  const [drama, setDrama] = useState();

  useEffect(() => {
    getSeriesByGenre("Drama").then((series) => setDrama(series.results));
  }, []);
  console.log(drama);
  if (!drama) return null;

  return (
    <FlatList
      data={drama}
      keyExtractor={(item) => item.imdb_id}
      renderItem={renderSeries}
      horizontal={true}
    />
  );
};

export default Series;
