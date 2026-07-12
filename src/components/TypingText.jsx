import React, { useState, useEffect } from "react";

export const TypingText = ({
  phrases = [
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
  ],
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[currentPhraseIndex];

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, phrases, currentPhraseIndex]);

  return (
    <span className="inline-flex items-center text-accent font-display font-extrabold text-2xl sm:text-3xl my-2">
      <span>{displayedText}</span>
      <span className="ml-1 inline-block w-1 h-7 sm:h-8 bg-primary animate-pulse" />
    </span>
  );
};
