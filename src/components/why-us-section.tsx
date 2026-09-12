"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const WHY_US_FRAMES = [
  {
    id: 1,
    label: "Lightning Speed",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    label: "Bold Design",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    label: "Human Insight",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    label: "Future Ready",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    label: "Air Tight Security",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    label: "Built to Scale",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    label: "Clear Strategy",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    label: "Custom Craft",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    label: "Launch Ready",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="section-y relative px-4 sm:px-8"
    >
      <div className="mx-auto mb-8 max-w-6xl text-center">
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.22em] text-sky-400 sm:text-3xl">
          Why Choose Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400 sm:text-base">
          <span className="md:hidden">
            Craft, motion, and systems in one studio.
          </span>
          <span className="hidden md:inline">
            Hover any frame to expand the story — craft, motion, and systems in
            one studio.
          </span>
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-2 md:hidden">
        {WHY_US_FRAMES.map((frame) => (
          <div
            key={frame.id}
            className="flex min-h-20 items-center justify-center rounded-xl border border-white/20 bg-black px-3 py-4"
          >
            <p className="text-center font-[family-name:var(--font-sans)] text-sm italic tracking-[-0.02em] text-white">
              {frame.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto hidden h-[64vh] w-full max-w-6xl overflow-hidden rounded-sm md:block">
        <DynamicFrameLayout
          frames={WHY_US_FRAMES}
          className="h-full w-full"
          hoverSize={6}
          gapSize={4}
        />
      </div>
    </section>
  );
}
