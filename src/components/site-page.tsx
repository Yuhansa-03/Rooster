import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { HashScroll } from "@/components/hash-scroll";

type SitePageProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  children?: ReactNode;
};

export function SitePage({
  title,
  eyebrow = "Rooster",
  intro,
  children,
}: SitePageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <HashScroll />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.16),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-sm tracking-wide text-sky-300 transition hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to landing
        </Link>

        <p className="mt-16 font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.42em] text-sky-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-orbitron)] text-4xl uppercase tracking-[0.18em] text-white sm:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{intro}</p>
        ) : null}
        <div className="mt-12 flex flex-col gap-16 pb-24">{children}</div>
      </div>
    </main>
  );
}

type SectionBlockProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <section id={id} className="scroll-mt-10">
      <div className="rounded-2xl border-2 border-sky-400 bg-blue-600/15 p-6 sm:p-8">
        <h2 className="font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.2em] text-white sm:text-2xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-200">{children}</div>
      </div>
    </section>
  );
}
