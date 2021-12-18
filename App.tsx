import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./src/components/Screen";
import { useNetInfo } from "@react-native-community/netinfo";
import AppState from "./src/state/AppStateProvider";
import Offline from "./src/screens/Offline";
import InitNavigator from "./src/navigation/InitNavigator";

export default function App() {
  const netInfo = useNetInfo();

  return (
    <Screen>
      <AppState>
        {!netInfo.isInternetReachable ? (
          <Offline />
        ) : (
          <NavigationContainer>
            <InitNavigator />
          </NavigationContainer>
        )}
      </AppState>
    </Screen>
  );
}
