"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Rooster enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@rooster.studio?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-xl flex-col gap-4">
      <label className="flex flex-col gap-2 text-sm text-slate-200">
        Name
        <input
          required
          name="name"
          type="text"
          className="h-10 rounded-lg border-2 border-sky-400 bg-black px-3 text-white outline-none focus:ring-2 focus:ring-sky-400/60"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-slate-200">
        Email
        <input
          required
          name="email"
          type="email"
          className="h-10 rounded-lg border-2 border-sky-400 bg-black px-3 text-white outline-none focus:ring-2 focus:ring-sky-400/60"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-slate-200">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-lg border-2 border-sky-400 bg-black px-3 py-2 text-white outline-none focus:ring-2 focus:ring-sky-400/60"
        />
      </label>
      <Button
        type="submit"
        size="lg"
        className="mt-2 w-fit border-2 border-sky-400 bg-blue-600 text-white hover:bg-blue-500"
      >
        Send message
      </Button>
      {sent ? (
        <p className="text-sm text-sky-300">Your email app should open with the message ready to send.</p>
      ) : null}
    </form>
  );
}
