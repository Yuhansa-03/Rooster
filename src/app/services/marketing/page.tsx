import type { Metadata } from "next";

import { MarketingPage } from "@/components/marketing-page";

export const metadata: Metadata = {
  title: "Rooster Marketing | Rooster",
  description:
    "Rooster Marketing — brand systems, campaigns, and growth content.",
};

export default function MarketingRoute() {
  return <MarketingPage />;
}
