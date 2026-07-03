"use client";
import { motion } from "framer-motion";

export function LetterReveal({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) {
  const letters = text.split("");
  
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
        hidden: {}
      }}
      className={className}
      aria-label={text}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block name-gradient"
          style={{ whiteSpace: letter === " " ? "pre" : undefined }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
