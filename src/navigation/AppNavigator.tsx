import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Genres from "../screens/Genres";
import Search from "../screens/Search";
import Movie from "./MovieNavigator";
import { colors } from "../utils/colors";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.darkOrange,
        tabBarInactiveTintColor: colors.gray,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return focused ? (
              <Ionicons name="videocam" color={color} size={size} />
            ) : (
              <Ionicons name="videocam-outline" color={color} size={size} />
            );
          }
          if (route.name === "Genres") {
            return focused ? (
              <MaterialCommunityIcons
                name="movie-filter"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-filter-outline"
                size={size}
                color={color}
              />
            );
          }
          if (route.name === "Search") {
            return focused ? (
              <MaterialCommunityIcons
                name="movie-search"
                size={size}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="movie-search-outline"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Movie}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Genres"
        component={Genres}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
}
