import type { Metadata } from "next";

import { BlogsPage } from "@/components/blogs-page";

export const metadata: Metadata = {
  title: "Blogs & Resources | Rooster",
  description:
    "Rooster blogs and resources on website design, development, CMS, and marketing.",
};

export default function BlogsRoute() {
  return <BlogsPage />;
}
