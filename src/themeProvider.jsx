"use client";

import React, { createContext, useEffect, useReducer, useState } from "react";

export const ThemeContext = createContext({
  state: { darkMode: true },
  dispatch: () => {},
});

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", "false");
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
      return { darkMode: false };
    case "DARKMODE":
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", "true");
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }
      return { darkMode: true };
    case "TOGGLE":
      const nextMode = !state.darkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", nextMode ? "true" : "false");
        if (nextMode) {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
        }
      }
      return { darkMode: nextMode };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("darkMode");
      if (saved === "false") {
        dispatch({ type: "LIGHTMODE" });
      } else {
        // Default to dark mode for sleek neumorphic look
        dispatch({ type: "DARKMODE" });
      }
    } catch {
      dispatch({ type: "DARKMODE" });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
