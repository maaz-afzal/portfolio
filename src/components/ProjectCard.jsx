import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;
  const isDisabled = project.liveStatus === "Coming Soon" || !project.liveUrl;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      className={`group bg-surface border-2 border-primary rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col ${
        isFeatured ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary tracking-tight">
            {project.title}
          </h3>
          {isFeatured && (
            <span className="inline-block mt-2 bg-accent text-[#0F0F1A] font-display font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border-2 border-primary shadow-pill">
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surfaceAlt border-2 border-primary text-primary hover:bg-accent hover:text-[#0F0F1A] hover:scale-110 transition-all shadow-sm"
            aria-label={`${project.title} GitHub repository`}
          >
            <SiGithub className="w-5 h-5" />
          </a>
          {isDisabled ? (
            <span className="p-2.5 rounded-full bg-background border-2 border-border text-textSecondary cursor-not-allowed opacity-70">
              <HiOutlineExternalLink className="w-5 h-5" />
            </span>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-accentAlt border-2 border-primary text-white hover:bg-accent hover:text-[#0F0F1A] hover:scale-110 transition-all shadow-pill"
            >
              <HiOutlineExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="relative rounded-2xl border-2 border-primary overflow-hidden mb-5 bg-background aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 block"
        />
      </div>

      <p className="font-sans text-textSecondary text-base sm:text-lg leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-3.5 py-1.5 rounded-full bg-surfaceAlt border border-primary/20 text-primary font-display font-bold text-xs tracking-wide"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};