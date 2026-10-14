"use client";

import React, { createContext, useEffect, useReducer, useState } from "react";

export const ThemeContext = createContext({
  state: { darkMode: false },
  dispatch: () => {},
});

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", "false");
      }
      return { darkMode: false };
    case "DARKMODE":
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", "true");
      }
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  useEffect(() => {
    try {
      const mode = localStorage.getItem("darkMode");
      if (mode === "true") {
        dispatch({ type: "DARKMODE" });
      } else if (mode === "false") {
        dispatch({ type: "LIGHTMODE" });
      } else {
        localStorage.setItem("darkMode", "false");
        dispatch({ type: "LIGHTMODE" });
      }
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
