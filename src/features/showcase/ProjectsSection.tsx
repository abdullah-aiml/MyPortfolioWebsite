"use client";
import { FadeIn } from "@/src/components/animations/FadeIn";
import { ExternalLink, GitFork, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "HalluciGuard",
    description: "An open-source hallucination detection pipeline that performs deep semantic validation on LLM outputs against long-form reference documents using interpretable AI.",
    tech: ["PyTorch", "FastAPI", "Docker", "Sentence-Transformers"],
    iconBg: "bg-indigo-500",
    iconEmoji: "🛡️",
    githubUrl: "https://github.com/abdullah-aiml/HalluciGuard",
    liveUrl: "https://huggingface.co/spaces/abdullah-113/HalluciGuard",
    demoLink: "https://huggingface.co/spaces/abdullah-113/HalluciGuard",
    hideDemoIcon: true,
  },
  {
    title: "ClipScript (FYP)",
    description: "Built an autonomous video creation pipeline tailored for automated YouTube micro-niches. Integrated YouTube API with Meta Prophet forecasting and NLP to target high-velocity rising trends. Developed a LangChain Multi-Agent layer to automate research, scripting, and visual scene segmentation. Engineered an asynchronous pipeline routing asset rendering to a remote ComfyUI engine running LTX-Video.",
    tech: ["FastAPI", "React", "PostgreSQL", "LangChain", "Meta Prophet", "ComfyUI", "LTX-Video", "S.D 1.5"],
    iconBg: "bg-cyan-500",
    iconEmoji: "🎬",
    githubUrl: "https://github.com/abdullah-aiml/clipscript-backend",
    featured: true,
    hideDemoIcon: true,
  },
  {
    title: "FlowGen AI",
    description: "Built an AI-powered automation platform that converts natural-language business processes into executable workflows. The system generates workflow nodes, simulates execution, runs automations through APIs/webhooks, monitors failures, applies self-healing retries, and adds human approval for sensitive actions like emails, database updates, and client operations.",
    tech: ["Next.js", "LangGraph", "FastAPI", "React Flow", "PostgreSQL"],
    iconBg: "bg-purple-500",
    iconEmoji: "⚡",
  }
];

export function ProjectsSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-28 px-6 lg:px-24" id="projects">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-6">
          <h2 className="section-heading text-4xl md:text-5xl">Featured Projects</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-14">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what&apos;s possible
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className={`h-full rounded-2xl transition-all duration-400 ${project.featured ? "p-[1.5px] bg-gradient-to-tr from-[#00f0ff] via-[#7000ff] to-[#b026ff] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]" : ""}`}>
                <div className={`project-card h-full flex flex-col ${project.featured ? "!border-transparent hover:transform-none hover:shadow-none" : ""}`}>
                {/* Top row: icon + action buttons */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-lg ${project.iconBg} flex items-center justify-center text-lg`}>
                    {project.iconEmoji}
                  </div>
                  <div className="flex items-center gap-3">
                    {!project.hideDemoIcon && (
                      project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <button className="text-gray-500 hover:text-white transition-colors">
                          <ExternalLink size={16} />
                        </button>
                      )
                    )}
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <GitFork size={16} />
                      </a>
                    ) : (
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <GitFork size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-5 flex-grow leading-relaxed">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {(project.featured || project.demoLink) && (
                  <div className="mt-auto pt-4">
                    {project.demoLink ? (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00f0ff]/10 to-[#b026ff]/10 hover:from-[#00f0ff]/20 hover:to-[#b026ff]/20 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-300"
                      >
                        View Demo
                      </a>
                    ) : (
                      <button 
                        onClick={() => setIsDemoModalOpen(true)}
                        className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00f0ff]/10 to-[#b026ff]/10 hover:from-[#00f0ff]/20 hover:to-[#b026ff]/20 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-300"
                      >
                        View Demo
                      </button>
                    )}
                  </div>
                )}
              </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm" onClick={() => setIsDemoModalOpen(false)}>
          <div 
            className="relative w-full max-w-5xl aspect-video bg-[#0a0b10] rounded-2xl overflow-hidden border border-[#00f0ff]/30 shadow-[0_0_50px_rgba(0,240,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#00f0ff]/20 hover:text-[#00f0ff] transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <iframe 
              src="https://embed.voomly.com/embed/assets/embed.html?videoId=mUiZTsl29d_dk14djRZ2E86YWVVdJpSALrsjLyV4fJoq7xg0e&videoRatio=1.777778&type=v&skinColor=%23008EFF" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              width="100%"
              height="100%"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
