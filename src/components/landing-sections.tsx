const sectionClass =
  "section-y scroll-mt-24 -mt-px px-6 sm:px-10";

export function LandingSections() {
  return (
    <section id="contact" className={sectionClass}>
      <div className="mx-auto max-w-4xl">
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.2em] text-sky-400 sm:text-3xl">
          Contact us
        </h2>
        <p className="mt-6 font-[family-name:var(--font-sans)] text-base leading-8 tracking-[-0.02em] text-slate-300">
          Tell us what you are building. Reach us at{" "}
          <a
            href="mailto:hello@rooster.studio"
            className="text-sky-300 hover:text-white"
          >
            hello@rooster.studio
          </a>
          .
        </p>
      </div>
    </section>
  );
}
