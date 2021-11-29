import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Genres from "./src/screens/Genres";
import Search from "./src/screens/Search";
import Movies from "./src/screens/Movies";
import SingleMovie from "./src/screens/SingleMovie";
import Screen from "./src/components/Screen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const HomeNavigator = createNativeStackNavigator();

function Home() {
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

export default function App() {
  return (
    <Screen>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOption={{
            activeTintColor: "crimson",
            inactiveTintColor: "gray",
          }}
          screenOptions={({ route }) => ({
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
            component={Home}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Genres"
            component={Genres}
          />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </Screen>
  );
}
