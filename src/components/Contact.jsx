import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  HiArrowRight,
  HiCheckCircle,
  HiExclamationCircle,
  HiMail,
  HiLocationMarker,
} from "react-icons/hi";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Maaz Afzal",
        },
        PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "maazafzal.khattak007@gmail.com",
      link: "mailto:maazafzal.khattak007@gmail.com",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Peshawar, Pakistan",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/maaz-afzal",
      icon: SiGithub,
      color: "bg-surface text-primary hover:bg-primary hover:text-[#0F0F1A]",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/maazafzalkhan",
      icon: FaLinkedin,
      color: "bg-surface text-primary hover:bg-[#0A66C2] hover:text-white",
    },
    {
      name: "Email",
      url: "mailto:maazafzal.khattak007@gmail.com",
      icon: SiGmail,
      color: "bg-surface text-primary hover:bg-[#EA4335] hover:text-white",
    },
  ];

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
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 md:py-32 relative overflow-hidden bg-surfaceAlt"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-widest text-accent mb-2 block">
            CONTACT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary tracking-tight">
            Let's Build Something Together
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mt-4" />
          <p className="font-sans text-textSecondary text-base sm:text-lg mt-4 max-w-xl">
            Have a project in mind or just want to connect? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-surface border-2 border-primary rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="font-display font-extrabold text-xl text-primary mb-6 text-center">
                Get in Touch
              </h3>

              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border mb-4 last:mb-0 hover:border-accent/30 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs text-textSecondary">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-display font-bold text-sm text-primary hover:text-accent transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-display font-bold text-sm text-primary truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface border-2 border-primary rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h4 className="font-display font-extrabold text-sm text-primary text-center mb-4">
                Connect with me
              </h4>
              <div className="flex justify-center gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary shadow-pill transition-colors cursor-pointer ${link.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-surface border-2 border-primary rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h3 className="font-display font-extrabold text-2xl text-primary mb-6 text-center">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-display font-bold text-sm text-primary mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ali Khan"
                    className="w-full bg-background border-2 border-primary rounded-2xl px-4 py-3.5 font-sans text-primary placeholder-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-display font-bold text-sm text-primary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ali@example.com"
                    className="w-full bg-background border-2 border-primary rounded-2xl px-4 py-3.5 font-sans text-primary placeholder-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-display font-bold text-sm text-primary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or any questions..."
                    className="w-full bg-background border-2 border-primary rounded-2xl px-4 py-3.5 font-sans text-primary placeholder-textSecondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-accent text-[#0F0F1A] px-8 py-4 font-display font-extrabold text-lg border-2 border-primary shadow-pill hover:shadow-card-hover hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin inline-block" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <span>Send Message</span>
                      <HiArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-green-500/10 border-2 border-green-500/30 flex items-center gap-3 text-primary font-bold text-sm"
                  >
                    <HiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-red-500/10 border-2 border-red-500/30 flex items-center gap-3 text-primary font-bold text-sm"
                  >
                    <HiExclamationCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span>Something went wrong. Please email directly.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
