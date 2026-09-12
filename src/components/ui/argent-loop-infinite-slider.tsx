"use client";

import * as React from "react";

export interface SliderItemData {
  id?: string;
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
  status?: "available" | "coming-soon";
  ctaLabel?: string;
  href?: string;
}

const CONFIG = {
  LERP_FACTOR: 0.08,
  BUFFER_SIZE: 2,
};

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

interface ArgentLoopInfiniteSliderProps {
  items: SliderItemData[];
  scrollTrackRef: React.RefObject<HTMLElement | null>;
  onDeepDive?: (item: SliderItemData) => void;
}

export function ArgentLoopInfiniteSlider({
  items,
  scrollTrackRef,
  onDeepDive,
}: ArgentLoopInfiniteSliderProps) {
  const count = items.length;

  const [visibleRange, setVisibleRange] = React.useState({
    min: 0,
    max: Math.min(CONFIG.BUFFER_SIZE, count - 1),
  });

  const containerRef = React.useRef<HTMLDivElement>(null);
  const requestRef = React.useRef<number | undefined>(undefined);
  const renderedRange = React.useRef(visibleRange);

  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    projectHeight: 0,
    minimapHeight: 300,
  });

  const projectsRef = React.useRef<Map<number, HTMLElement>>(new Map());
  const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());

  const getCurrentIndex = () => {
    const { targetY, projectHeight } = state.current;
    if (projectHeight <= 0) return 0;
    return clamp(Math.round(-targetY / projectHeight), 0, count - 1);
  };

  const syncMinimapMetrics = () => {
    const preview = containerRef.current?.querySelector(
      ".minimap-img-preview"
    ) as HTMLElement | null;
    if (preview) {
      state.current.minimapHeight = preview.offsetHeight;
    }
  };

  const syncFromScroll = React.useCallback(() => {
    if (!scrollTrackRef?.current) return;
    const track = scrollTrackRef.current;
    if (!track || count <= 1) return;

    const viewport = window.innerHeight;
    const maxScroll = track.offsetHeight - viewport;
    if (maxScroll <= 0) return;

    const scrolled = clamp(-track.getBoundingClientRect().top, 0, maxScroll);
    const progress = scrolled / maxScroll;

    state.current.projectHeight = viewport;
    state.current.targetY = -progress * (count - 1) * viewport;
    syncMinimapMetrics();
  }, [count, scrollTrackRef]);

  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number
  ) => {
    if (!img || height <= 0) return;

    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }

    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);

    if (Math.abs(current - target) > 0.01) {
      img.style.transform = `translateY(${current}px) scale(1.5)`;
      img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updatePositions = () => {
    const s = state.current;
    if (s.projectHeight <= 0) return;

    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      updateParallax(img, s.currentY, index, s.projectHeight);
    });

    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      if (img) {
        updateParallax(img, minimapY, index, s.minimapHeight);
      }
    });

    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  const animate = () => {
    const s = state.current;
    s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    updatePositions();

    const currentIndex = getCurrentIndex();
    const min = Math.max(0, currentIndex - CONFIG.BUFFER_SIZE);
    const max = Math.min(count - 1, currentIndex + CONFIG.BUFFER_SIZE);

    if (
      min !== renderedRange.current.min ||
      max !== renderedRange.current.max
    ) {
      renderedRange.current = { min, max };
      setVisibleRange({ min, max });
    }
  };

  React.useEffect(() => {
    if (count === 0) return;

    const onScroll = () => syncFromScroll();
    const onResize = () => syncFromScroll();

    syncFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    requestRef.current = requestAnimationFrame(function loop() {
      animate();
      requestRef.current = requestAnimationFrame(loop);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [count, syncFromScroll]);

  const indices: number[] = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div ref={containerRef} className="parallax-container">
      <ul className="project-list">
        {indices.map((i) => {
          const data = items[i];
          return (
            <li
              key={data.id ?? `${data.title}-${i}`}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} />
            </li>
          );
        })}
      </ul>

      <div className="minimap">
        <div className="minimap-wrapper">
          <div className="minimap-img-preview" aria-hidden>
            {indices.map((i) => {
              const data = items[i];
              return (
                <div
                  key={`thumb-${data.id ?? i}`}
                  className="minimap-img-item"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <img src={data.image} alt="" />
                </div>
              );
            })}
          </div>
          <div className="minimap-info-list">
            {indices.map((i) => {
              const data = items[i];
              return (
                <div
                  key={`info-${data.id ?? i}`}
                  className="minimap-item-info"
                  ref={(el) => {
                    if (el) infoRef.current.set(i, el);
                    else infoRef.current.delete(i);
                  }}
                >
                  <div className="minimap-item-info-left">
                    <p className="minimap-service-title">{data.title}</p>
                  </div>
                  <div className="minimap-item-info-right">
                    <p className="minimap-service-desc">{data.description}</p>
                    <button
                      type="button"
                      className="minimap-deep-dive"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeepDive?.(data);
                      }}
                    >
                      {data.ctaLabel ?? "Deep Dive"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Component() {
  const trackRef = React.useRef<HTMLElement>(null);
  const demoItems: SliderItemData[] = [
    {
      title: "Website Design & Development",
      image: "/services/web-design.png",
      category: "Web Studio",
      year: "2025",
      description: "Fast, polished sites built to convert",
    },
  ];

  return (
    <section ref={trackRef} style={{ height: "100svh" }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <ArgentLoopInfiniteSlider items={demoItems} scrollTrackRef={trackRef} />
      </div>
    </section>
  );
}
