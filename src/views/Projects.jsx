"use client";

import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projectsData } from "../constants";

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <section id="projects" className="py-8 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="mb-3">
            <span className="neu-badge">Portfolio Highlights</span>
          </div>
          <h2 className="neu-title">
            Featured <span className="neu-title-accent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-base sm:text-lg opacity-70 mt-4 max-w-2xl mx-auto">
            A selection of fullstack, frontend, and real-time applications
            demonstrating end-to-end functionality, responsive UX, and scalable
            backend design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projectsData.map((project, i) => (
            <Card project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
