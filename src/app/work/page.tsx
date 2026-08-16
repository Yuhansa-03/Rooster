import { SectionBlock, SitePage } from "@/components/site-page";

export default function WorkPage() {
  return (
    <SitePage
      title="Work"
      intro="What we offer, and what we have shipped. Packages and projects live here."
    >
      <SectionBlock id="packages" title="Packages">
        <p>Start with a clear scope. Each package can be tailored once we know the brief.</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-white">Pulse</span> — landing page, identity lockup, and
            motion sting
          </li>
          <li>
            <span className="text-white">Signal</span> — full marketing site with CMS-ready
            sections
          </li>
          <li>
            <span className="text-white">Grid</span> — product UI, design system, and build
            support
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock id="projects" title="Projects">
        <p>
          Selected work will sit here. For now this is the shelf — case studies can drop
          in as they are ready, without changing the rest of the site.
        </p>
        <p>Expect films, product launches, and brand systems with the same neon register as the landing.</p>
      </SectionBlock>
    </SitePage>
  );
}
