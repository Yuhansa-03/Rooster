"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { InternalPageShell } from "@/components/internal-page-shell";

const ease = [0.22, 1, 0.36, 1] as const;

const MANIFESTO = [
  {
    text: "Why are you paying for ads that don't convert?",
    as: "h2" as const,
    className:
      "text-balance px-1 text-center font-[family-name:var(--font-orbitron)] text-[1.15rem] leading-snug uppercase tracking-[0.04em] text-white sm:text-4xl sm:leading-tight sm:tracking-[0.1em]",
    from: "left" as const,
  },
  {
    text: "Strategic marketing designed to capture attention and scale.",
    as: "h3" as const,
    className:
      "mt-4 text-balance px-1 text-center font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.08em] text-sky-400 sm:mt-5 sm:text-2xl sm:tracking-[0.16em]",
    from: "right" as const,
  },
] as const;

const MANIFESTO_COPY = [
  "Great products deserve to be seen.",
  "We blend data-driven strategies with bold, human-led creative campaigns to get your business in front of the right audience, driving high-impact engagement and turning casual scrollers into loyal customers.",
] as const;

const WHAT_WE_DO = [
  {
    title: "Social Media Management & Content Creation",
    body: "We build vibrant, thumb-stopping social feeds tailored entirely to your brand. From human-crafted creative content to consistent scheduling and community management, we keep your audience engaged and your brand top-of-mind.",
  },
  {
    title: "Search Engine Optimization (SEO) & Organic Growth",
    body: "Dominate search engine results and drive organic traffic that lasts. We optimize your website's architecture, keywords, and content so your business naturally ranks higher when clients are actively searching for your services.",
  },
  {
    title: "High-ROI Paid Advertising & Google Ads",
    body: "Stop wasting ad spend on guesswork. We engineer laser-focused paid ad campaigns across platforms like Google Ads and social media, combining striking visual assets with strategic targeting to deliver maximum return on investment.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    body: "Turn more of your existing website traffic into paying customers. We analyze user behavior, friction points, and user paths, running strategic optimizations and tests to maximize your website's sales potential.",
  },
  {
    title: "Lifecycle Email Marketing & Automation",
    body: "Turn your inbox into a reliable revenue engine. We design, write, and automate personalized email campaigns that nurture your leads, build long-term loyalty, and drive repeat business on autopilot.",
  },
  {
    title: "Content Marketing & Copywriting",
    body: "Words that convert and build authority. We write high-ranking blogs, landing page copy, and case studies that establish your brand as an industry leader while capturing search engine traffic.",
  },
] as const;

const WORK_CARDS = [
  { id: 1, title: "Yet to come" },
  { id: 2, title: "Yet to come" },
  { id: 3, title: "Yet to come" },
] as const;

function revealOffset(from: "left" | "right" | "center") {
  if (from === "left") return { x: -28, y: 0, scale: 1 };
  if (from === "right") return { x: 28, y: 0, scale: 1 };
  return { x: 0, y: 20, scale: 0.98 };
}

function FlipCard({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease }}
      onClick={() => setFlipped((value) => !value)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="h-[16.5rem] w-full min-w-0 [perspective:1400px] sm:h-[22rem]"
      aria-pressed={flipped}
      aria-label={`${title}. ${flipped ? "Showing description" : "Hover or tap to flip"}`}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sky-400/25 bg-zinc-950 px-4 text-center [backface-visibility:hidden] sm:px-6">
          <p className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.22em] text-sky-400">
            0{index + 1}
          </p>
          <h3 className="mt-3 text-balance font-[family-name:var(--font-orbitron)] text-[0.82rem] leading-snug uppercase tracking-[0.06em] text-white sm:mt-4 sm:text-lg sm:tracking-[0.1em]">
            {title}
          </h3>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-950 px-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-6">
          <h3 className="text-balance font-[family-name:var(--font-orbitron)] text-[10px] leading-snug uppercase tracking-[0.1em] text-sky-300 sm:text-xs sm:tracking-[0.14em]">
            {title}
          </h3>
          <p className="hide-scrollbar mt-3 max-h-[9.5rem] overflow-y-auto font-[family-name:var(--font-sans)] text-xs leading-5 tracking-[-0.02em] text-slate-200 sm:max-h-[11rem] sm:text-sm sm:leading-6">
            {body}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

function WorkCarousel() {
  const [active, setActive] = useState(0);
  const count = WORK_CARDS.length;

  const slotFor = (index: number) => {
    const offset = (index - active + count) % count;
    if (offset === 0) return "center";
    if (offset === 1) return "right";
    return "left";
  };

  return (
    <div className="relative mx-auto mt-8 w-full max-w-6xl sm:mt-10">
      <button
        type="button"
        onClick={() => setActive((value) => (value - 1 + count) % count)}
        className="absolute top-1/2 left-1 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-sky-400/40 bg-[#07111f]/90 text-sky-300 transition hover:border-sky-400 hover:bg-sky-600 hover:text-white sm:left-2 sm:size-11 md:size-12"
        aria-label="Previous work"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="relative h-[19rem] w-full overflow-hidden sm:h-[26rem] md:h-[32rem]">
        {WORK_CARDS.map((card, index) => {
          const slot = slotFor(index);
          const isCenter = slot === "center";

          return (
            <article
              key={card.id}
              className={`absolute top-1/2 overflow-hidden rounded-[1.25rem] border border-white/15 bg-zinc-950 shadow-2xl transition-all duration-500 sm:rounded-[1.6rem] ${
                isCenter
                  ? "left-1/2 z-20 h-full w-[78%] -translate-x-1/2 -translate-y-1/2 opacity-100 sm:w-[56%]"
                  : slot === "left"
                    ? "left-0 z-10 h-[72%] w-[46%] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[1px] sm:w-[38%] sm:-translate-x-[42%]"
                    : "left-full z-10 h-[72%] w-[46%] -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[1px] sm:w-[38%] sm:-translate-x-[58%]"
              }`}
            >
              <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_62%)] px-3 sm:px-4">
                <p className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.2em] text-sky-400">
                  Flyer / post
                </p>
                <h3 className="mt-3 text-center font-[family-name:var(--font-orbitron)] text-base uppercase tracking-[0.12em] text-white sm:text-2xl sm:tracking-[0.14em]">
                  {card.title}
                </h3>
              </div>
            </article>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setActive((value) => (value + 1) % count)}
        className="absolute top-1/2 right-1 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-sky-400/40 bg-[#07111f]/90 text-sky-300 transition hover:border-sky-400 hover:bg-sky-600 hover:text-white sm:right-2 sm:size-11 md:size-12"
        aria-label="Next work"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

export function MarketingPage() {
  return (
    <InternalPageShell>
      <header className="px-4 pt-10 pr-36 pb-6 sm:px-10 sm:pt-12 sm:pr-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#services"
            className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-400 transition hover:text-white"
          >
            ← Back to services
          </Link>
          <p className="mt-8 font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.18em] text-sky-400 sm:tracking-[0.22em]">
            Rooster Marketing
          </p>
        </div>
      </header>

      <section className="section-y px-4 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          {MANIFESTO.map((line, index) => {
            const Tag = line.as;
            const offset = revealOffset(line.from);
            return (
              <motion.div
                key={line.text}
                initial={{ opacity: 0, ...offset }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{ duration: 0.75, delay: index * 0.12, ease }}
              >
                <Tag className={line.className}>{line.text}</Tag>
              </motion.div>
            );
          })}

          <div className="mt-8 space-y-4">
            {MANIFESTO_COPY.map((sentence, index) => {
              const from = index === 0 ? "left" : "center";
              const offset = revealOffset(from);
              return (
                <motion.p
                  key={sentence}
                  initial={{ opacity: 0, ...offset }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.16 + index * 0.14, ease }}
                  className="mx-auto max-w-3xl text-pretty font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-300 sm:text-base sm:leading-8"
                >
                  {sentence}
                </motion.p>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y px-4 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.12em] text-sky-400 sm:mb-10 sm:text-3xl sm:tracking-[0.22em]">
            What we do
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {WHAT_WE_DO.map((item, index) => (
              <FlipCard
                key={item.title}
                title={item.title}
                body={item.body}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-sky-400/35 bg-sky-950/40 px-4 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-8 sm:py-7"
          >
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-orbitron)] text-base uppercase tracking-[0.12em] text-sky-400 sm:text-2xl sm:tracking-[0.22em]">
                How we work
              </h2>
              <p className="mt-3 text-pretty font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-200 sm:text-base sm:leading-8">
                If you want to know more about how our marketing service works,
                ask Lea — our AI agent.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("open-lea", {
                    detail: {
                      question: "How does your marketing service work?",
                    },
                  }),
                );
              }}
              className="w-full shrink-0 rounded-full border-2 border-sky-400 bg-sky-950 px-7 py-3 text-center font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-white transition hover:border-sky-300 hover:bg-blue-600 sm:w-auto"
            >
              Ask Lea
            </button>
          </motion.div>
        </div>
      </section>

      <section className="section-y px-4 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.12em] text-sky-400 sm:text-3xl sm:tracking-[0.22em]">
            Our packages
          </h2>
          <p className="mt-6 font-[family-name:var(--font-orbitron)] text-lg uppercase tracking-[0.12em] text-white sm:text-3xl sm:tracking-[0.14em]">
            Coming soon
          </p>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-400">
            Campaign packages are still being priced. Reach us from the footer
            if you want a custom scope now.
          </p>
        </div>
      </section>

      <section className="section-y px-4 pb-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.12em] text-sky-400 sm:text-3xl sm:tracking-[0.22em]">
            Our work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400">
            Flyers, posts, and campaign work — more pieces land here soon.
          </p>
          <WorkCarousel />
        </div>
      </section>
    </InternalPageShell>
  );
}
