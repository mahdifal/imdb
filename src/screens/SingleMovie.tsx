import React, { useEffect, useContext, useRef } from "react";
import { SafeAreaView, Animated } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getMovieById } from "../api/Movie";
import ImageGallery from "../components/ImageGallery";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import { lightStyles, darkStyles } from "./Styles/SingleMovie";
import SingleMovie from "../components/SingleMovie";
import AppContext from "../state/AppContext";

const HEADER_MAX_HEIGHT = 600;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

function App() {
  const { theme } = useContext(AppContext);
  const route = useRoute();

  const {
    data: movie,
    error,
    loading,
    request: loadMovieById,
  } = useApi(getMovieById);

  useEffect(() => {
    loadMovieById(route?.params?.id);
  }, [route?.params?.id]);

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

  const renderListItem = (item) => <SingleMovie movie={movie} theme={theme} />;

  return (
    <SafeAreaView
      style={[theme === "dark" ? darkStyles.saveArea : lightStyles.saveArea]}
    >
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {renderListItem()}
        <ImageGallery movie={movie} />
      </Animated.ScrollView>
      <Animated.View
        style={[
          theme === "dark" ? darkStyles.header : lightStyles.header,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <Animated.Image
          style={[
            theme === "dark"
              ? darkStyles.headerBackground
              : lightStyles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslateY }],
            },
          ]}
          source={{ uri: movie.poster }}
        />
      </Animated.View>
      <ActivityIndicator visible={loading} />
      <Animated.View
        style={[
          theme === "dark" ? darkStyles.topBar : lightStyles.topBar,
          {
            transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
          },
        ]}
      >
        {/* <Text style={styles.title}>{movie.title}</Text> */}
      </Animated.View>
    </SafeAreaView>
  );
}

export default App;
