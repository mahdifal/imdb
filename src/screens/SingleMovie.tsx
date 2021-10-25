import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Animated,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMovieById } from "../api/Movie";
import Genre from "../components/Genre";
import { fontSize, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function App() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieById(route?.params?.id).then((response) =>
      setMovie(response.results)
    );
  }, [route?.params?.id]);
  // console.log(movie);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: "clamp",
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: "clamp",
  });

  const renderListItem = (item) => (
    <View style={styles.details}>
      <Text style={styles.name}>{movie.title}</Text>
      <Genre movie={movie} />
      <Text style={styles.year}>Year: {movie.year}</Text>
      <Text style={styles.rating}>Rating: {movie.rating}</Text>
      <Text style={styles.description}>Description:</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.saveArea}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {renderListItem()}
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslateY }],
            },
          ]}
          source={{ uri: movie.banner }}
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
          },
        ]}
      >
        <Text style={styles.title}>{movie.title}</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: "#eff3fb",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#402583",
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#62d1bc",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  topBar: {
    marginTop: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: colors.lemon,
    fontSize: fontSize.xl,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: "contain",
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
  name: {
    fontSize: fontSize.xl,
    color: colors.darkGreen,
  },
  details: {
    flex: 1,
    margin: 10,
    marginTop: 40,
  },
  year: {
    fontSize: fontSize.md,
  },
  rating: {
    fontSize: fontSize.md,
    color: colors.lightOrange,
  },
  description: {
    fontSize: fontSize.md,
  },
});

export default App;
