import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./src/components/Screen";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Screen>
  );
}
