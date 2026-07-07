"use client";
import { FadeIn } from "@/src/components/animations/FadeIn";
import { Mail, Link, GitFork, Send, Check, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setError("");

    const formData = new FormData(form.current);
    const data = {
      ...Object.fromEntries(formData.entries()),
      _subject: `New Portfolio Contact from ${formData.get("name")}`,
      _template: "box",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/mabdullahahmad1822@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        form.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      setIsSubmitting(false);
      setError("Failed to send message. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="py-28 px-6 lg:px-24" id="contact">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-6">
          <h2 className="section-heading text-4xl md:text-5xl">Get In Touch</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <p className="text-gray-400">Have a question or want to work together?</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Form */}
          <FadeIn delay={0.2}>
            <div className="project-card">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/30 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/30 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/30 transition-all resize-none" placeholder="Your message here..." />
                </div>
                {error && <p className="text-red-400 text-xs">{error}</p>}
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#00f0ff] to-[#b026ff] rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : isSuccess ? (
                    <>
                      <span>Sent Successfully!</span>
                      <Check size={16} />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Right: Connect Links */}
          <div className="flex flex-col justify-center space-y-6">
            <FadeIn delay={0.3}>
              <a href="mailto:mabdullahahmad1822@gmail.com" className="project-card flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan/20 transition-colors shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">Email</h3>
                  <p className="text-sm text-gray-400">mabdullahahmad1822@gmail.com</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a href="https://www.linkedin.com/in/m-abdullah-ai-ml/" target="_blank" rel="noopener noreferrer" className="project-card flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple group-hover:bg-brand-purple/20 transition-colors shrink-0">
                  <Link size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">LinkedIn</h3>
                  <p className="text-sm text-gray-400">Connect with me</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.5}>
              <a href="https://github.com/abdullah-aiml" target="_blank" rel="noopener noreferrer" className="project-card flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal/20 transition-colors shrink-0">
                  <GitFork size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">GitHub</h3>
                  <p className="text-sm text-gray-400">View my repositories</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.6}>
              <a href="https://wa.me/923180316145" target="_blank" rel="noopener noreferrer" className="project-card flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-0.5">WhatsApp</h3>
                  <p className="text-sm text-gray-400">+92 3180316145</p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
