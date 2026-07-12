import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["about", "skills", "work", "education", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 font-display font-extrabold text-2xl md:text-3xl text-primary tracking-tight flex-shrink-0"
        >
          <span className="text-accent">$</span>
          <span className="relative">
            <span className="text-primary">maaz</span>
            <motion.span
              className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-accent"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </a>

        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-1 bg-surfaceAlt/50 border border-border/50 rounded-full px-1 py-1 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full font-display font-medium text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-primary bg-accent/10 border border-accent/20"
                    : "text-textSecondary hover:text-primary hover:bg-surfaceAlt/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side - Social Icons & Resume */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a
            href="https://github.com/maaz-afzal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-textSecondary hover:text-primary hover:bg-surfaceAlt border border-border transition-all duration-200"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/maazafzalkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-textSecondary hover:text-[#0A66C2] hover:bg-surfaceAlt border border-border transition-all duration-200"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <div className="w-px h-8 bg-border" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent text-[#0F0F1A] px-5 py-2.5 font-display font-bold text-sm border-2 border-primary shadow-pill hover:shadow-card-hover hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-primary focus:outline-none cursor-pointer hover:bg-surfaceAlt rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <HiOutlineX className="w-7 h-7" />
          ) : (
            <HiOutlineMenuAlt4 className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-surface border-2 border-primary rounded-3xl shadow-card overflow-hidden"
          >
            <div className="p-4">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-display font-semibold text-base transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-accent/10 border border-accent/20 text-accent"
                        : "text-primary hover:bg-surfaceAlt/50"
                    }`}
                  >
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-accent"
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/maaz-afzal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-surfaceAlt border border-border text-textSecondary hover:text-primary transition-colors"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/maazafzalkhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-surfaceAlt border border-border text-textSecondary hover:text-[#0A66C2] transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent text-[#0F0F1A] px-5 py-2.5 font-display font-bold text-sm border-2 border-primary shadow-pill"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};