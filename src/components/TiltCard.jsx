"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export const TiltCard = ({
  children,
  className = "",
  maxTilt = 16,
  glare = true,
  ambient = false,
  ambientDelay = 0,
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw cursor position normalized from -0.5 to 0.5 relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth, snappy spring physics for 60fps tracking
  const springConfig = { stiffness: 260, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // 3D rotation transforms
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${maxTilt}deg`, `-${maxTilt}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${maxTilt}deg`, `${maxTilt}deg`]
  );

  // Dynamic specular lighting position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["10%", "90%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.38), transparent 65%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: "1200px" }}
      className="w-full h-full"
    >
      <motion.div
        animate={
          ambient && !isHovered
            ? {
                y: [0, -8, 0],
              }
            : {
                y: 0,
              }
        }
        transition={
          ambient && !isHovered
            ? {
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: ambientDelay,
              }
            : { duration: 0.25 }
        }
        className="w-full h-full"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            scale: isHovered ? 1.03 : 1,
            z: isHovered ? 25 : 0,
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={`relative will-change-transform ${className}`}
        >
          {/* Extruded Inner Layer with real physical depth */}
          <div
            className="w-full h-full flex flex-col justify-between"
            style={{
              transform: "translateZ(35px)",
              transformStyle: "preserve-3d",
            }}
          >
            {children}
          </div>

          {/* Dynamic Specular 3D Light Sheen */}
          {glare && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-[24px] overflow-hidden"
              style={{
                opacity: isHovered ? 0.35 : 0,
                background: glareBackground,
                transition: "opacity 0.25s ease",
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
