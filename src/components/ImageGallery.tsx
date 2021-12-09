import React from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("screen");

export default function ImageGallery({ movie }) {
  if (!movie?.images) {
    return <Text></Text>;
  }

  return (
    movie?.images && (
      <View style={styles.container}>
        <FlatList
          data={movie.images}
          keyExtractor={(item) => item}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemStyle}>
                <Image source={{ uri: item }} style={styles.imageStyle} />
              </View>
            );
          }}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "relative",
  },

  itemStyle: {
    width,
    height: width * 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    flex: 1,
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: "contain",
    borderRadius: 5,
  },
});
