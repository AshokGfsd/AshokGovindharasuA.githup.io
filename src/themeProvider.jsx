import React, { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();
let mode = localStorage.getItem("darkMode");
const initialState = { darkMode: mode === "true" };

if (mode === null) {
  localStorage.setItem("darkMode", "false");
}
const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      localStorage.setItem("darkMode", "false");
      return { darkMode: false };
    case "DARKMODE":
      localStorage.setItem("darkMode", "true");
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: false || state, dispatch: dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
