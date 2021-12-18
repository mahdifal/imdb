import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { colors } from "../utils/colors";

type Props = {
  visible: boolean;
};

export default function ActivityIndicator({ visible = false }: Props) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../../assets/animations/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.white,
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});
