"use client";

import { AboutStorybook } from "@/components/about-storybook";
import { AboutStorybookProvider } from "@/components/about-storybook-context";
import { SiteFloatingMenu } from "@/components/site-floating-menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteWidgets } from "@/components/site-widgets";

export function InternalPageShell({
  children,
  wash = "top",
}: {
  children: React.ReactNode;
  wash?: "bottom" | "top";
}) {
  return (
    <AboutStorybookProvider>
      <div
        className={`${wash === "top" ? "page-shell-top" : "page-shell"} min-h-screen w-full overflow-x-clip text-white`}
      >
        <div className="relative z-10">{children}</div>
        <SiteFooter />
        <SiteFloatingMenu />
        <SiteWidgets />
        <AboutStorybook />
      </div>
    </AboutStorybookProvider>
  );
}
