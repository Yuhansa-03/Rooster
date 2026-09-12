"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import {
  ArgentLoopInfiniteSlider,
  type SliderItemData,
} from "@/components/ui/argent-loop-infinite-slider";

const SERVICES_DATA: SliderItemData[] = [
  {
    id: "web-design",
    title: "Website Design & Development",
    image: "/services/web-design.png",
    category: "Available",
    year: "2025",
    description:
      "Custom-crafted websites driven by real human insight. We design specifically around your brand and your unique requests, delivering deeply personalized platforms that look stunning and perform flawlessly.",
    status: "available",
    ctaLabel: "Launch Now",
    href: "/services/web-design",
  },
  {
    id: "marketing",
    title: "Marketing",
    image: "/services/marketing.png",
    category: "Available",
    year: "2025",
    description:
      "Data-driven strategies and creative campaigns designed to scale your business. We get your name in front of the right people, capturing attention and turning passive audiences into loyal customers.",
    status: "available",
    ctaLabel: "Get Loud",
    href: "/services/marketing",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    image: "/services/ai-chatbots.png",
    category: "Coming soon",
    year: "2026",
    description:
      "Give your business a 24/7 intelligent voice. We deploy smart, automated chatbots that engage visitors, answer questions instantly, and capture leads while you sleep. This service is launching soon.",
    status: "coming-soon",
    ctaLabel: "Deploy AI",
  },
  {
    id: "digital-products",
    title: "Digital Products",
    image: "/services/digital-products.png",
    category: "Coming soon",
    year: "2026",
    description:
      "Custom software, web apps, and interactive tools engineered to solve complex problems. We build scalable digital products that streamline your operations and give you a sharp competitive edge. This service is launching soon.",
    status: "coming-soon",
    ctaLabel: "See Builds",
  },
];

type PopupState = { type: "coming-soon"; item: SliderItemData } | null;

export function ServicesSection() {
  const router = useRouter();
  const trackRef = useRef<HTMLElement>(null);
  const cardCount = SERVICES_DATA.length;
  const [popup, setPopup] = useState<PopupState>(null);

  useEffect(() => {
    if (!popup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPopup(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [popup]);

  const onDeepDive = (item: SliderItemData) => {
    if (item.href) {
      router.push(item.href);
      return;
    }
    if (item.status === "coming-soon") {
      setPopup({ type: "coming-soon", item });
    }
  };

  return (
    <>
      <section
        id="services"
        ref={trackRef}
        className="relative"
        style={{ height: `${cardCount * 100}svh` }}
      >
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-6 pt-8 pb-4 text-center sm:px-10 sm:pt-10">
            <h2 className="font-[family-name:var(--font-orbitron)] text-lg uppercase tracking-[0.16em] text-sky-400 sm:text-2xl sm:tracking-[0.22em]">
              What we do
            </h2>
          </div>

          <div className="absolute inset-0">
            <ArgentLoopInfiniteSlider
              items={SERVICES_DATA}
              scrollTrackRef={trackRef}
              onDeepDive={onDeepDive}
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {popup ? (
          <motion.div
            className="fixed inset-0 z-[210] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={popup.item.title}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg rounded-2xl border border-sky-400/30 bg-zinc-950 p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPopup(null)}
                className="absolute top-3 right-3 rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>

              <div className="space-y-5 pr-6">
                <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.2em] text-sky-400">
                  {popup.item.title}
                </p>
                <h3 className="font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.1em] text-white">
                  Services coming soon
                </h3>
                <p className="font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-300">
                  This offering is still in the nest. Meanwhile, explore what
                  is live today.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/services/web-design"
                    className="rounded-full border-2 border-sky-400 bg-sky-950 px-5 py-2.5 text-center font-[family-name:var(--font-sans)] text-sm text-white transition hover:bg-blue-600"
                  >
                    Website Design & Development
                  </a>
                  <a
                    href="/services/marketing"
                    className="rounded-full border border-white/25 px-5 py-2.5 text-center font-[family-name:var(--font-sans)] text-sm text-white transition hover:border-sky-400 hover:bg-white/5"
                  >
                    Marketing
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
