"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { InternalPageShell } from "@/components/internal-page-shell";

const ease = [0.22, 1, 0.36, 1] as const;

type SimpleInternalPageProps = {
  eyebrow: string;
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function SimpleInternalPage({
  eyebrow,
  title,
  body,
  ctaHref = "#contact",
  ctaLabel = "Get in touch",
}: SimpleInternalPageProps) {
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
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mt-8 font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.22em] text-sky-400"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-4 text-balance font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.1em] text-white sm:text-4xl sm:tracking-[0.14em]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="mt-6 max-w-2xl font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-400 sm:text-base sm:leading-8"
          >
            {body}
          </motion.p>
          <a
            href={ctaHref}
            className="mt-8 inline-flex rounded-full border-2 border-sky-400 bg-sky-950 px-7 py-2.5 font-[family-name:var(--font-sans)] text-sm text-white transition hover:bg-blue-600"
          >
            {ctaLabel}
          </a>
        </div>
      </header>
    </InternalPageShell>
  );
}
