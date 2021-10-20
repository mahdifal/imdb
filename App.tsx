import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Series from "./src/screens/Series";
import Actors from "./src/screens/Actors";
import Movies from "./src/screens/Movies";
import SingleMovie from "./src/screens/SingleMovie";
import { Ionicons } from "@expo/vector-icons";

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
      <HomeNavigator.Screen name="SingleMovie" component={SingleMovie} />
    </HomeNavigator.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOption={{
          activeTintColor: "crimson",
          inactiveTintColor: "gray",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let fontName = "";

            if (route.name === "Home") {
              fontName = focused ? "videocam" : "videocam-outline";
            }
            if (route.name === "Series") {
              fontName = focused ? "film" : "film-outline";
            }
            if (route.name === "Actors") {
              fontName = focused ? "man" : "man-outline";
            }
            return <Ionicons name={fontName} color={color} size={size} />;
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
          name="Series"
          component={Series}
        />
        <Tab.Screen name="Actors" component={Actors} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
