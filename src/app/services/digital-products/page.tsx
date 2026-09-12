import type { Metadata } from "next";

import { SimpleInternalPage } from "@/components/simple-internal-page";

export const metadata: Metadata = {
  title: "Digital Products | Rooster",
  description: "Rooster digital products — launching soon.",
};

export default function DigitalProductsRoute() {
  return (
    <SimpleInternalPage
      eyebrow="Coming soon"
      title="Digital Products"
      body="This service is still in the nest. Meanwhile, explore Website Design & Development or Rooster Marketing — or tell us what you need from the footer."
    />
  );
}
