"use client";
import { FadeIn } from "@/src/components/animations/FadeIn";
import { Code2, Coffee, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-28 px-6 lg:px-24 relative" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <FadeIn className="text-center mb-16">
          <h2 className="section-heading text-4xl md:text-5xl mb-4">About Me</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video */}
          <FadeIn delay={0.2} className="flex justify-center w-full">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-brand-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-black">
              <iframe
                src="https://embed.voomly.com/embed/assets/embed.html?videoId=xxLXjRkBg9mCOXt8_Qgtul8XqAwWMFD-8sNVKGY4BPaTA1l4R&videoRatio=1.777778&type=v&skinColor=%23008EFF"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>
          </FadeIn>

          {/* Right: Bio */}
          <div className="space-y-6">
            <FadeIn delay={0.3}>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                Building AI tools that solve real problems, from RAG pipelines to autonomous agents.
              </h3>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently in my final semester of Computer Science. While I value the theory behind algorithms and data structures, my real passion lies in building practical things. I try to go beyond just wrapping OpenAI APIs—I enjoy diving into the architecture to build robust, full-stack machine learning solutions from the ground up.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-gray-400 leading-relaxed">
                Lately, I&apos;ve been obsessed with Generative AI and agentic workflows. I spend my time building semantic-search pipelines, autonomous agents, and intelligent chatbots. For me, the most fun part is taking unpredictable LLM outputs and turning them into reliable, production-ready software.
              </p>
            </FadeIn>

            {/* Badges row */}
            <FadeIn delay={0.6}>
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <Code2 size={20} className="text-brand-cyan" />
                  <div>
                    <p className="text-sm text-white font-medium">Fluent in</p>
                    <p className="text-sm text-gray-400">Python & TS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee size={20} className="text-brand-purple" />
                  <div>
                    <p className="text-sm text-white font-medium">Powered by</p>
                    <p className="text-sm text-gray-400">caffeine</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart size={20} className="text-brand-blue" />
                  <div>
                    <p className="text-sm text-white font-medium">Passionate about</p>
                    <p className="text-sm text-gray-400">AI Agents</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Quote banner */}
            <FadeIn delay={0.7}>
              <div className="quote-banner mt-6">
                <p className="text-sm text-gray-300 italic">
                  &quot;Still trying to figure out if I&apos;m training the models, or if they&apos;re training me.&quot;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
