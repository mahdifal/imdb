import React, { useContext } from "react";
import { View, Image, Text, Pressable } from "react-native";
import StarRating from "./StarRating";
import { useNavigation } from "@react-navigation/core";
import NumberRating from "./NumberRating";
import Title from "./Title";
import Genre from "./Genre";
import AppContext from "../state/AppContext";
import { darkStyle, lightStyle } from "./Styles/MovieCard";

type MovieCardProps = {
  movie: {
    id: string;
    poster: string;
    title: string;
    genres: [];
    rating: string;
    imdb_rating: number;
    year: string;
  };
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigation = useNavigation();

  const { theme } = useContext(AppContext);

  if (!movie) {
    return null;
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("SingleMovie" as never, { id: movie.id })
      }
      style={[
        theme === "dark" ? darkStyle.container : lightStyle.container,
        theme === "dark" ? darkStyle.shadow : lightStyle.shadow,
      ]}
    >
      <View>
        <Image
          style={theme === "dark" ? darkStyle.image : lightStyle.image}
          source={{ uri: movie.poster }}
        />
      </View>
      <View style={theme === "dark" ? darkStyle.detailes : lightStyle.detailes}>
        <Title theme={theme} title={movie.title} />
        <Genre theme={theme} movies={movie.genres} />
        <View
          style={
            theme === "dark"
              ? darkStyle.rateContainer
              : lightStyle.rateContainer
          }
        >
          <NumberRating rate={movie.rating} />
          <StarRating
            scorePercent={(movie.imdb_rating / 10) * 100}
            totalScore={5}
          />
        </View>
        <View
          style={[
            theme === "dark"
              ? darkStyle.yearContainer
              : lightStyle.yearContainer,
          ]}
        >
          <Text
            style={[
              theme === "dark" ? darkStyle.yearText : lightStyle.yearText,
            ]}
          >
            Year: {movie.year}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(MovieCard);
