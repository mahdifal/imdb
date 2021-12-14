import React from "react";
import { Text, View } from "react-native";
import Genre from "./Genre";
import { lightStyles, darkStyles } from "./Styles/SingleMovie";

type SingleMovieProps = {
  movie: {
    title: string;
    genres: string;
    year: string;
    imdb_rating: string;
    released: string;
    runtime: string;
    country: string;
    director: string;
    writer: string;
    actors: string;
    awards: string;
  };
  // movies: [];
  theme: "dark" | "light";
};

export default function SingleMovie({ movie, theme }: SingleMovieProps) {
  return (
    <View style={[theme === "dark" ? darkStyles.details : lightStyles.details]}>
      <Text style={[theme === "dark" ? darkStyles.name : lightStyles.name]}>
        {movie.title}
      </Text>
      <Genre movies={movie?.genres} theme={theme} />
      <View
        style={[theme === "dark" ? darkStyles.titleBox : lightStyles.titleBox]}
      >
        <Text
          style={[
            theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
          ]}
        >
          Year:
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle,
          ]}
        >
          {movie.year}
        </Text>
      </View>
      <View
        style={[theme === "dark" ? darkStyles.titleBox : lightStyles.titleBox]}
      >
        <Text
          style={[
            theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
          ]}
        >
          Rating:
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle,
          ]}
        >
          {movie.imdb_rating}
        </Text>
      </View>
      <View
        style={[theme === "dark" ? darkStyles.titleBox : lightStyles.titleBox]}
      >
        <Text
          style={[
            theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
          ]}
        >
          Released:
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle,
          ]}
        >
          {movie.released}
        </Text>
      </View>
      <View
        style={[theme === "dark" ? darkStyles.titleBox : lightStyles.titleBox]}
      >
        <Text
          style={[
            theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
          ]}
        >
          Runtime:
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle,
          ]}
        >
          {movie.runtime}
        </Text>
      </View>
      <View
        style={[theme === "dark" ? darkStyles.titleBox : lightStyles.titleBox]}
      >
        <Text
          style={[
            theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
          ]}
        >
          Country:
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle,
          ]}
        >
          {movie.country}
        </Text>
      </View>
      <View
        style={[theme === "dark" ? darkStyles.titleBox : lightStyles.titleBox]}
      >
        <Text
          style={[
            theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
          ]}
        >
          Director:
        </Text>
        <Text
          style={[
            theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle,
          ]}
        >
          {movie.director}
        </Text>
      </View>
      <Text
        style={[
          theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
        ]}
      >
        Writer:{" "}
      </Text>
      <Text
        style={[theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle]}
      >
        {movie.writer}
      </Text>
      <Text
        style={[
          theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
        ]}
      >
        Actors:
      </Text>
      <Text
        style={[theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle]}
      >
        {movie.actors}
      </Text>
      <Text
        style={[
          theme === "dark" ? darkStyles.mainTitle : lightStyles.mainTitle,
        ]}
      >
        Awards:
      </Text>
      <Text
        style={[theme === "dark" ? darkStyles.subTitle : lightStyles.subTitle]}
      >
        {movie.awards}
      </Text>
    </View>
  );
}
