"use client";

import { usePathname, useRouter } from "next/navigation";

import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";
import { useAboutStorybook } from "@/components/about-storybook-context";

export function SiteFloatingMenu() {
  const { open } = useAboutStorybook();
  const pathname = usePathname();
  const router = useRouter();

  const goHomeSection = (id: string) => {
    if (pathname === "/") {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    router.push(`/#${id}`);
  };

  return (
    <FloatingMenu
      placement="top-right"
      items={[
        {
          label: "Home",
          onClick: () => {
            if (pathname === "/") {
              goHomeSection("home");
            } else {
              router.push("/");
            }
          },
        },
        {
          label: "About us",
          onClick: () => open(),
        },
        { label: "Services", onClick: () => goHomeSection("services") },
        { label: "Projects", onClick: () => goHomeSection("projects") },
        { label: "Contact us", onClick: () => goHomeSection("contact") },
      ]}
    />
  );
}
