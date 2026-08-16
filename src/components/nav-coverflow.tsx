"use client";

import type { CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { VerticalCoverflow } from "@/components/vertical-coverflow";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

const NAV_SLIDES: CoverflowSlide[] = [
  {
    src: UNSPLASH("1518770660439-4636190af475"),
    alt: "Circuit board close-up with electric blue traces",
    title: "Our services",
    href: "/about#services",
  },
  {
    src: UNSPLASH("1522071820081-009f0129c71c"),
    alt: "Team collaborating around laptops in a dark studio",
    title: "About us",
    href: "/about#about",
  },
  {
    src: UNSPLASH("1553729459-efe14ef6055d"),
    alt: "Stacked product packages on a dark surface",
    title: "Packages",
    href: "/work#packages",
  },
  {
    src: UNSPLASH("1460925496-5c0d188b27d4"),
    alt: "Analytics dashboard glowing on a monitor",
    title: "Projects",
    href: "/work#projects",
  },
  {
    src: UNSPLASH("1596524434968-d5bf4e508fd2"),
    alt: "Neon-lit city street at night",
    title: "Contact us",
    href: "/contact",
  },
];

export function NavCoverflow() {
  return (
    <VerticalCoverflow
      slides={NAV_SLIDES}
      label="Rooster site sections"
      cardWidth="clamp(96px, 14vh, 148px)"
      rotate={14}
      depth={0.22}
      perspective={4}
      cardClassName="border-2 border-sky-400 bg-black text-white shadow-none transition-colors duration-200 hover:border-sky-300 hover:bg-sky-950"
    />
  );
}
