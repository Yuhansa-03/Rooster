"use client";

import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const PROJECT_IMAGES = [
  "/services/web-design.png",
  "/services/branding.png",
  "/services/ai-chatbots.png",
  "/services/digital-products.png",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc8b52dd4b1?q=80&w=800&auto=format&fit=crop",
];

export function ProjectsSection() {
  return (
    <div id="projects" className="scroll-mt-0">
      <AnimatedMarqueeHero
        title="Our Projects in motion"
        description="Websites, brands, and digital experiences built with neon precision — scroll the reel, then tell us what you want next."
        ctaText="Our projects"
        ctaHref="/services/web-design#projects"
        images={PROJECT_IMAGES}
        className="bg-transparent"
      />
    </div>
  );
}
