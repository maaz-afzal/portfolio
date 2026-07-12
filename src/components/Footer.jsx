import React from "react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/maaz-afzal", icon: SiGithub },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/maazafzalkhan",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      url: "mailto:maazafzal.khattak007@gmail.com",
      icon: SiGmail,
    },
  ];

  return (
    <footer className="bg-[#0A0A12] text-textPrimary py-12 border-t-2 border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="font-display font-extrabold text-2xl text-primary tracking-tight mb-1">
            Maaz Afzal<span className="text-accent">.</span>
          </span>
          <p className="font-sans text-sm text-textSecondary">
            &copy; 2026 Maaz Afzal. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-11 h-11 rounded-full bg-surface border border-border hover:bg-accent hover:border-accent text-primary hover:text-[#0F0F1A] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
