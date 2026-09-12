"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  images: string[];
  className?: string;
}

const ActionButton = ({
  children,
  href = "#contact",
}: {
  children: React.ReactNode;
  href?: string;
}) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-8 inline-flex rounded-full bg-sky-500 px-8 py-3 font-[family-name:var(--font-sans)] font-semibold tracking-[-0.02em] text-white shadow-lg transition-colors hover:bg-sky-400 focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 focus:outline-none"
  >
    {children}
  </motion.a>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref,
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative flex min-h-[64vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-12 text-center sm:min-h-[78vh] sm:py-16",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center">
        {tagline ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mb-4 inline-block rounded-full border border-sky-400/30 bg-white/5 px-4 py-1.5 font-[family-name:var(--font-sans)] text-sm font-medium tracking-[-0.02em] text-slate-300 backdrop-blur-sm"
          >
            {tagline}
          </motion.div>
        ) : null}

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.22em] text-sky-400 sm:text-3xl"
        >
          {typeof title === "string" ? (
            title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={FADE_IN_ANIMATION_VARIANTS}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))
          ) : (
            title
          )}
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mt-6 max-w-xl font-[family-name:var(--font-sans)] text-base tracking-[-0.02em] text-slate-400 sm:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_IN_ANIMATION_VARIANTS}
        >
          <ActionButton href={ctaHref}>{ctaText}</ActionButton>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-1/3 w-full [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] md:h-2/5">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative aspect-[3/4] h-36 flex-shrink-0 sm:h-48 md:h-64"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="h-full w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
