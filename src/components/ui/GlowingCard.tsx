"use client";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

export function GlowingCard({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden group hover:border-brand-cyan/50 transition-colors duration-500",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
