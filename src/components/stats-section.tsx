"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Completed projects", value: 1 },
  { label: "Ongoing projects", value: 1 },
  { label: "Happy partners", value: 3 },
] as const;

function CountUp({ value, active }: { value: number; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="font-[family-name:var(--font-orbitron)] text-4xl text-white sm:text-6xl md:text-7xl">
      {display}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <section
      id="stats"
      ref={ref}
      className="section-y relative px-6 sm:px-10"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <CountUp value={stat.value} active={inView} />
            <p className="mt-4 font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400 sm:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
