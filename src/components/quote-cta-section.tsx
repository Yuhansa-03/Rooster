"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { ImageGallery } from "@/components/ui/image-gallery";

const ease = [0.22, 1, 0.36, 1] as const;
const menuFont = "font-[family-name:var(--font-sans)]";
const displayFont = "font-[family-name:var(--font-orbitron)]";

export function QuoteCtaSection() {
  const [packagesOpen, setPackagesOpen] = useState(false);

  useEffect(() => {
    if (!packagesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPackagesOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [packagesOpen]);

  return (
    <>
      <section
        id="get-a-quote"
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
            Contact us to get a quote
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
            className={`${displayFont} mt-5 text-lg uppercase tracking-[0.12em] text-sky-400 sm:mt-6 sm:text-3xl sm:tracking-[0.16em] md:text-4xl`}
          >
            Tell us what you are building
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.85, delay: 0.28, ease }}
            className={`${menuFont} mt-10 max-w-xl text-sm leading-7 tracking-[-0.02em] text-slate-300 sm:mt-12 sm:text-base sm:leading-8`}
          >
            Share your goals and we will come back with a clear path — scope,
            timeline, and a package that fits. Browse what we offer, then inquire
            when you are ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.85, delay: 0.4, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10"
          >
            <button
              type="button"
              onClick={() => setPackagesOpen(true)}
              className={`${menuFont} rounded-full border-2 border-sky-400 bg-sky-950 px-8 py-3 text-sm tracking-[-0.02em] text-white transition hover:border-sky-300 hover:bg-blue-600`}
            >
              Our packages
            </button>
            <a
              href="#contact"
              className={`${menuFont} rounded-full border border-white/25 px-8 py-3 text-sm tracking-[-0.02em] text-white transition hover:border-sky-400 hover:bg-white/5`}
            >
              Contact us
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {packagesOpen ? (
          <motion.div
            className="fixed inset-0 z-[190] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPackagesOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Our packages"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-sky-400/25 bg-zinc-950/95 p-4 shadow-2xl sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.2em] text-sky-400">
                    Our packages
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-slate-400">
                    Click a card to inquire
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPackagesOpen(false)}
                  className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10"
                  aria-label="Close packages"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-hidden">
                <ImageGallery />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
