import type { Metadata } from "next";

import { SimpleInternalPage } from "@/components/simple-internal-page";

export const metadata: Metadata = {
  title: "Careers | Rooster",
  description: "Join Rooster — roles and opportunities at the studio.",
};

export default function CareersRoute() {
  return (
    <SimpleInternalPage
      eyebrow="Careers"
      title="Send your CV to us"
      body="We are not listing open roles right now, but we always want to hear from sharp designers and developers. Send your CV and a short note about what you make."
      ctaHref="mailto:roosterwebdev@gmail.com?subject=CV%20%E2%80%94%20Rooster"
      ctaLabel="Send your CV"
    />
  );
}
