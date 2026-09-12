"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Frame {
  id: number;
  label: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  mediaSize: number;
  isHovered: boolean;
}

interface FrameComponentProps {
  label: string;
  width: number | string;
  height: number | string;
  className?: string;
  mediaSize: number;
}

function FrameComponent({
  label,
  width,
  height,
  className = "",
  mediaSize,
}: FrameComponentProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative h-full w-full overflow-hidden border border-white/25 bg-black">
        <div
          className="absolute inset-0 flex items-center justify-center px-4"
          style={{
            transform: `scale(${mediaSize})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <p className="text-center font-[family-name:var(--font-sans)] text-sm italic tracking-[-0.02em] text-white sm:text-base md:text-lg">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

interface DynamicFrameLayoutProps {
  frames: Frame[];
  className?: string;
  hoverSize?: number;
  gapSize?: number;
}

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  hoverSize = 6,
  gapSize = 4,
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames);
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null,
  );

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr";
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr";
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom";
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={`relative h-full w-full ${className ?? ""}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition:
          "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(
          frame.defaultPos.x,
          frame.defaultPos.y,
        );

        return (
          <motion.div
            key={frame.id}
            className="relative"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              label={frame.label}
              width="100%"
              height="100%"
              className="absolute inset-0"
              mediaSize={frame.mediaSize}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
