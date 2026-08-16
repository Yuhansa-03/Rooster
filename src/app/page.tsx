import { HeroVideo } from "@/components/hero-video";
import { NavCoverflow } from "@/components/nav-coverflow";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <HeroVideo />

      <div className="pointer-events-none absolute inset-0 bg-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

      <header className="absolute left-6 top-6 z-20 sm:left-10 sm:top-8">
        <h1 className="font-[family-name:var(--font-orbitron)] text-3xl uppercase tracking-[0.28em] text-white drop-shadow-[0_0_22px_rgba(56,189,248,0.55)] sm:text-5xl">
          Rooster
        </h1>
      </header>

      <section
        aria-label="Site navigation"
        className="fixed inset-y-0 right-0 z-30 h-screen w-44 sm:w-52"
      >
        <NavCoverflow />
      </section>
    </main>
  );
}
