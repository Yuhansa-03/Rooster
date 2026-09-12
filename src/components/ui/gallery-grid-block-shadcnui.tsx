"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Grid,
  X,
  ZoomIn,
} from "lucide-react";
import { KeyboardEvent, useEffect, useMemo, useState } from "react";

export type PortfolioProject = {
  id: number;
  url: string;
  siteUrl: string;
  title: string;
  category: "Live Sites" | "Website Designs" | "Templates";
  description?: string;
  /** Sites that send X-Frame-Options / CSP and cannot load in an iframe */
  embedBlocked?: boolean;
};

const DEFAULT_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: "CAFS",
    category: "Live Sites",
    siteUrl: "https://cafs.lk/",
    url: "/projects/cafs-home.png",
    description: "Mental health support platform — your home away from home.",
    embedBlocked: true,
  },
  {
    id: 2,
    title: "Bond & Beyond",
    category: "Live Sites",
    siteUrl: "https://bnbholdings.roosterdev.io/",
    url: "/projects/bnb-home.png",
    description: "Group holdings site across education, travel, BPO, and more.",
  },
  {
    id: 3,
    title: "Northline Agency",
    category: "Website Designs",
    siteUrl: "https://tailwindcss.com",
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    description: "Concept design system for a creative agency brand.",
  },
  {
    id: 4,
    title: "Minimal Launch",
    category: "Templates",
    siteUrl: "https://ui.shadcn.com",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Reusable landing template for product launches.",
  },
  {
    id: 5,
    title: "Forge Portfolio",
    category: "Website Designs",
    siteUrl: "https://framer.com",
    url: "https://images.unsplash.com/photo-1550745165-9bc8b52dd4b1?q=80&w=1200&auto=format&fit=crop",
    description: "Dark portfolio layout for studios and freelancers.",
  },
  {
    id: 6,
    title: "Signal Docs",
    category: "Templates",
    siteUrl: "https://react.dev",
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    description: "Documentation-style template with crisp typography.",
  },
];

const FILTERS = [
  "All",
  "Live Sites",
  "Website Designs",
  "Templates",
] as const;

function openInRoosterWindow(siteUrl: string) {
  const width = Math.min(1440, Math.max(980, window.screen.availWidth - 100));
  const height = Math.min(920, Math.max(700, window.screen.availHeight - 100));
  const left = Math.max(0, Math.round((window.screen.availWidth - width) / 2));
  const top = Math.max(0, Math.round((window.screen.availHeight - height) / 2));

  window.open(
    siteUrl,
    "rooster-site-preview",
    `noopener,noreferrer,width=${width},height=${height},left=${left},top=${top}`,
  );
}

type GalleryGridBlockProps = {
  projects?: PortfolioProject[];
};

export function GalleryGridBlock({
  projects = DEFAULT_PROJECTS,
}: GalleryGridBlockProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects],
  );

  const selectedProject = projects.find((project) => project.id === selectedId);

  useEffect(() => {
    if (selectedId === null) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, projects]);

  const handleNext = () => {
    if (selectedId === null) return;
    const currentIndex = projects.findIndex((img) => img.id === selectedId);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedId(projects[nextIndex].id);
  };

  const handlePrev = () => {
    if (selectedId === null) return;
    const currentIndex = projects.findIndex((img) => img.id === selectedId);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedId(projects[prevIndex].id);
  };

  const openProject = (project: PortfolioProject) => {
    // CAFS (and similar) refuse iframes — open a real browser window instead
    if (project.embedBlocked) {
      openInRoosterWindow(project.siteUrl);
    }
    setSelectedId(project.id);
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    project: PortfolioProject,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project);
    }
  };

  const closePreview = () => setSelectedId(null);

  return (
    <section
      id="projects"
      className="w-full scroll-mt-24 bg-black px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge className="mb-4 border-sky-400/30 bg-sky-950 text-sky-300" variant="secondary">
            <Grid className="mr-1 h-3 w-3" />
            Portfolio
          </Badge>
          <h2
            id="gallery-heading"
            className="mb-4 font-[family-name:var(--font-orbitron)] text-3xl uppercase tracking-[0.14em] text-white sm:text-4xl"
          >
            Selected work
          </h2>
          <p className="mx-auto max-w-2xl font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400 sm:text-base">
            Browse designs, live sites, and templates — open any card to preview
            it inside Rooster.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Gallery categories"
        >
          {FILTERS.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={
                filter === category
                  ? "border-sky-400 bg-sky-500 text-slate-950 hover:bg-sky-400"
                  : "border-white/20 bg-transparent text-slate-200 hover:border-sky-400 hover:bg-sky-950 hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Gallery items"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                role="listitem"
              >
                <Card
                  className="group relative cursor-pointer overflow-hidden border-sky-400/20 bg-zinc-950 transition-all hover:border-sky-400/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]"
                  onClick={() => openProject(image)}
                  onKeyDown={(event) => handleCardKeyDown(event, image)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Preview ${image.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src={image.url}
                      alt={image.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm"
                      aria-hidden="true"
                    >
                      <ZoomIn className="mb-2 h-8 w-8 text-sky-300" />
                      <h3 className="mb-1 text-center font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.12em] text-white">
                        {image.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="border-sky-400/30 bg-sky-950 text-sky-200"
                      >
                        {image.category}
                      </Badge>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedId !== null && selectedProject ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[220] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
              onClick={closePreview}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-dialog-title"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: 10 }}
                transition={{ type: "spring", damping: 26, stiffness: 280 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-sky-400/25 bg-zinc-950 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={closePreview}
                  className="absolute top-3 right-3 z-[30] flex size-10 items-center justify-center rounded-full border-2 border-sky-400 bg-sky-950 text-white shadow-lg transition hover:bg-blue-600 sm:top-4 sm:right-4"
                  aria-label="Close preview"
                >
                  <X className="size-5" strokeWidth={2.5} />
                </button>

                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 pr-14 sm:px-5 sm:pr-16">
                  <div className="min-w-0">
                    <p className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.18em] text-sky-400">
                      Viewing through Rooster
                    </p>
                    <h3
                      id="gallery-dialog-title"
                      className="truncate font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.1em] text-white sm:text-base"
                    >
                      {selectedProject.title}
                    </h3>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="shrink-0 border-sky-400/40 bg-transparent text-sky-200 hover:bg-sky-950"
                    onClick={() =>
                      selectedProject.embedBlocked
                        ? openInRoosterWindow(selectedProject.siteUrl)
                        : window.open(
                            selectedProject.siteUrl,
                            "_blank",
                            "noopener,noreferrer",
                          )
                    }
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {selectedProject.embedBlocked ? "Reopen live site" : "Open site"}
                  </Button>
                </div>

                <div className="relative min-h-0 flex-1 bg-black">
                  {selectedProject.embedBlocked ? (
                    <div className="flex h-full flex-col">
                      <div className="flex flex-col items-start justify-between gap-3 border-b border-sky-400/20 bg-sky-950/40 px-4 py-3 sm:flex-row sm:items-center sm:px-5">
                        <div className="min-w-0">
                          <p className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.16em] text-sky-300">
                            Live preview
                          </p>
                          <p className="mt-1 font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-slate-300 sm:text-sm">
                            CAFS blocks iframes for security, so the interactive
                            site opens in a Rooster preview window. Homepage
                            snapshot is below.
                          </p>
                        </div>
                        <Button
                          size="sm"
                          className="shrink-0 border-sky-400 bg-sky-500 text-slate-950 hover:bg-sky-400"
                          onClick={() =>
                            openInRoosterWindow(selectedProject.siteUrl)
                          }
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Reopen live site
                        </Button>
                      </div>
                      <div className="min-h-0 flex-1 overflow-auto bg-[#0b3d3a]">
                        <img
                          src={selectedProject.url}
                          alt={`${selectedProject.title} homepage`}
                          className="mx-auto w-full max-w-5xl object-contain object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    <iframe
                      key={selectedProject.id}
                      src={selectedProject.siteUrl}
                      title={`${selectedProject.title} preview`}
                      className="h-full w-full border-0 bg-white"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allow="fullscreen"
                    />
                  )}

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1/2 left-3 z-10 -translate-y-1/2 border border-white/15 bg-black/60 text-white hover:bg-black/80"
                    onClick={handlePrev}
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1/2 right-3 z-10 -translate-y-1/2 border border-white/15 bg-black/60 text-white hover:bg-black/80"
                    onClick={handleNext}
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-5">
                  <Badge
                    variant="secondary"
                    className="border-sky-400/30 bg-sky-950 text-sky-200"
                  >
                    {selectedProject.category}
                  </Badge>
                  <p className="max-w-xl truncate font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-slate-400 sm:text-sm">
                    {selectedProject.description ?? selectedProject.siteUrl}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
