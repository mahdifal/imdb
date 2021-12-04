import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Movies from "../screens/Movies";
import SingleMovie from "../screens/SingleMovie";

const HomeNavigator = createNativeStackNavigator();

export default function MovieNavigator() {
  return (
    <HomeNavigator.Navigator>
      <HomeNavigator.Screen
        options={{ headerShown: false }}
        name="Movies"
        component={Movies}
      />
      <HomeNavigator.Screen
        options={{ headerShown: false }}
        name="SingleMovie"
        component={SingleMovie}
      />
    </HomeNavigator.Navigator>
  );
}
