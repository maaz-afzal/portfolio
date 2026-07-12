import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import { skillsData } from "../data/skills";

export const Skills = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  const renderIcon = (iconName, color) => {
    const IconComponent =
      SiIcons[iconName] || TbIcons[iconName] || SiIcons.SiJavascript;
    return (
      <IconComponent
        className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      />
    );
  };

  return (
    <motion.section
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-surfaceAlt py-24 md:py-32 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest text-accent mb-3">
            SKILLS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight max-w-2xl">
            Technologies I Work With
          </h2>
          <p className="font-sans text-textSecondary text-base sm:text-lg mt-4 max-w-xl">
            Tools and technologies I use to build amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="bg-surface border-2 border-primary rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/20">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-primary">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-background/50 border border-border hover:border-accent/40 transition-all duration-200"
                  >
                    <div className="p-2 rounded-xl bg-surface/50 group-hover:bg-accent/10 transition-colors">
                      {renderIcon(skill.iconName, skill.color)}
                    </div>
                    <span className="font-display font-semibold text-xs sm:text-sm text-primary text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
