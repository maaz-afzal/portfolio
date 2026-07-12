import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import { SquiggleUnderline } from "./DecorativeShapes";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="inline-block font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
              MERN STACK DEVELOPER
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl text-primary tracking-tight leading-[1.08] mb-6 relative"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block text-primary">
              Maaz<span className="text-accent">.</span>
              <SquiggleUnderline
                className="absolute -bottom-1 left-0 w-full"
                color="#FF6B4A"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-textSecondary text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-10"
          >
            I build real-world, scalable full-stack applications with clean
            architecture, from real-time chat apps to e-commerce platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-display font-bold text-accent">
              React
            </span>
            <span className="px-3 py-1 rounded-full bg-accentAlt/10 border border-accentAlt/20 text-xs font-display font-bold text-accentAlt">
              Node.js
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-display font-bold text-primary">
              MongoDB
            </span>
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-display font-bold text-accent">
              Express
            </span>
            <span className="px-3 py-1 rounded-full bg-accentAlt/10 border border-accentAlt/20 text-xs font-display font-bold text-accentAlt">
              TypeScript
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={scrollToWork}
              className="group rounded-full bg-accent text-[#0F0F1A] px-8 py-4 font-display font-bold text-base sm:text-lg border-2 border-primary shadow-pill hover:shadow-card-hover hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>View My Work</span>
              <HiArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-surface text-primary px-8 py-4 font-display font-bold text-base sm:text-lg border-2 border-primary shadow-pill hover:bg-surfaceAlt hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Download Resume</span>
              <HiArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 text-accent" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-display font-bold text-xs uppercase tracking-wider text-textSecondary">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-sm"
        >
          <HiChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
