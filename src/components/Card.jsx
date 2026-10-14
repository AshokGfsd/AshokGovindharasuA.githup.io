"use client";

import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="neu-card p-6 sm:p-8 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Card Header: Title & Tech Stack Well */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 dark:border-white/5">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-blue-500 group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>

          {/* Tech Stack Icon Tray */}
          <div className="neu-well-sm px-3 py-1.5 flex items-center gap-2 self-start sm:self-auto flex-wrap">
            {project.techStack.map((tech, index) => (
              <img
                src={tech}
                alt="Tech Stack Item"
                key={index}
                className="neu-tech-icon"
              />
            ))}
          </div>
        </div>

        {/* Keywords / Feature Tags */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.keywords.map((keyword, index) => (
            <span
              key={index}
              className="neu-badge !text-[11px] !py-1 !px-2.5 font-medium"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-sm sm:text-base opacity-75 leading-relaxed font-normal text-justify my-2">
          {project.description}
        </p>
      </div>

      {/* Card Action Buttons Tray */}
      <div className="mt-6 pt-5 border-t border-white/10 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {project.frontendLink && (
            <a
              href={project.frontendLink}
              target="_blank"
              rel="noreferrer"
              className="neu-btn !text-xs !py-2 !px-3.5"
              title="View Frontend Repository"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-4 h-4 object-contain filter invert-0 dark:invert"
              />
              <span>Frontend</span>
            </a>
          )}

          {project.backendLink && (
            <a
              href={project.backendLink}
              target="_blank"
              rel="noreferrer"
              className="neu-btn !text-xs !py-2 !px-3.5"
              title="View Backend Repository"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-4 h-4 object-contain filter invert-0 dark:invert"
              />
              <span>Backend</span>
            </a>
          )}
        </div>

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="neu-btn-primary !text-xs !py-2 !px-4"
            title="Launch Live Application"
          >
            <span>Live Demo</span>
            <span className="font-bold">↗</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
