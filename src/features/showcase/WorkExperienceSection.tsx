"use client";
import { FadeIn } from "@/src/components/animations/FadeIn";
import { Briefcase } from "lucide-react";

const workExperiences = [
  {
    role: "AI/ML & Full-Stack Engineer",
    company: "SharpKids.pk · Onsite, Lahore",
    date: "Feb 2026 - Present",
    description: [
        "Orchestrated migration of a legacy WordPress platform to a modern architecture utilizing a FastAPI backend, Next.js frontend, and PostgreSQL database.",
        "Engineered a multimodal Agentic RAG chatbot with a Vector Database, enabling dynamic content delivery and automated video responses to user queries.",
        "Developed a cross-platform Flutter mobile app synchronized with web interfaces through a unified FastAPI RESTful microservice architecture.",
        "Designed end-to-end DevOps workflows using AWS (Amplify, ECR, Lambda) and Supabase, significantly reducing infrastructure costs through resource optimization."
    ],
    tech: ["FastAPI", "Next.js", "PostgreSQL", "RAG", "Vector DB", "Flutter", "AWS", "Supabase"],
    icon: <Briefcase size={20} />,
    side: "left" as const,
  },
  {
    role: "Software Engineering Fellow",
    company: "Headstarter AI · Remote, United States",
    date: "Jul 2024 - Aug 2024",
    description: [
        "Engineered scalable software applications utilizing Next.js, Python, and Tailwind CSS through rigorous, rapid Agile development sprints.",
        "Collaborated in a remote, cross-functional engineering environment to troubleshoot, optimize, and consistently deploy high-quality software enhancements."
    ],
    tech: ["Next.js", "Python", "Tailwind CSS", "Agile"],
    icon: <Briefcase size={20} />,
    side: "right" as const,
  },
  {
    role: "Project Management Intern",
    company: "Digicon Valley · Onsite, Lahore",
    date: "Nov 2022 - Feb 2023",
    description: [
        "Orchestrated project planning, coordination, and execution of day-to-day operational activities and project lifecycles.",
        "Supported cross-functional teams in tracking tasks, strict deadlines, deliverables, and overall project progression."
    ],
    tech: ["Project Management", "Team Coordination", "Agile"],
    icon: <Briefcase size={20} />,
    side: "left" as const,
  }
];

export function WorkExperienceSection() {
  return (
    <section className="py-28 px-6 lg:px-24 bg-brand-bg/50" id="work-experience">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-6">
          <h2 className="section-heading text-4xl md:text-5xl">Professional Experiences</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <p className="text-gray-400">My professional journey and roles</p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-brand-purple/40 via-brand-cyan/40 to-transparent" />

          <div className="space-y-20">
            {workExperiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline node */}
                <div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-brand-purple border-[3px] border-brand-bg z-10 shadow-[0_0_12px_rgba(168,85,247,0.6)]" 
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
                      </div>

                      {/* Date */}
                      <p className="text-xs text-gray-500 mb-4">{exp.date}</p>

                      {/* Description */}
                      {exp.description && exp.description.length > 0 && (
                        <ul className="text-sm text-gray-400 leading-relaxed mb-5 space-y-2 list-none">
                            {exp.description.map((item, idx) => (
                                <li key={idx} className="flex gap-2">
                                    <span className="text-brand-purple/70 mt-1.5">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
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
