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
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative overflow-hidden"
          >
            {/* Background Ambient Glows */}
            <div className="fixed top-1/4 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none -z-10" />
            <div className="fixed bottom-1/4 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -z-10" />

            <Navbar />
            <main>
              <Home />
              <About />
              <Services />
              <Projects />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
