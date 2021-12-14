import { createContext } from "react";

interface ContextState {
  theme: string | null;
}

const AppStateContext = createContext({} as ContextState);

export default AppStateContext;
