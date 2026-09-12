"use client";

import {
  ScrollReelTestimonials,
  type ScrollReelTestimonial,
} from "@/components/ui/scroll-reel-testimonials";

const TESTIMONIALS: ScrollReelTestimonial[] = [
  {
    quote:
      "Rooster turned our brand into something electric — sharp, fast, and impossible to ignore.",
    author: "Nimal Perera, CAFS",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Nimal Perera",
  },
  {
    quote:
      "From first draft to launch, the process felt clear and the final site looked premium.",
    author: "Sara Wijesinghe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Sara Wijesinghe",
  },
  {
    quote:
      "They balance creative risk with real delivery. Our chatbot and site both work hard for us.",
    author: "Arjun Fernando",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    alt: "Portrait of Arjun Fernando",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-y relative px-6 sm:px-10"
    >
      <div className="mx-auto mb-8 max-w-[1060px] text-center">
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.22em] text-sky-400 sm:text-3xl">
          What Our Happy Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400 sm:text-base">
          Real voices from teams we have built with — tap through the reel.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1060px] justify-center">
        <ScrollReelTestimonials testimonials={TESTIMONIALS} />
      </div>
    </section>
  );
}
