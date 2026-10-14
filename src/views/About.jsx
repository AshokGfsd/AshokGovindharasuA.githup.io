"use client";

import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-8 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="mb-3">
            <span className="neu-badge">Professional Background</span>
          </div>
          <h2 className="neu-title">
            About <span className="neu-title-accent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="neu-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl neu-well-sm flex items-center justify-center text-blue-500 mb-6 font-bold text-xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                A bit about my journey
              </h3>
              <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal mb-4">
                Outside of routine coding, I constantly explore modern
                architectural patterns, developer tooling, and design systems. I
                am a firm believer in continuous learning, taking every project
                as an opportunity to raise code quality, optimize database
                flows, and craft interfaces that feel natural and responsive.
              </p>
              <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal">
                Whether structuring multi-tenant schemas, developing resilient
                REST APIs, or building fluid drag-and-drop interfaces, I focus
                on building reliable systems that scale seamlessly under
                real-world usage.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/5 flex items-center gap-4 text-sm font-semibold opacity-70">
              <span>📍 Chennai, India</span>
              <span>•</span>
              <span>⚡ Full Stack Dev</span>
            </div>
          </motion.div>

          {/* Card 2: Principles & Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="neu-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl neu-well-sm flex items-center justify-center text-blue-500 mb-6 font-bold text-xl">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Engineering Philosophy
              </h3>
              <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal mb-4">
                Combining battle-tested backend frameworks with modern
                declarative frontend libraries, I focus on delivering end-to-end
                features with production stability.
              </p>
              <div className="space-y-3 mt-5">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="font-medium text-sm sm:text-base">
                    Clean, modular code with predictable state transitions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-sm sm:text-base">
                    Strong data integrity and optimized queries
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-medium text-sm sm:text-base">
                    Accessible, keyboard-navigable, and tactile user interfaces
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies & Tools Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Technologies & Stack
            </h3>
            <p className="text-base opacity-70 mt-2 max-w-xl mx-auto">
              Core technologies, databases, and libraries I use to build robust
              fullstack applications.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
          >
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="neu-card-sm p-4 flex flex-col items-center justify-center gap-3 cursor-pointer group"
              >
                <div className="w-12 h-12 neu-well-sm flex items-center justify-center p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <img
                    alt={el.name}
                    src={el.link}
                    className="w-full h-full object-contain filter group-hover:drop-shadow-md"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-center opacity-85 group-hover:opacity-100 group-hover:text-blue-500 transition-colors duration-200">
                  {el.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
