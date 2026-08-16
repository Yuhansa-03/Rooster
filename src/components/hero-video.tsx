"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const CLIPS = ["/vid/hero-1.mp4", "/vid/hero-2.mp4"];

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const current = videoRefs.current[active];
    const upcoming = videoRefs.current[(active + 1) % CLIPS.length];
    if (!current) return;

    current.currentTime = 0;
    void current.play().catch(() => {});
    if (upcoming) {
      upcoming.pause();
      upcoming.currentTime = 0;
    }
  }, [active]);

  return (
    <>
      {CLIPS.map((src, index) => (
        <video
          key={src}
          ref={(node) => {
            videoRefs.current[index] = node;
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            index === active ? "opacity-100" : "opacity-0",
          )}
          muted
          playsInline
          preload="auto"
          autoPlay={index === 0}
          onEnded={() => {
            if (index === active) {
              setActive((index + 1) % CLIPS.length);
            }
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
