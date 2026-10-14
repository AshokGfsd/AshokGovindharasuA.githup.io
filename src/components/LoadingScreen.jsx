"use client";

import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 transition-colors duration-400">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-32 h-32 rounded-full neu-card flex items-center justify-center relative p-3"
      >
        {/* Inset Ring */}
        <div className="w-full h-full rounded-full neu-well flex items-center justify-center relative">
          {/* Animated Spinner Orb */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-12 h-12 rounded-full border-3 border-transparent border-t-blue-500 border-r-blue-400 flex items-center justify-center"
          />
          {/* Inner Neumorphic Monogram */}
          <span className="absolute font-black text-xl text-blue-500">
            A
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-6 text-sm font-bold tracking-widest uppercase opacity-70"
      >
        Loading Experience...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
