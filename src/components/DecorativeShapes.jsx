import React from "react";
import { motion } from "framer-motion";

export const BlobShape = ({
  className = "",
  color = "#FF6B4A",
  size = 200,
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 6, -3, 0],
        scale: [1, 1.05, 0.98, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M45.7,-74.6C58.9,-66.2,69,-52.6,76.5,-38C84,-23.4,88.9,-7.8,87.6,7.4C86.3,22.6,78.8,37.3,68.7,49.8C58.6,62.3,45.8,72.6,31.4,78.2C17.1,83.8,1.2,84.7,-14.2,82.1C-29.6,79.5,-44.5,73.4,-57.1,63.4C-69.8,53.4,-80.1,39.5,-85.4,23.8C-90.7,8.2,-91,-9.1,-85.7,-24.4C-80.4,-39.7,-69.6,-53,-56.3,-61.4C-43,-69.8,-27.1,-73.3,-11.5,-75.7C4,-78.1,19.6,-79.3,32.5,-83C45.7,-74.6,45.7,-74.6,45.7,-74.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
};

export const SquiggleUnderline = ({
  color = "#FF6B4A",
  className = "",
  strokeWidth = 6,
  height = 18,
  animate = true,
  duration = 6,
}) => {
  return (
    <motion.svg
      className={`w-full overflow-visible ${className}`}
      height={height}
      viewBox={`0 0 300 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <motion.path
        d="M3 13C50 3 100 16 150 11C200 6 250 15 297 5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        animate={
          animate
            ? {
                d: [
                  "M3 13C50 3 100 16 150 11C200 6 250 15 297 5",
                  "M3 10C55 16 105 4 150 13C195 7 245 4 297 12",
                  "M3 13C50 3 100 16 150 11C200 6 250 15 297 5",
                ],
              }
            : {}
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};
