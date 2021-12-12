import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function Splash() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      navigation.replace("App", { screen: "Home" });
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <View style={styles.loading}>
        {loading && <ActivityIndicator size={"large"} color={"#464646"} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffca42",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "50%",
  },
  loading: {
    bottom: 100,
  },
});
