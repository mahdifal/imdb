import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Home = () => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/source_code.jpg")}
        />
      </View>
      <View style={styles.detailes}>
        <Text style={styles.title}>Movie Title</Text>
        <Text style={styles.normalText}>Director Name</Text>
        <View style={styles.genre}>
          <Text style={styles.badge}>action</Text>
          <Text style={styles.badge}>drama</Text>
        </View>
        <View style={styles.rateContainer}>
          <Text style={styles.rate}>6.8</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    margin: 8,
    backgroundColor: "#ffffff",
  },
  shadow: {
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  image: {
    width: 100,
    height: 152,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  detailes: {
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 10,
    overflow: "hidden",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  normalText: {
    marginBottom: 10,
  },
  genre: {
    flexDirection: "row",
  },
  badge: {
    borderRadius: 3,
    borderWidth: 1,
    paddingHorizontal: 3,
    alignSelf: "flex-start",
    margin: 3,
    color: "#bcbcbc",
    borderColor: "#bcbcbc",
  },
  rateContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  rate: {
    color: "#ff8c00",
    fontWeight: "bold",
  },
});

export default Home;
