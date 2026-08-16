"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import type { CoverflowSlide } from "@/components/ui/coverflow-carousel";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

type VerticalCoverflowProps = {
  slides: CoverflowSlide[];
  label?: string;
  cardWidth?: string;
  rotate?: number;
  depth?: number;
  perspective?: number;
  falloff?: number;
  cardClassName?: string;
};

export function VerticalCoverflow({
  slides,
  label = "Cover carousel",
  cardWidth = "clamp(96px, 14vh, 148px)",
  rotate = 32,
  depth = 0.5,
  perspective = 3.2,
  falloff = 0.56,
  cardClassName,
}: VerticalCoverflowProps) {
  const count = slides.length;
  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const sizeRef = React.useRef(0);
  const frameSizeRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{
    id: number;
    y: number;
    pos: number;
    v: number;
    t: number;
  } | null>(null);
  const didDragRef = React.useRef(false);
  const [selected, setSelected] = React.useState(0);

  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  const pitchFor = React.useCallback(() => {
    const size = sizeRef.current;
    if (!size) return 0;
    const steps = Math.max(1, Math.floor(count / 2));
    const inset = 36;
    const span = Math.max(
      frameSizeRef.current,
      typeof window !== "undefined" ? window.innerHeight : 0,
    );
    const usable = span - size - inset * 2;
    const spreadPitch = usable / (2 * steps);
    // Keep a gap so cards never sit on top of each other.
    return Math.max(size * 1.2, spreadPitch);
  }, [count]);

  const paint = React.useCallback(() => {
    const size = sizeRef.current;
    if (!size) return;
    const pitch = pitchFor();
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 28) * Math.sign(offset);

      card.style.transform =
        `translateX(-50%) translateY(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * size * ramp}px) rotateX(${-tilt}deg)`;
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, falloff, pitchFor, rotate]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const nudge = React.useCallback(
    (by: number) => settle(Math.round(targetRef.current) + by),
    [settle],
  );

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    didDragRef.current = false;
    dragRef.current = {
      id: event.pointerId,
      y: event.clientY,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = pitchFor();
    if (!pitch) return;

    if (Math.abs(event.clientY - drag.y) > 8) {
      didDragRef.current = true;
    }

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = drag.pos - (event.clientY - drag.y) / pitch;
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(Math.round(posRef.current + carried));
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      sizeRef.current = card.offsetHeight || card.offsetWidth;
      frameSizeRef.current = Math.max(frame.clientHeight, window.innerHeight);
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return (
    <div
      className="h-full w-full"
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      aria-orientation="vertical"
    >
      <div
        ref={frameRef}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={(event) => {
          if (Math.abs(event.deltaY) < 8) return;
          nudge(event.deltaY > 0 ? 1 : -1);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp") {
            event.preventDefault();
            nudge(-1);
          } else if (event.key === "ArrowDown") {
            event.preventDefault();
            nudge(1);
          }
        }}
        className="relative h-full w-full cursor-grab outline-none ring-ring focus-visible:ring-2 active:cursor-grabbing"
        style={{
          perspective: `calc(var(--cf-card) * ${perspective})`,
          touchAction: "none",
        }}
      >
        <div
          className="relative mx-auto h-full"
          style={{
            width: "var(--cf-card)",
            transformStyle: "preserve-3d",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.href ?? index}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={slide.title ?? `${index + 1} of ${count}`}
              className={cn(
                "absolute left-1/2 top-1/2 aspect-square overflow-hidden rounded-2xl bg-black text-white shadow-none will-change-transform",
                cardClassName,
              )}
              style={{ width: "var(--cf-card)" }}
            >
              {slide.href ? (
                <Link
                  href={slide.href}
                  draggable={false}
                  onClick={(event) => {
                    if (didDragRef.current) event.preventDefault();
                  }}
                  className="relative block h-full w-full"
                >
                  <SlideMedia slide={slide} />
                </Link>
              ) : (
                <SlideMedia slide={slide} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideMedia({ slide }: { slide: CoverflowSlide }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black px-3">
      {slide.title ? (
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
          {slide.title}
        </p>
      ) : null}
    </div>
  );
}
