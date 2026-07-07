"use client";
import { motion } from "framer-motion";
import { NameReveal } from "@/src/components/animations/NameReveal";
import { BrainCircuit, Settings, Zap, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-32 md:py-40 text-center">
      {/* Profile Image with gradient border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-8 rounded-full p-1.5 bg-gradient-to-tr from-[#00f0ff] via-[#7000ff] to-[#b026ff]"
      >
        <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 bg-[#0a0b10] flex items-center justify-center">
          <img 
            src="/Remove background project 1.png" 
            alt="M. Abdullah Ahmad" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Name with smooth fade-in animation — single gradient across entire name */}
      <h1 className="name-gradient text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-none">
        <NameReveal text="M. ABDULLAH AHMAD" />
      </h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="text-2xl md:text-4xl font-bold text-white mb-4 italic"
      >
        Welcome to My Portfolio
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="text-base md:text-lg text-gray-400 mb-10"
      >
        Exploring AI, ML & Data Science
      </motion.p>

      {/* Three icon circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="flex items-center gap-6 mb-10"
      >
        <div className="w-16 h-16 rounded-full border-2 border-brand-purple/40 bg-brand-purple/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/20 transition-colors cursor-pointer">
          <BrainCircuit size={28} />
        </div>
        <div className="w-16 h-16 rounded-full border-2 border-brand-cyan/40 bg-brand-cyan/10 flex items-center justify-center text-brand-cyan hover:bg-brand-cyan/20 transition-colors cursor-pointer">
          <Settings size={28} />
        </div>
        <div className="w-16 h-16 rounded-full border-2 border-brand-purple/40 bg-brand-purple/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/20 transition-colors cursor-pointer">
          <Zap size={28} />
        </div>
      </motion.div>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.1 }}
        className="text-sm text-gray-500 mb-2 tracking-widest"
      >
        BS. Computer Science
      </motion.p>

      {/* Tech tags */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.3 }}
        className="text-sm text-brand-teal tracking-wide mb-8"
      >
        AI • ML • NLP • Deep Learning • LLMs • RAG • Data Visualization
      </motion.p>

    </section>
  );
}
