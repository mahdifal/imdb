import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../utils/colors";

export default function Splash() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      navigation.replace("App", { screen: "Home" });
      if (isMounted) {
        setLoading(false);
      }
    }, 1500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")}
        style={styles.logo}
        resizeMode="cover"
      />
      <View style={styles.loading}>
        {loading && (
          <ActivityIndicator size={"large"} color={colors.darkSplash} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.splash,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "90%",
    height: "45%",
  },
  loading: {
    bottom: 100,
  },
});
