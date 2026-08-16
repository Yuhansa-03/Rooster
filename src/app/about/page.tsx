import { SectionBlock, SitePage } from "@/components/site-page";

export default function AboutPage() {
  return (
    <SitePage
      title="Studio"
      intro="Who we are, and the work we take on. About us and our services live here."
    >
      <SectionBlock id="about" title="About us">
        <p>
          Rooster is a techno-minded studio building digital products, identities, and
          experiences with a neon edge. We keep the work sharp, the systems clean, and
          the output unmistakably ours.
        </p>
        <p>
          The landing is the first frame. These pages are where the company, the craft,
          and the conversation sit.
        </p>
      </SectionBlock>

      <SectionBlock id="services" title="Our services">
        <p>We design and ship across brand, product, and motion:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Brand systems and visual identity</li>
          <li>Websites and product interfaces</li>
          <li>Motion, launch films, and hero sequences</li>
          <li>Campaign builds and digital environments</li>
        </ul>
      </SectionBlock>
    </SitePage>
  );
}
