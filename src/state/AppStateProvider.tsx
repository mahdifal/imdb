import React, { useState } from "react";
import { Appearance } from "react-native";
import AppContext from "./AppContext";

const AppStateProvider = ({ children }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((schema) => setTheme(schema.colorScheme));

  return (
    <AppContext.Provider value={{ theme }}>{children}</AppContext.Provider>
  );
};
export default AppStateProvider;
