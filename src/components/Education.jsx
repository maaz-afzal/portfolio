import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap, HiBookOpen, HiCode, HiDatabase } from "react-icons/hi";

export const Education = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const educationData = {
    degree: "BS Computer Science",
    institution: "University of Engineering and Technology (UET) Peshawar",
    period: "2024 - Present",
    description:
      "Building a strong foundation in computer science fundamentals while actively developing full-stack projects alongside coursework.",
    courses: ["Data Structures", "Algorithms", "OOP", "Database Systems"],
    specialization: "Full-Stack Web Engineering & Distributed Systems",
    practicalFocus: "MERN Stack, RESTful APIs, Cloud Deployment",
  };

  const stats = [
    { icon: HiAcademicCap, label: "CGPA", value: "3.5/4.0" },
    { icon: HiBookOpen, label: "Courses", value: "20+" },
    { icon: HiCode, label: "Projects", value: "10+" },
    { icon: HiDatabase, label: "Tech Stack", value: "MERN" },
  ];

  return (
    <motion.section
      id="education"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 md:py-32 relative overflow-hidden bg-surfaceAlt"
    >

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest text-accent mb-2 block">
            EDUCATION
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight">
            Academic Background
          </h2>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-surface border-2 border-primary rounded-3xl p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center text-3xl mb-4 overflow-hidden">
              <img
                src="https://smallimg.pngkey.com/png/small/563-5632168_uet-peshawar-logo-2018.png"
                alt="UET Peshawar Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary">
              {educationData.degree}
            </h3>
            <p className="font-display font-bold text-accent text-base mt-2">
              {educationData.institution}
            </p>
            <p className="font-sans text-textSecondary text-sm mt-1">
              {educationData.period}
            </p>

            <p className="font-sans text-textSecondary text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
              {educationData.description}
            </p>

            {/* Stats Grid instead of tags */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-2xl">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="bg-accent/5 border border-accent/20 rounded-2xl p-4 transition-all duration-200"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <span className="font-display font-extrabold text-lg text-primary block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs text-textSecondary">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Key Courses */}
            <div className="mt-6 pt-6 border-t border-border w-full max-w-2xl">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-textSecondary block mb-3">
                Key Courses
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {educationData.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-display font-bold text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};