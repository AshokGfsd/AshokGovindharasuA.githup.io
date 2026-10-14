"use client";

import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import TiltCard from "../components/TiltCard";

const Services = () => {
  const theme = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <section id="services" className="neu-section scroll-mt-24 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="mb-3">
            <span className="neu-badge">Core Competencies</span>
          </div>
          <h2 className="neu-title">
            Specialized <span className="neu-title-accent">Services</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-base sm:text-lg opacity-70 mt-4 max-w-2xl mx-auto">
            Comprehensive web engineering services spanning design
            implementation, scalable server architectures, and robust API
            development.
          </p>
        </div>

        {/* Services 3D Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceData.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <TiltCard
                maxTilt={16}
                ambient={true}
                ambientDelay={index * 0.35}
                className="neu-card p-8 group h-full cursor-pointer"
              >
                <div style={{ transformStyle: "preserve-3d" }}>
                  {/* 3D Elevated Icon Well */}
                  <div
                    style={{ transform: "translateZ(50px)" }}
                    className="w-16 h-16 neu-well flex items-center justify-center p-3 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"
                  >
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-10 h-10 object-contain drop-shadow"
                    />
                  </div>

                  {/* 3D Elevated Title */}
                  <h3
                    style={{ transform: "translateZ(35px)" }}
                    className="text-xl sm:text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-500 transition-colors duration-200"
                  >
                    {service.name}
                  </h3>

                  {/* 3D Body Copy */}
                  <p
                    style={{ transform: "translateZ(20px)" }}
                    className="text-sm sm:text-base opacity-80 leading-relaxed font-normal text-left"
                  >
                    {service.desc}
                  </p>
                </div>

                {/* 3D Feature Pills */}
                <div
                  style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                  className="mt-6 pt-6 border-t border-white/10 dark:border-white/5 flex flex-wrap items-center gap-2"
                >
                  {service.tags ? (
                    service.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        style={{ transform: "translateZ(10px)" }}
                        className={`text-xs font-semibold px-3 py-1 rounded-full neu-well-sm ${
                          tIndex === 0
                            ? "text-blue-500 dark:text-blue-400"
                            : tIndex === 1
                            ? "text-emerald-500 dark:text-emerald-400"
                            : "opacity-80"
                        }`}
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full neu-well-sm text-blue-500">
                        Reliable
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full neu-well-sm text-emerald-500">
                        Performant
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full neu-well-sm opacity-70">
                        Modern
                      </span>
                    </>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
