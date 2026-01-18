"use client";

import { useState, useRef, useEffect } from "react";

import { TechIcons, TechIconKey } from "./icons";

// Tech data with proper icon keys
const techData = {
  row1: [
    { name: "React", key: "react" as TechIconKey },
    { name: "Next.js", key: "nextjs" as TechIconKey },
    { name: "TypeScript", key: "typescript" as TechIconKey },
    { name: "Vue.js", key: "vue" as TechIconKey },
    { name: "Tailwind", key: "tailwind" as TechIconKey },
    { name: "Node.js", key: "nodejs" as TechIconKey },
  ],
  row2: [
    { name: "Python", key: "python" as TechIconKey },
    { name: "Java", key: "java" as TechIconKey },
    { name: "PostgreSQL", key: "postgresql" as TechIconKey },
    { name: "MongoDB", key: "mongodb" as TechIconKey },
    { name: "Docker", key: "docker" as TechIconKey },
    { name: "AWS", key: "aws" as TechIconKey },
  ],
  row3: [
    { name: "Git", key: "git" as TechIconKey },
    { name: "Figma", key: "figma" as TechIconKey },
    { name: "Vercel", key: "vercel" as TechIconKey },
    { name: "React", key: "react" as TechIconKey },
    { name: "Next.js", key: "nextjs" as TechIconKey },
    { name: "TypeScript", key: "typescript" as TechIconKey },
  ],
};

interface MarqueeRowProps {
  items: { name: string; key: TechIconKey }[];
  direction?: "left" | "right";
  duration?: number;
  isPaused: boolean;
  onHover: (paused: boolean) => void;
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 30,
  isPaused,
  onHover,
}: MarqueeRowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Duplicate items for seamless loop - only 2x needed for CSS animation
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => {
        onHover(false);
        setHoveredIndex(null);
      }}
    >
      <div
        className={`flex gap-6 md:gap-8 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <div
            key={`${tech.key}-${index}`}
            className={`flex-shrink-0 transition-transform duration-200 ease-out ${
              hoveredIndex === index ? "scale-110 -translate-y-1" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border shadow-sm transition-all duration-300 ${
                hoveredIndex === index
                  ? "shadow-lg shadow-indigo-500/20 border-indigo-500/30"
                  : "border-slate-200/50"
              }`}
            >
              {/* Icon with color - larger size */}
              <div
                className={`w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 ${
                  hoveredIndex === index ? "animate-wiggle" : ""
                }`}
              >
                {TechIcons[tech.key]}
              </div>
              <span className="text-sm md:text-base font-medium text-slate-700 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause animations when not visible
  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "100px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Also pause when tab is not visible
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const shouldAnimate = isVisible && isDocumentVisible && !isPaused;

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {/* Row 1 - Left direction */}
      <MarqueeRow
        direction="left"
        duration={35}
        isPaused={!shouldAnimate}
        items={techData.row1}
        onHover={setIsPaused}
      />

      {/* Row 2 - Right direction (staggered) */}
      <MarqueeRow
        direction="right"
        duration={40}
        isPaused={!shouldAnimate}
        items={techData.row2}
        onHover={setIsPaused}
      />

      {/* Row 3 - Left direction */}
      <MarqueeRow
        direction="left"
        duration={32}
        isPaused={!shouldAnimate}
        items={techData.row3}
        onHover={setIsPaused}
      />
    </div>
  );
}
