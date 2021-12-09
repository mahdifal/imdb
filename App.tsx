import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./src/components/Screen";
import AppNavigator from "./src/navigation/AppNavigator";
import { useNetInfo } from "@react-native-community/netinfo";
import AppState from "./src/state/AppStateProvider";
import Offline from "./src/screens/Offline";

export default function App() {
  const netInfo = useNetInfo();

  return (
    <Screen>
      <AppState>
        {!netInfo.isInternetReachable ? (
          <Offline />
        ) : (
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        )}
      </AppState>
    </Screen>
  );
}
