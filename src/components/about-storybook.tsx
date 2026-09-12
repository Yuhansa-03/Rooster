"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useAboutStorybook } from "@/components/about-storybook-context";

const SECTIONS = [
  {
    title: "Who we are",
    body: "Rooster is a forward-thinking digital solutions studio specializing in website design, high-performance web development, smart AI integration, and digital growth.",
  },
  {
    title: "More than a presence",
    body: "We believe a digital presence should do more than simply exist online. It should communicate who you are, make it easy for customers to find what they need, build trust, and ultimately help your business achieve real results.",
  },
  {
    title: "Beyond the code",
    body: "That's why we look beyond the code. We think about your business, your customers, your brand, and your goals before bringing your vision to life.",
  },
  {
    title: "Human-made. AI-assisted.",
    body: "While we utilize modern AI tools under the hood strictly to optimize our building and development process, our core concepts, UI/UX designs, and strategies are 100% human-made — ensuring technology enhances our creativity rather than replacing it.",
  },
  {
    title: "What we build",
    body: "Whether you need a custom website, an intelligent AI chatbot, a tailor-made CMS, or a completely new digital product, we combine human strategy, cutting-edge UI/UX, and elite technology to build something that works exclusively for you.",
  },
] as const;

export function AboutStorybook() {
  const { isOpen, close } = useAboutStorybook();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="About Rooster"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative flex h-[min(88dvh,40rem)] w-[min(94vw,48rem)] max-w-4xl flex-col overflow-hidden rounded-2xl border border-sky-400/25 bg-zinc-950 shadow-2xl sm:h-[60vh] sm:w-[70vw] sm:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-zinc-950 to-sky-950/40 px-4 py-4 sm:gap-4 sm:px-8 sm:py-5">
              <div>
                <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.16em] text-sky-400 sm:text-base sm:tracking-[0.2em]">
                  About Rooster
                </p>
                <h2 className="mt-2 text-balance font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.08em] text-white sm:text-2xl sm:tracking-[0.12em]">
                  We build with purpose, not just pixels.
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10"
                aria-label="Close about popup"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="hide-scrollbar min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-8 sm:py-8">
              <div className="mx-auto flex max-w-3xl flex-col gap-8">
                {SECTIONS.map((section) => (
                  <section key={section.title}>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.16em] text-sky-400 sm:text-base">
                      {section.title}
                    </h3>
                    <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-300 sm:text-base sm:leading-8">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-3 border-t border-white/10 bg-zinc-950 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-slate-400 sm:text-sm">
                Ready to start? Reach out and tell us what you are building.
              </p>
              <a
                href="#contact"
                onClick={close}
                className="shrink-0 rounded-full border-2 border-sky-400 bg-sky-950 px-5 py-2 text-center font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-white transition hover:bg-blue-600"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
