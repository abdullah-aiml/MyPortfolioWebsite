import { HeroSection } from "@/src/features/showcase/HeroSection";
import { AboutSection } from "@/src/features/showcase/AboutSection";
import { ProjectsSection } from "@/src/features/showcase/ProjectsSection";
import { ExperienceSection } from "@/src/features/showcase/ExperienceSection";
import { TechStackSection } from "@/src/features/showcase/TechStackSection";
import { ContactSection } from "@/src/features/contact/ContactSection";
import { NeuralBackground } from "@/src/components/animations/NeuralBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated neural network background */}
      <NeuralBackground />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 px-6 text-center border-t border-white/5">
          <p className="text-sm text-gray-600">
            © 2026 M. Abdullah Ahmad. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
