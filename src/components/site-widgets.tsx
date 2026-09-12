"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, X } from "lucide-react";

import {
  QUICK_PROMPTS,
  answerAsRooster,
} from "@/lib/rooster-knowledge";
import { SITE_LINKS } from "@/lib/site-links";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
      <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
      <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8.2 1.8H7.8A3 3 0 0 0 4.8 7.8v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3ZM12 8.1A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1Zm0 1.6A2.3 2.3 0 1 0 14.3 12 2.3 2.3 0 0 0 12 9.7Zm4.6-2.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-white" aria-hidden>
      <path d="M12.04 3.1A8.7 8.7 0 0 0 4.4 16.4L3.1 21l4.7-1.23a8.7 8.7 0 1 0 4.24-16.67Zm5.1 12.4c-.22.62-1.28 1.14-1.78 1.2-.46.07-1.03.1-1.67-.1a13.6 13.6 0 0 1-2.1-.78 10.6 10.6 0 0 1-3.9-3.38 5.1 5.1 0 0 1-1.07-2.7c0-1.53.8-2.28 1.1-2.58.3-.3.64-.38.86-.38h.62c.2 0 .46 0 .7.54.26.58.86 2.08.94 2.23.08.16.12.34 0 .54-.1.2-.16.32-.32.5l-.46.55c-.16.16-.32.34-.14.66a7.4 7.4 0 0 0 1.36 1.7 8.4 8.4 0 0 0 2 1.36c.32.16.5.14.7-.08l.54-.64c.18-.22.4-.18.66-.1.26.08 1.66.78 1.94.92.28.14.46.22.54.34.08.14.08.78-.14 1.4Z" />
    </svg>
  );
}

const socialBtn =
  "flex size-9 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:scale-105 sm:size-11";

const iconBtn =
  "flex size-10 items-center justify-center rounded-full border border-sky-400/40 bg-[#07111f] text-sky-300 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-sky-400 hover:bg-sky-600 hover:text-white sm:size-11";

export function SiteWidgets() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hey — I'm Lea. Ask me about our services, process, pricing, or how we work.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);

      const services = document.getElementById("services");
      const pastServices = services
        ? services.getBoundingClientRect().bottom < 120
        : window.scrollY > window.innerHeight * 1.15;
      setShowNudge(pastServices);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  useEffect(() => {
    const onOpen = (event: Event) => {
      const question = (event as CustomEvent<{ question?: string }>).detail
        ?.question;
      setOpen(true);
      setNudgeDismissed(true);
      if (!question) return;
      const text = question.trim();
      setMessages((current) => {
        const recent = current
          .filter((message) => message.role === "user")
          .map((message) => message.text);
        return [
          ...current,
          { role: "user", text },
          { role: "bot", text: answerAsRooster(text, recent) },
        ];
      });
      setInput("");
    };

    window.addEventListener("open-lea", onOpen);
    return () => window.removeEventListener("open-lea", onOpen);
  }, []);

  const ask = (question: string) => {
    const text = question.trim();
    if (!text) return;
    setMessages((current) => {
      const recent = current
        .filter((message) => message.role === "user")
        .map((message) => message.text);
      return [
        ...current,
        { role: "user", text },
        { role: "bot", text: answerAsRooster(text, recent) },
      ];
    });
    setInput("");
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <>
      <div className="fixed top-[58%] right-2 z-[90] flex -translate-y-1/2 flex-col gap-2 sm:top-1/2 sm:right-5 sm:gap-3">
        <a
          href={SITE_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBtn} bg-[#25D366]`}
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={SITE_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBtn} bg-[#1877F2]`}
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        <a
          href={SITE_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialBtn} bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]`}
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </div>

      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`${iconBtn} fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-3 z-[90] sm:left-5`}
            aria-label="Go to top"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed right-2 bottom-[4.85rem] left-2 z-[95] flex h-[min(24rem,calc(100dvh-7.25rem))] flex-col overflow-hidden rounded-2xl border border-sky-400/30 bg-[#07111f] shadow-2xl sm:right-5 sm:bottom-24 sm:left-auto sm:h-[min(28rem,calc(100dvh-8.5rem))] sm:w-[min(22rem,calc(100vw-1.25rem))]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-sky-950/60 px-4 py-3">
              <div>
                <p className="font-[family-name:var(--font-orbitron)] text-xs uppercase tracking-[0.18em] text-sky-300">
                  Lea
                </p>
                <p className="font-[family-name:var(--font-sans)] text-xs text-slate-400">
                  Rooster FAQ assistant
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 p-1.5 text-white transition hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="size-4" />
              </button>
            </div>

            <div
              ref={listRef}
              className="hide-scrollbar min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-3"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-6 tracking-[-0.02em] break-words whitespace-pre-line ${
                    message.role === "user"
                      ? "ml-auto bg-sky-600 text-white"
                      : "bg-white/5 text-slate-200"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => ask(prompt)}
                    className="max-w-full rounded-full border border-white/15 px-2.5 py-1 text-left font-[family-name:var(--font-sans)] text-[11px] text-slate-300 transition hover:border-sky-400 hover:text-white"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Lea…"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-black/40 px-3 py-2 font-[family-name:var(--font-sans)] text-sm text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
              />
              <button
                type="submit"
                className="rounded-full border-2 border-sky-400 bg-sky-950 px-3 py-2 font-[family-name:var(--font-sans)] text-xs text-white transition hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showNudge && !open && !nudgeDismissed ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            onClick={() => {
              setOpen(true);
              setNudgeDismissed(true);
            }}
            className="fixed right-3 bottom-[5.25rem] z-[91] max-w-[min(16rem,calc(100vw-4.5rem))] rounded-2xl rounded-br-sm border border-sky-400/50 bg-[#0b1528] px-3.5 py-2.5 text-left shadow-[0_0_24px_rgba(56,189,248,0.25)] sm:right-5 sm:bottom-[5.5rem]"
            aria-label="Open Lea chat"
          >
            <p className="font-[family-name:var(--font-orbitron)] text-[10px] uppercase tracking-[0.16em] text-sky-400">
              Lea
            </p>
            <p className="mt-1 font-[family-name:var(--font-sans)] text-sm leading-5 tracking-[-0.02em] text-white">
              Hey, how can I help you?
            </p>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          setNudgeDismissed(true);
        }}
        className="fixed right-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[90] size-11 overflow-hidden rounded-full border-2 border-sky-400 bg-black shadow-[0_0_0_3px_rgba(56,189,248,0.28),0_0_22px_rgba(56,189,248,0.85)] transition hover:scale-105 sm:right-5 sm:size-12"
        aria-label={open ? "Close Lea chat" : "Open Lea chat"}
      >
        <img
          src="/brand/rooster-chat.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {open ? (
          <span className="absolute inset-0 flex items-center justify-center bg-black/55">
            <X className="size-5 text-white" />
          </span>
        ) : null}
      </button>
    </>
  );
}
