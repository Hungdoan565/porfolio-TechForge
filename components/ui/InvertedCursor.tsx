"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface InvertedCursorProps {
  dotSize?: number;
  ringSize?: number;
  smoothness?: number;
}

export function InvertedCursor({
  dotSize = 8,
  ringSize = 40,
  smoothness = 0.12,
}: InvertedCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -ringSize, y: -ringSize });
  const currentPos = useRef({ x: -ringSize, y: -ringSize });
  const [isMounted, setIsMounted] = useState(false);

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      currentPos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      const targetX = currentPos.current.x - ringSize / 2;
      const targetY = currentPos.current.y - ringSize / 2;

      const deltaX = (targetX - previousPos.current.x) * smoothness;
      const deltaY = (targetY - previousPos.current.y) * smoothness;

      const newX = previousPos.current.x + deltaX;
      const newY = previousPos.current.y + deltaY;

      previousPos.current = { x: newX, y: newY };

      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate3d(${newX + (ringSize - dotSize) / 2}px, ${newY + (ringSize - dotSize) / 2}px, 0)`;
        ringRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = "auto";
    };
  }, [isMounted, dotSize, ringSize, smoothness]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="absolute rounded-full border border-slate-400/40 dark:border-white/30 bg-slate-100/10 dark:bg-white/5 backdrop-blur-[1px] transition-colors duration-300"
        style={{
          width: ringSize,
          height: ringSize,
          opacity: 1,
          willChange: "transform",
          transform: `translate3d(${-ringSize}px, ${-ringSize}px, 0)`,
        }}
      />
      {/* Inner dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="absolute rounded-full bg-slate-800 dark:bg-white shadow-sm transition-colors duration-300"
        style={{
          width: dotSize,
          height: dotSize,
          opacity: 1,
          willChange: "transform",
          transform: `translate3d(${-ringSize}px, ${-ringSize}px, 0)`,
        }}
      />
    </div>
  );
}

export default InvertedCursor;
