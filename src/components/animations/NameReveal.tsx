"use client";
import { motion } from "framer-motion";

export function NameReveal({ text, className = "" }: { text: string, className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        delay: 0.3, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={className}
    >
      {text}
    </motion.span>
  );
}
