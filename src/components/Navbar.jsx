"use client";

import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;

  const links = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Services", route: "services" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
  ];

  function toggleTheme() {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between neu-card px-6 py-3.5 backdrop-blur-md">
        {/* Brand / Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl neu-well-sm flex items-center justify-center font-bold text-lg text-blue-500 group-hover:scale-105 transition-transform duration-300">
            A
          </div>
          <span className="font-bold text-lg tracking-wide hidden sm:inline-block">
            Ashok<span className="text-blue-500">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-2 m-0 p-0 list-none">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.route}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  activeClass="active"
                  className="neu-nav-item"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Neumorphic Theme Toggle Switch */}
          <div className="ml-4 pl-4 border-l border-white/10 dark:border-white/5 flex items-center">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Color Theme"
              className={`neu-toggle-track ${darkMode ? "checked" : ""}`}
            >
              <div className="neu-toggle-thumb">
                {darkMode ? (
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Color Theme"
            className={`neu-toggle-track ${darkMode ? "checked" : ""}`}
          >
            <div className="neu-toggle-thumb">
              {darkMode ? (
                <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>

          <div className="neu-btn-circle !w-10 !h-10">
            <Hamburger
              toggled={toggle}
              size={18}
              duration={0.4}
              toggle={setToggle}
              color={darkMode ? "#f8fafc" : "#1e293b"}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden max-w-7xl mx-auto mt-2 neu-card p-4"
          >
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.route}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    activeClass="active"
                    onClick={() => setToggle(false)}
                    className="neu-nav-item text-center py-2.5"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
