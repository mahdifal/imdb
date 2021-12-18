import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import App from "./AppNavigator";

type RootStackParamList = {
  Splash: undefined;
  App: undefined;
};

const InitNav = createNativeStackNavigator<RootStackParamList>();

export default function InitNavigator() {
  return (
    <InitNav.Navigator>
      <InitNav.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <InitNav.Screen
        name="App"
        component={App}
        options={{ headerShown: false }}
      />
    </InitNav.Navigator>
  );
}
