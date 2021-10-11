import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Series from "./src/screens/Series";
import Actors from "./src/screens/Actors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Series" component={Series} />
        <Tab.Screen name="Actors" component={Actors} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
