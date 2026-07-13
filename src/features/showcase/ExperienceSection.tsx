"use client";
import { FadeIn } from "@/src/components/animations/FadeIn";
import { Briefcase, TrendingUp, GraduationCap, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "BS Computer Science (8th Semester)",
    company: "University of the Punjab",
    date: "Nov 2022 - Sept 2026",
    description: "Mastering core architectural principles through intensive coursework in Data Structures, Algorithms, and Database Management Systems. Leveraged this rigorous academic foundation to pivot heavily into applied Artificial Intelligence, architecting real-world ML pipelines and GenAI solutions.",
    tech: ["AI / ML", "DSA", "DBMS", "Python", "PostgreSQL"],
    icon: <GraduationCap size={20} />,
    side: "left" as const,
  },
  {
    role: "Python Developer",
    company: "Meta Certified",
    date: "Oct 2023",
    description: "",
    tech: ["Python", "Numpy", "Pandas"],
    icon: <Award size={20} />,
    link: "https://www.coursera.org/account/accomplishments/verify/83YP5SQN3R3N",
    side: "right" as const,
  },
  {
    role: "UX Designer",
    company: "Google Certified",
    date: "Mar 2024",
    description: "",
    tech: [],
    icon: <Award size={20} />,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/ZRCJ47YFEZLC",
    side: "left" as const,
  }
];

export function ExperienceSection() {
  return (
    <section className="py-28 px-6 lg:px-24" id="experience">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-6">
          <h2 className="section-heading text-4xl md:text-5xl">Education and Certifications</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <p className="text-gray-400">My journey in Computer Science</p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-brand-cyan/40 via-brand-purple/40 to-transparent" />

          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline node */}
                <div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-brand-cyan border-[3px] border-brand-bg z-10 shadow-[0_0_12px_rgba(0,168,255,0.6)]" 
                  style={{ top: "40px" }} 
                />

                {/* Card positioned left or right */}
                <div className={`flex w-full justify-start pl-16 ${exp.side === "left" ? "md:justify-start md:pl-0 md:pr-[55%]" : "md:justify-end md:pl-[55%] md:pr-0"}`}>
                  <FadeIn delay={i * 0.2} direction={exp.side === "left" ? "right" : "left"} className="w-full md:w-auto flex-1">
                    <div className="project-card">
                      {/* Header with icon */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-brand-purple/15 border border-brand-purple/25 flex items-center justify-center text-brand-purple shrink-0">
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                            <p className="text-sm text-brand-teal">{exp.company}</p>
                          </div>
                        </div>
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors p-1 mt-1 shrink-0">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>

                      {/* Date */}
                      <p className="text-xs text-gray-500 mb-3">{exp.date}</p>

                      {/* Description */}
                      {exp.description && (
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                      )}

                      {/* Tech tags */}
                      {exp.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, j) => (
                            <span key={j} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
