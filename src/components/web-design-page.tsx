"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Grid, X, ZoomIn } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InternalPageShell } from "@/components/internal-page-shell";

const ease = [0.22, 1, 0.36, 1] as const;

const MANIFESTO = [
  {
    text: "AI can build a website. Rooster builds the right one.",
    as: "h2" as const,
    className:
      "text-balance px-1 text-center font-[family-name:var(--font-orbitron)] text-[1.15rem] leading-snug uppercase tracking-[0.04em] text-white sm:text-4xl sm:leading-tight sm:tracking-[0.1em]",
    from: "left" as const,
  },
  {
    text: "Built by humans who actually know your business.",
    as: "h3" as const,
    className:
      "mt-4 text-balance px-1 text-center font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.08em] text-sky-400 sm:mt-5 sm:text-2xl sm:tracking-[0.16em]",
    from: "right" as const,
  },
] as const;

const MANIFESTO_COPY = [
  "Anyone can launch a standard page, but true connection takes real human insight.",
  "We handcraft fully custom, lightning-fast, and secure websites tailored entirely to your unique vision.",
  "Every single pixel is designed to inspire your audience, keep them joyfully scrolling, and guide them straight to your door.",
] as const;

const WHAT_WE_DO = [
  {
    title: "Website Design",
    headline: "Custom UI/UX Design & Next-Gen Animations",
    body: "We craft human-made, personalized website designs featuring cutting-edge animations and exclusive layouts not yet seen on the market. Every user interface is strategically engineered to captivate visitors, maximize engagement, and keep them hooked from the moment they land.",
  },
  {
    title: "Website Development & Hosting",
    headline: "High-Performance Website Development & Hosting",
    body: "We build lightning-fast, highly secure websites using an elite, modern tech stack. Whether you need a bespoke custom-coded web application or a flexible, powerful WordPress website, we deliver robust, scalable development paired with reliable hosting to keep your brand running seamlessly.",
  },
  {
    title: "CMS (Content Management System)",
    headline: "Tailor-Made CMS Solutions",
    body: "Take full control of your digital presence with a custom-built content management system designed specifically for your website. Manage, update, and scale your content effortlessly through an intuitive dashboard built exclusively around your workflow.",
  },
  {
    title: "Maintenance",
    headline: "Proactive Website Maintenance & Support",
    body: "Protect your digital investment with round-the-clock monitoring, security updates, and performance optimizations. We handle the technical heavy lifting behind the scenes so your website stays secure, fast, and always online while you focus on growing your business.",
  },
] as const;

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "We map goals, audience, and constraints so the site has a clear job to do.",
  },
  {
    step: "02",
    title: "Design",
    body: "Wireframes to polished UI — structure, hierarchy, and motion that feel intentional.",
  },
  {
    step: "03",
    title: "Build",
    body: "Fast, accessible front-ends with clean systems that are easy to extend.",
  },
  {
    step: "04",
    title: "Launch",
    body: "QA, performance passes, and a handoff that keeps the experience sharp live.",
  },
] as const;

const FILTERS = [
  "All",
  "Live Sites",
  "Website Designs",
  "Templates",
] as const;

type ProjectFilter = (typeof FILTERS)[number];

const PROJECTS = [
  {
    id: "cafs",
    title: "CAFS",
    category: "Live Sites",
    siteUrl: "https://cafs.lk/",
    cover: "/projects/cafs-home.png",
    summary: "Mental health support platform — a calm home away from home.",
    design:
      "A warm, grounded visual system built around trust. Soft teal tones, clear hierarchy, and approachable type so visitors can find support without friction.",
    development:
      "A responsive public site with content-led pages, clear calls to action, and a structure that stays easy to extend as the organisation grows.",
    stack: ["Custom front-end", "Responsive UI", "SEO-ready", "Performance pass"],
  },
  {
    id: "bnb",
    title: "Bond & Beyond",
    category: "Live Sites",
    siteUrl: "https://bnbholdings.roosterdev.io/",
    cover: "/projects/bnb-home.png",
    summary: "Group holdings site across education, travel, BPO, and more.",
    design:
      "A corporate identity that holds multiple verticals in one place — clean sections, confident type, and a layout that introduces the group without clutter.",
    development:
      "A multi-section holdings site with fast page loads, structured content blocks, and a build ready for new brands under the same roof.",
    stack: ["Next.js", "TypeScript", "Responsive UI", "Custom components"],
  },
] as const;

type Project = (typeof PROJECTS)[number];

function ProcessTimeline() {
  return (
    <div className="relative mx-auto mt-12 max-w-4xl">
      <div className="absolute top-8 bottom-8 left-[1.15rem] w-px bg-sky-400/35 sm:left-[1.35rem]" />
      <div className="space-y-5">
        {PROCESS.map((item, index) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              scale: 1.01,
              transition: { duration: 0.22, delay: 0 },
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            className="relative rounded-[1.5rem] border border-white/10 bg-black py-5 pr-4 pl-14 shadow-[0_0_0_1px_rgba(56,189,248,0.06)] sm:rounded-[2rem] sm:py-6 sm:pr-10 sm:pl-16"
          >
            <span className="absolute top-1/2 left-2 z-10 flex size-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-sky-400 bg-[#06101f] font-[family-name:var(--font-orbitron)] text-[10px] text-sky-300 sm:left-2.5 sm:size-8">
              {item.step}
            </span>
            <h3 className="font-[family-name:var(--font-orbitron)] text-base uppercase tracking-[0.12em] text-white sm:text-xl sm:tracking-[0.14em]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-400">
              {item.body}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function revealOffset(from: "left" | "right" | "center") {
  if (from === "left") return { x: -28, y: 0, scale: 1 };
  if (from === "right") return { x: 28, y: 0, scale: 1 };
  return { x: 0, y: 20, scale: 0.98 };
}

function FlipCard({
  title,
  headline,
  body,
  index,
}: {
  title: string;
  headline: string;
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
      className="h-[16.5rem] w-full min-w-0 [perspective:1400px] sm:h-[22rem] lg:h-[24rem]"
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
          <h3 className="mt-3 text-balance font-[family-name:var(--font-orbitron)] text-base uppercase tracking-[0.08em] text-white sm:mt-4 sm:text-xl sm:tracking-[0.12em]">
            {title}
          </h3>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-sky-400/40 bg-sky-950 px-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-6">
          <h3 className="text-balance font-[family-name:var(--font-orbitron)] text-[10px] leading-snug uppercase tracking-[0.1em] text-sky-300 sm:text-sm sm:tracking-[0.14em]">
            {headline}
          </h3>
          <p className="hide-scrollbar mt-3 max-h-[9.5rem] overflow-y-auto font-[family-name:var(--font-sans)] text-xs leading-5 tracking-[-0.02em] text-slate-200 sm:mt-4 sm:max-h-none sm:text-sm sm:leading-6">
            {body}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

export function WebDesignPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  return (
    <InternalPageShell wash="top">
      <header className="px-4 pt-10 pr-36 pb-10 sm:px-10 sm:pt-12 sm:pr-10">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#services"
            className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-400 transition hover:text-white"
          >
            ← Back to services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mt-8 text-balance font-[family-name:var(--font-orbitron)] text-lg uppercase tracking-[0.08em] text-sky-400 sm:text-4xl sm:tracking-[0.18em]"
          >
            Website Design & Development
          </motion.h1>
        </div>
      </header>

      <section className="px-0 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mx-auto h-[32vh] w-[92vw] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:h-[42vh] sm:w-[88vw] sm:rounded-[2rem] md:h-[55vh] md:w-[85vw]"
        >
          <video
            className="h-full w-full object-cover"
            src="/vid/web-design-dev.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </section>

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
              const from =
                index === 0 ? "left" : index === 1 ? "right" : "center";
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

          <div className="grid gap-5 sm:grid-cols-2">
            {WHAT_WE_DO.map((item, index) => (
              <FlipCard
                key={item.title}
                title={item.title}
                headline={item.headline}
                body={item.body}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y px-4 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.12em] text-sky-400 sm:text-3xl sm:tracking-[0.22em]">
            Our process
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400">
            A focused path from idea to launch — no fluff, just progress you can
            feel.
          </p>

          <ProcessTimeline />
        </div>
      </section>

      <section
        id="projects"
        className="w-full scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <Badge
              className="mb-4 border-sky-400/30 bg-sky-950 text-sky-300"
              variant="secondary"
            >
              <Grid className="mr-1 h-3 w-3" />
              Portfolio
            </Badge>
            <h2
              id="gallery-heading"
              className="mb-4 text-balance font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.1em] text-white sm:text-4xl sm:tracking-[0.14em]"
            >
              Our projects
            </h2>
            <p className="mx-auto max-w-2xl font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-400 sm:text-base">
              Browse designs, live sites, and templates — open a card for the
              stack and the thinking behind it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex flex-wrap justify-center gap-2 px-1"
            role="group"
            aria-label="Project categories"
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

          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
              aria-label="Gallery items"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    role="listitem"
                  >
                    <Card
                      className="group relative cursor-pointer overflow-hidden border-sky-400/20 bg-zinc-950 transition-all hover:border-sky-400/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]"
                      onClick={() => setSelectedProject(project)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Open ${project.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={project.cover}
                          alt={project.title}
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
                            {project.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="border-sky-400/30 bg-sky-950 text-sky-200"
                          >
                            {project.category}
                          </Badge>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <p className="py-16 text-center font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.22em] text-slate-500">
              No Content
            </p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[220] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="hide-scrollbar relative max-h-[min(88dvh,calc(100dvh-1.5rem))] w-full max-w-2xl overflow-y-auto rounded-2xl border border-sky-400/30 bg-zinc-950 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-10 rounded-full border border-white/15 bg-black/50 p-2 text-white transition hover:bg-white/10"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>

              <img
                src={selectedProject.cover}
                alt={`${selectedProject.title} homepage`}
                className="h-52 w-full object-cover sm:h-64"
              />

              <div className="space-y-5 p-4 sm:p-8">
                <div>
                  <p className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.2em] text-sky-400">
                    Live site
                  </p>
                  <h3
                    id="project-dialog-title"
                    className="mt-2 font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.1em] text-white"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.16em] text-sky-400">
                    Design
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-300">
                    {selectedProject.design}
                  </p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.16em] text-sky-400">
                    Development
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-sans)] text-sm leading-7 tracking-[-0.02em] text-slate-300">
                    {selectedProject.development}
                  </p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.16em] text-sky-400">
                    Tech stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-sky-400/30 bg-sky-950 px-3 py-1 font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sky-400 bg-sky-950 px-5 py-2.5 font-[family-name:var(--font-sans)] text-sm text-white transition hover:bg-blue-600"
                >
                  <ExternalLink className="size-4" />
                  Visit website
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </InternalPageShell>
  );
}
