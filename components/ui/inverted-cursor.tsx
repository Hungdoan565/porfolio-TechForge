"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface InvertedCursorProps {
  size?: number;
  smoothness?: number;
  hideNativeCursor?: boolean;
}

export function InvertedCursor({
  size = 40,
  smoothness = 0.15,
  hideNativeCursor = true,
}: InvertedCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -size, y: -size });
  const currentPos = useRef({ x: -size, y: -size });

  const [visible, setVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      currentPos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    if (hideNativeCursor) {
      document.body.style.cursor = "none";
    }

    const animate = () => {
      if (!cursorRef.current) {
        requestRef.current = requestAnimationFrame(animate);

        return;
      }

      const targetX = currentPos.current.x - size / 2;
      const targetY = currentPos.current.y - size / 2;

      const deltaX = (targetX - previousPos.current.x) * smoothness;
      const deltaY = (targetY - previousPos.current.y) * smoothness;

      const newX = previousPos.current.x + deltaX;
      const newY = previousPos.current.y + deltaY;

      previousPos.current = { x: newX, y: newY };

      cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (hideNativeCursor) document.body.style.cursor = "auto";
    };
  }, [size, smoothness, hideNativeCursor, visible]);

  if (typeof window === "undefined") return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white transition-opacity duration-300"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        willChange: "transform",
      }}
    />
  );
}

export default InvertedCursor;
