"use client";

import { motion } from "framer-motion";

import { useAboutStorybook } from "@/components/about-storybook-context";

const ease = [0.22, 1, 0.36, 1] as const;
const menuFont = "font-[family-name:var(--font-sans)]";
const displayFont = "font-[family-name:var(--font-orbitron)]";

export function ValuesSection() {
  const { open } = useAboutStorybook();

  return (
    <section
      id="about"
      className="section-y relative flex items-center px-6 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease }}
          className={`${displayFont} text-xl uppercase tracking-[0.12em] text-white sm:text-4xl sm:tracking-[0.18em] md:text-5xl`}
        >
          We bring your business to life.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.12, ease }}
          className={`${displayFont} mt-5 text-base uppercase tracking-[0.14em] text-sky-400 sm:mt-6 sm:text-xl md:text-2xl`}
        >
          Lightning speed. Secure systems. Bold design.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.85, delay: 0.28, ease }}
          className={`${menuFont} mt-10 max-w-2xl text-sm leading-7 tracking-[-0.02em] text-slate-300 sm:mt-12 sm:text-base sm:leading-8`}
        >
          At Rooster, we engineer digital experiences that refuse to be ignored.
          Whether through custom websites, AI-driven solutions, or strategic
          marketing, we take your vision and turn it into a living, breathing
          digital reality.
        </motion.p>

        <motion.button
          type="button"
          onClick={open}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.85, delay: 0.4, ease }}
          className={`${menuFont} mt-8 rounded-full border-2 border-sky-400 bg-sky-950 px-8 py-3 text-sm tracking-[-0.02em] text-white transition hover:border-sky-300 hover:bg-blue-600 sm:mt-10`}
        >
          More about us
        </motion.button>
      </div>
    </section>
  );
}
