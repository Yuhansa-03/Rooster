import type { Metadata } from "next";

import { WebDesignPage } from "@/components/web-design-page";

export const metadata: Metadata = {
  title: "Website Design & Development | Rooster",
  description:
    "Rooster website design and development — process, portfolio, and live site previews.",
};

export default function WebDesignRoute() {
  return <WebDesignPage />;
}
