"use client";

import { useState, useEffect } from "react";
import Contact from "../views/Contact";
import Navbar from "../components/Navbar";
import About from "../views/About";
import Home from "../views/Home";
import Services from "../views/Services";
import Projects from "../views/Projects";
import LoadingScreen from "../components/LoadingScreen";
import { ThemeProvider } from "../themeProvider";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {!loading ? (
        <div>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </ThemeProvider>
  );
}
