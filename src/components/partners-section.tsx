"use client";

const PARTNERS = [
  {
    name: "Bond & Beyond",
    logo: "/partners/bond-beyond.jpg",
    href: "https://bnbholdings.roosterdev.io/",
    fill: false,
  },
  {
    name: "CAFS",
    logo: "/partners/cafs.png",
    href: "https://cafs.lk/",
    fill: true,
  },
] as const;

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="section-y relative overflow-hidden px-6 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_55%)]" />

      <div className="relative z-10 mx-auto mb-8 max-w-6xl text-center">
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl uppercase tracking-[0.22em] text-sky-400 sm:text-3xl">
          Our Partners
        </h2>
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-10 sm:gap-16">
        {PARTNERS.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4"
          >
            <div
              className={`flex size-28 items-center justify-center overflow-hidden rounded-full border border-sky-400/30 shadow-[0_0_40px_rgba(56,189,248,0.12)] transition group-hover:border-sky-400 sm:size-44 ${
                partner.fill ? "bg-[#14b8a6]" : "bg-white p-3"
              }`}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={
                  partner.fill
                    ? "h-full w-full scale-125 object-cover"
                    : "h-full w-full object-contain"
                }
              />
            </div>
            <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.16em] text-slate-300 sm:text-sm">
              {partner.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
