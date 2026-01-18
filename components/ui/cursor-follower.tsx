"use client";

import { useState, useEffect, useRef } from "react";

export function CursorFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });

  // Refs for DOM elements - avoid re-renders
  const dotRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    let isVisibleLocal = false;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleLocal) {
        isVisibleLocal = true;
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [tabindex]:not([tabindex='-1'])",
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    let animationId: number;

    const animate = () => {
      // Lerp positions
      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS,
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS,
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS,
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS,
      );

      // Direct DOM manipulation instead of setState - MAJOR PERF IMPROVEMENT
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(-50%, -50%) translate3d(${dotPosition.current.x}px, ${dotPosition.current.y}px, 0)`;
      }
      if (borderRef.current) {
        borderRef.current.style.transform = `translate(-50%, -50%) translate3d(${borderDotPosition.current.x}px, ${borderDotPosition.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);
    };
  }, []); // Remove isVisible dependency - use local variable instead

  if (typeof window === "undefined" || !isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    >
      {/* Inner dot - use will-change for GPU acceleration */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full bg-indigo-600 will-change-transform"
        style={{
          width: "8px",
          height: "8px",
        }}
      />

      {/* Outer ring */}
      <div
        ref={borderRef}
        className="absolute left-0 top-0 rounded-full border-2 border-indigo-500/50 will-change-transform"
        style={{
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          transition:
            "width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out",
          background: isHovering ? "rgba(99, 102, 241, 0.1)" : "transparent",
        }}
      />
    </div>
  );
}

export default CursorFollower;
