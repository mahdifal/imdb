import { ApiResponse } from "apisauce";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

type ErrorProps = {
  // loadFunc: Promise<ApiResponse<unknown, unknown>>;
  loadFunc: () => Promise<any>;
};

export default function Error({ loadFunc }: ErrorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>An Error has Occurred</Text>
      <Button title="Retry" onPress={loadFunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
