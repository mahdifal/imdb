import React, { ReactElement, useState } from "react";
import { Appearance } from "react-native";
import AppContext from "./AppContext";

type Props = {
  children: ReactElement;
};

const AppStateProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((schema) => setTheme(schema.colorScheme));

  return (
    <AppContext.Provider value={{ theme }}>{children}</AppContext.Provider>
  );
};
export default AppStateProvider;
