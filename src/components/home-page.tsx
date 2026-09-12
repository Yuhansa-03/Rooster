"use client";

import { useEffect } from "react";

import { AboutStorybook } from "@/components/about-storybook";
import { AboutStorybookProvider } from "@/components/about-storybook-context";
import { HeroVideo } from "@/components/hero-video";
import { PartnersSection } from "@/components/partners-section";
import { ProjectsSection } from "@/components/projects-section";
import { QuoteCtaSection } from "@/components/quote-cta-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFloatingMenu } from "@/components/site-floating-menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteWidgets } from "@/components/site-widgets";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ValuesSection } from "@/components/values-section";
import { WhyUsSection } from "@/components/why-us-section";

export function HomePage() {
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

  return (
    <AboutStorybookProvider>
      <div className="page-shell w-full">
        <div className="relative z-10">
          <section
            id="home"
            className="relative h-screen w-full overflow-hidden text-white"
          >
            <HeroVideo />

            <div className="pointer-events-none absolute inset-0 bg-black/10" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_58%,rgba(0,0,0,0.32)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/35 to-transparent" />

            <p className="absolute top-5 left-4 z-20 font-[family-name:var(--font-orbitron)] text-xl uppercase tracking-[0.22em] text-white drop-shadow-[0_0_22px_rgba(56,189,248,0.55)] sm:top-10 sm:left-10 sm:text-4xl sm:tracking-[0.28em]">
              Rooster
            </p>
          </section>

          <ValuesSection />
          <ServicesSection />
          <StatsSection />
          <WhyUsSection />
          <ProjectsSection />
          <PartnersSection />
          <QuoteCtaSection />
          <TestimonialsSection />
        </div>

        <SiteFooter />
        <SiteFloatingMenu />
        <SiteWidgets />
        <AboutStorybook />
      </div>
    </AboutStorybookProvider>
  );
}
