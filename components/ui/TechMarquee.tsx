"use client";

import { motion } from "motion/react";
import { useState } from "react";

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
  speed?: number;
  isPaused: boolean;
  onHover: (paused: boolean) => void;
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
  isPaused,
  onHover,
}: MarqueeRowProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => {
        onHover(false);
        setHoveredIndex(null);
      }}
    >
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        className="flex gap-6 md:gap-8"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <motion.div
            key={`${tech.key}-${index}`}
            animate={{
              scale: hoveredIndex === index ? 1.15 : 1,
              y: hoveredIndex === index ? -5 : 0,
            }}
            className="flex-shrink-0"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/50 shadow-sm transition-all duration-300"
              whileHover={{
                boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.3)",
                borderColor: "rgba(99, 102, 241, 0.3)",
              }}
            >
              {/* Icon with color - larger size */}
              <motion.div
                animate={{
                  rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                }}
                className="w-8 h-8 md:w-10 md:h-10"
                transition={{ duration: 0.5 }}
              >
                {TechIcons[tech.key]}
              </motion.div>
              <span className="text-sm md:text-base font-medium text-slate-700 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      {/* Row 1 - Left direction */}
      <MarqueeRow
        direction="left"
        isPaused={isPaused}
        items={techData.row1}
        speed={35}
        onHover={setIsPaused}
      />

      {/* Row 2 - Right direction (staggered) */}
      <MarqueeRow
        direction="right"
        isPaused={isPaused}
        items={techData.row2}
        speed={40}
        onHover={setIsPaused}
      />

      {/* Row 3 - Left direction */}
      <MarqueeRow
        direction="left"
        isPaused={isPaused}
        items={techData.row3}
        speed={32}
        onHover={setIsPaused}
      />
    </div>
  );
}
