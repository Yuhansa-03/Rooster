"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { InternalPageShell } from "@/components/internal-page-shell";

const ease = [0.22, 1, 0.36, 1] as const;

export function BlogsPage() {
  return (
    <InternalPageShell>
      <header className="px-4 pt-10 pr-36 pb-24 sm:px-10 sm:pt-12 sm:pr-10 sm:pb-32">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-400 transition hover:text-white"
          >
            ← Back to home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mt-8 text-balance font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.12em] text-sky-400 sm:text-4xl sm:tracking-[0.18em]"
          >
            Blogs & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="mt-6 font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.14em] text-white sm:text-3xl"
          >
            Coming soon
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease }}
            className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-400 sm:text-base sm:leading-8"
          >
            Studio notes, guides, and resources are still on the way. Check
            back soon — or reach us from the footer if you need something now.
          </motion.p>
        </div>
      </header>
    </InternalPageShell>
  );
}
