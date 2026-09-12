"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export type PackageCard = {
  id: string;
  title: string;
  blurb: string;
  price: string;
  image: string;
};

const PACKAGES: PackageCard[] = [
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    blurb:
      "A full e-commerce site with hosting for 1 year, CMS, and a customized storefront.",
    price: "From LKR 150,000",
    image: "/packages/ecommerce.jpg",
  },
];

export function ImageGallery() {
  const [active, setActive] = useState<PackageCard | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="hide-scrollbar grid max-h-[65vh] grid-cols-1 gap-4 overflow-y-auto p-1 sm:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => setActive(pkg)}
            className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900 text-left transition hover:border-sky-400/50 hover:bg-zinc-900/90"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-1 p-4">
              <p className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-400">
                {pkg.price}
              </p>
              <h3 className="font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.12em] text-white">
                {pkg.title}
              </h3>
              <p className="line-clamp-2 font-[family-name:var(--font-sans)] text-xs leading-5 tracking-[-0.02em] text-slate-400">
                {pkg.blurb}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[220] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.25 }}
              className="hide-scrollbar relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl border border-sky-400/30 bg-zinc-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 rounded-full border border-white/15 bg-black/50 p-2 text-white backdrop-blur transition hover:bg-white/10"
                aria-label="Close package details"
              >
                <X className="size-4" />
              </button>

              <div className="aspect-[16/10] w-full shrink-0 overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-400">
                    {active.price}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.12em] text-white">
                    {active.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-300">
                    {active.blurb}
                  </p>
                </div>

                <a
                  href={`#contact?package=${encodeURIComponent(active.title)}`}
                  onClick={() => setActive(null)}
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-sky-400 bg-sky-950 px-6 py-3 font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-white transition hover:border-sky-300 hover:bg-blue-600"
                >
                  Inquire now
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
