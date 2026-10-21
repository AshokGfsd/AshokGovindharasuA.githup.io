"use client";

import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer.",
      "Front End Architect.",
      "Node & Express Engineer.",
      "UI/UX Craftsperson.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const heroBgUrl = heroBg?.src || heroBg || "/assets/webdev.svg";

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-8 flex items-center justify-center transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Intro & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 neu-badge px-4 py-2 mb-6 cursor-default">
              <span className="neu-status-dot" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Available for New Projects & Roles
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-4">
              <span className="block opacity-90">Hi, I'm</span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl mt-1">
                Ashok Govindharasu.A
              </span>
              <div className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-blue-500 min-h-[48px]">
                <span>{text}</span>
                <Cursor cursorStyle="|" cursorColor="currentColor" />
              </div>
            </h1>

            {/* Bio Paragraph */}
            <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 opacity-80 leading-relaxed font-normal">
              A dedicated Full Stack Developer passionate about crafting responsive,
              intuitive, and high-performance digital applications. Skilled in modern JavaScript,
              React, Next.js, Node.js, and database engineering, delivering production-grade solutions
              built for scale and tactile user delight.
            </p>

            {/* Social Links as Neumorphic Circular Buttons */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {contactLinks.map((el, i) => (
                <a
                  key={i}
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={el.name}
                  className="neu-btn-circle group"
                  title={el.name}
                >
                  <img
                    alt={el.name}
                    src={el.url}
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <a
                href="./Ashok_Resume_211026.pdf"
                target="_blank"
                rel="noreferrer"
                className="neu-btn-primary"
              >
                <span>View Resume</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>

              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                className="neu-btn !px-7 !py-3 font-semibold"
              >
                <span>Explore Work</span>
                <svg
                  className="w-4 h-4 ml-1 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center w-full max-w-lg lg:max-w-none"
          >
            <div className="relative w-full max-w-md lg:max-w-lg p-6 sm:p-8 neu-card neu-floating">
              {/* Inner Well Backdrop */}
              <div className="neu-well p-6 sm:p-8 flex items-center justify-center overflow-hidden">
                <img
                  src={heroBgUrl}
                  alt="Developer Illustration"
                  className="w-full h-auto max-h-[360px] object-contain drop-shadow-lg"
                />
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -right-3 neu-badge px-3 py-1 font-bold text-xs text-blue-500 shadow-md">
                Fullstack Dev
              </div>
              <div className="absolute -bottom-3 -left-3 neu-badge px-3 py-1 font-bold text-xs text-emerald-500 shadow-md">
                Production-Ready
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
