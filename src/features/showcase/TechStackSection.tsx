"use client";
import { FadeIn } from "@/src/components/animations/FadeIn";
import { motion } from "framer-motion";

const stack = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", emoji: "🐍", level: 95 },
      { name: "SQL", emoji: "💾", level: 90 },
      { name: "JavaScript", emoji: "⚡", level: 85 },
      { name: "R", emoji: "🔥", level: 80 },
    ]
  },
  {
    category: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow", emoji: "🧠", level: 90 },
      { name: "PyTorch", emoji: "🔥", level: 85 },
      { name: "Scikit-learn", emoji: "🐙", level: 95 },
      { name: "Prophet", emoji: "📈", level: 88 },
    ]
  },
  {
    category: "Data & Visualization",
    skills: [
      { name: "Pandas", emoji: "🐼", level: 95 },
      { name: "NumPy", emoji: "🔢", level: 90 },
      { name: "Power BI", emoji: "📊", level: 90 },
      { name: "Matplotlib", emoji: "📈", level: 85 },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "AWS", emoji: "☁️", level: 85 },
      { name: "Docker", emoji: "🐳", level: 80 },
      { name: "Git", emoji: "🔀", level: 90 },
    ]
  }
];

function ProgressBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="relative flex-1 h-2.5 bg-gray-700/60 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: "linear-gradient(90deg, #00f0ff, #7000ff, #b026ff)" }}
      />
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="py-28 px-6 lg:px-24" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-6">
          <h2 className="section-heading text-4xl md:text-5xl">Tech Stack</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <p className="text-gray-400">Technologies and tools I use to build intelligent systems</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stack.map((group, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="project-card h-full">
                <h3 className="text-lg font-bold text-white mb-6">{group.category}</h3>
                <div className="space-y-5">
                  {group.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <span className="text-lg w-7 text-center shrink-0">{skill.emoji}</span>
                      <span className="text-sm text-gray-300 w-28 shrink-0">{skill.name}</span>
                      <ProgressBar level={skill.level} delay={0.2 + j * 0.1} />
                      <span className="text-xs text-gray-400 w-10 text-right shrink-0">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
