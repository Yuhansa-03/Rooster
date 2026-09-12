"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-[#05070d] px-4 py-3 font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-300 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:text-white";

const SERVICES = [
  "Website Design & Development",
  "Marketing",
  "AI Chatbots",
  "Digital Products",
  "Other",
] as const;

const FOOTER_LEFT = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs & Resources", href: "/blogs" },
  { label: "Careers", href: "/careers" },
] as const;

const FOOTER_RIGHT = [
  { label: "Website Development & Design", href: "/services/web-design" },
  { label: "Rooster Marketing", href: "/services/marketing" },
  { label: "AI Chatbots", href: "/services/ai-chatbots" },
  { label: "Digital Products", href: "/services/digital-products" },
] as const;

const CONTACT_EMAIL = "roosterwebdev@gmail.com";

function FooterForm({
  sent,
  onSubmit,
}: {
  sent: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  const [service, setService] = useState("");

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
        setService("");
      }}
      className="w-full space-y-4 rounded-2xl border border-white/15 bg-[#05070d] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.16em] text-slate-400">
            Name
          </span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block space-y-2">
          <span className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.16em] text-slate-400">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@brand.com"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.16em] text-slate-400">
          Service
        </span>
        <select
          name="service"
          required
          value={service}
          onChange={(event) => setService(event.target.value)}
          className={`${fieldClass} [color-scheme:dark] ${
            service ? "text-white" : "text-slate-500"
          }`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="block space-y-2">
        <span className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.16em] text-slate-400">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you building?"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          className="rounded-full border-2 border-sky-400 bg-sky-950 px-7 py-2.5 font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-white transition hover:bg-blue-600"
        >
          Send message
        </button>
        {sent ? (
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-sky-300">
            Opening your mail app…
          </p>
        ) : null}
      </div>
    </form>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-slate-200 transition hover:text-white"
    >
      {label}
    </a>
  );
}

function FooterCopy() {
  return (
    <div className="flex w-full flex-col justify-center lg:pl-4">
      <h2 className="font-[family-name:var(--font-orbitron)] text-lg uppercase tracking-[0.1em] text-white sm:text-3xl sm:leading-tight sm:tracking-[0.12em]">
        Ready to bring your business to life?
      </h2>
      <p className="mt-4 font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.16em] text-sky-300 sm:text-lg">
        Let&apos;s give it a digital home
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-6 inline-block font-[family-name:var(--font-sans)] text-sm tracking-[-0.02em] text-sky-100 transition hover:text-white"
      >
        {CONTACT_EMAIL}
      </a>

      <nav
        aria-label="Footer"
        className="mt-10 grid gap-8 sm:grid-cols-2"
      >
        <ul className="space-y-2.5">
          {FOOTER_LEFT.map((link) => (
            <li key={link.href}>
              <FooterLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
        <ul className="space-y-2.5">
          {FOOTER_RIGHT.map((link) => (
            <li key={link.href}>
              <FooterLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function SiteFooter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Rooster inquiry from ${name || "website"}${service ? ` — ${service}` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <footer
      id="contact"
      className="relative z-0 mt-10 overflow-hidden rounded-t-[1.75rem] border-t border-sky-300/30 bg-gradient-to-b from-[#4aa3e6] via-[#123a73] to-[#05070d] text-white shadow-[0_-18px_50px_rgba(0,0,0,0.45)] sm:rounded-t-[2.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(125,211,252,0.22)_0%,transparent_38%,rgba(0,0,0,0.35)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-4 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-16">
        <FooterForm sent={sent} onSubmit={onSubmit} />
        <FooterCopy />
      </div>

      <div className="relative z-10 border-t border-white/10 px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-10">
        <p className="mx-auto w-full max-w-6xl font-[family-name:var(--font-sans)] text-xs tracking-[-0.02em] text-white/60">
          © {new Date().getFullYear()} Rooster. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
