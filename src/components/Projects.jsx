import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.section
      id="work"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 md:py-32 relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest text-accent mb-2 block">
            MY WORK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight">
            Projects I've Built
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentAlt rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? 'md:col-span-2' : 'md:col-span-1'}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-surface border-2 border-primary rounded-full px-6 py-3 shadow-card">
            <span className="font-sans text-sm text-textSecondary">Want to see more?</span>
            <a
              href="https://github.com/maaz-afzal?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-[#0F0F1A] px-6 py-2 font-display font-bold text-sm border-2 border-primary hover:scale-105 transition-all duration-200"
            >
              <SiGithub className="w-4 h-4" />
              <span>View All Projects</span>
              <HiOutlineExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};