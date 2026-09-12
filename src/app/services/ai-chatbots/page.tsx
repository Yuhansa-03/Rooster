import type { Metadata } from "next";

import { SimpleInternalPage } from "@/components/simple-internal-page";

export const metadata: Metadata = {
  title: "AI Chatbots | Rooster",
  description: "Rooster AI chatbots — launching soon.",
};

export default function AiChatbotsRoute() {
  return (
    <SimpleInternalPage
      eyebrow="Coming soon"
      title="AI Chatbots"
      body="This service is still in the nest. Meanwhile, explore Website Design & Development or Rooster Marketing — or tell us what you need from the footer."
    />
  );
}
