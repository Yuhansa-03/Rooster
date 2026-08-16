"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import { cn } from "@/lib/utils";

const CLIPS = ["/vid/hero-1.mp4", "/vid/hero-2.mp4"];

export function HeroVideo() {
  const [active, setActive] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const current = videoRefs.current[active];
    const upcoming = videoRefs.current[(active + 1) % CLIPS.length];
    if (!current) return;

    current.currentTime = 0;
    current.muted = !soundOn;
    current.volume = 1;

    const tryPlay = () => {
      void current.play().catch(() => {
        current.muted = true;
        void current.play().catch(() => {});
      });
    };

    tryPlay();

    if (upcoming) {
      upcoming.pause();
      upcoming.muted = true;
      upcoming.currentTime = 0;
    }
  }, [active, soundOn]);

  useEffect(() => {
    if (!soundOn) return;

    const unlock = () => {
      const current = videoRefs.current[active];
      if (!current) return;
      current.muted = false;
      current.volume = 1;
      void current.play().catch(() => {});
    };

    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, [active, soundOn]);

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

      <button
        type="button"
        aria-label={soundOn ? "Mute hero video" : "Unmute hero video"}
        onClick={() => setSoundOn((value) => !value)}
        className="absolute bottom-6 left-6 z-40 rounded-full border-2 border-sky-400 bg-black/70 p-2 text-white transition hover:bg-sky-950"
      >
        {soundOn ? <Volume2 className="size-5" /> : <VolumeX className="size-5" />}
      </button>
    </>
  );
}
