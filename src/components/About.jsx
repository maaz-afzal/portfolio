import React from "react";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";

export const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const stats = [
    { label: "3+ Years Experience", bg: "bg-accent text-[#0F0F1A]" },
    { label: "6+ Projects Shipped", bg: "bg-accentAlt text-white" },
    { label: "MERN Stack", bg: "bg-primary text-[#0F0F1A]" },
    {
      label: "UET Peshawar",
      bg: "bg-surface text-primary border-2 border-primary",
    },
  ];

  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-24 overflow-hidden md:py-32"
    >
      <div className="max-w-6xl px-6 mx-auto md:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start text-left lg:w-1/2"
          >
            <span className="block mb-2 text-xs font-extrabold tracking-widest uppercase font-display sm:text-sm text-accent">
              ABOUT ME
            </span>

            <TypingText
              phrases={[
                "MERN Stack Developer",
                "Full-Stack Developer",
                "Front-end Developer",
                "Back-end Developer",
              ]}
            />

            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-textSecondary sm:text-lg">
              <p>
                I&apos;m Maaz, a BS Computer Science student and MERN Stack
                Developer. I build web applications using React, Node.js,
                Express, and MongoDB.
              </p>
              <p>
                I like creating useful projects, learning new technologies, and
                improving my development skills. I enjoy working on full-stack
                applications and turning ideas into real products.
              </p>
            </div>

            <div className="w-full pt-6 mt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-3">
                {stats.map((stat, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-full font-display font-bold text-sm shadow-pill whitespace-nowrap ${stat.bg}`}
                  >
                    {stat.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:w-1/2"
          >
            <div className="relative w-full max-w-sm group">
              <div className="absolute transition-opacity duration-500 -inset-4 bg-gradient-to-tr from-accent via-accentAlt to-primary rounded-2xl opacity-40 blur-2xl group-hover:opacity-60" />
              <div className="relative overflow-hidden border-2 bg-surface rounded-2xl border-primary shadow-card">
                <img
                  src="images/profile.jpg"
                  alt="Maaz Afzal profile photo"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent rounded-full px-3 py-1.5 shadow-card border-2 border-primary">
                <span className="font-display font-extrabold text-[10px] text-[#0F0F1A]">
                  MERN Stack
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
