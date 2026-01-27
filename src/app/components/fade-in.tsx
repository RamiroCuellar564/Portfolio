"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = "up",
  className = "" 
}: FadeInProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 30, opacity: 0 };
      case "down":
        return { y: -30, opacity: 0 };
      case "left":
        return { x: 30, opacity: 0 };
      case "right":
        return { x: -30, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 30, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;