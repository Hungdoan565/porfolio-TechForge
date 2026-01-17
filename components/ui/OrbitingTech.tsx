"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechPopover, type TechInfo } from "./TechPopover";

// Import react-icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazonwebservices,
} from "react-icons/si";

// Extended TechItem with full info for popover
export interface TechItemFull extends TechInfo {
  orbit: 1 | 2 | 3;
}

interface OrbitingTechProps {
  technologies?: TechItemFull[];
  centerLogo?: React.ReactNode;
  className?: string;
}

// Default technologies with full info
const defaultTechnologies: TechItemFull[] = [
  // Orbit 1 - Core Frontend
  {
    name: "React",
    icon: <SiReact className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#61DAFB",
    orbit: 1,
    description:
      "Thu vien UI manh me voi component-based architecture, cho phep xay dung giao dien phuc tap mot cach de dang.",
    whyWeUse: [
      "Ecosystem lon nhat the gioi",
      "Virtual DOM toi uu hieu suat",
      "Tai su dung component de dang",
    ],
    stats: { projects: 45, yearsExp: 5 },
    link: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#000000",
    orbit: 1,
    description:
      "Framework React full-stack voi SSR, SSG va API routes. Giai phap hoan hao cho web hien dai.",
    whyWeUse: [
      "SEO tot voi Server-Side Rendering",
      "Performance tuyet voi voi Image Optimization",
      "Deploy de dang voi Vercel",
    ],
    stats: { projects: 35, yearsExp: 4 },
    link: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#3178C6",
    orbit: 1,
    description:
      "JavaScript voi static typing, giup phat hien loi som va tang trai nghiem developer.",
    whyWeUse: [
      "Type safety giam loi runtime",
      "IntelliSense va autocomplete manh",
      "Refactoring an toan va de dang",
    ],
    stats: { projects: 50, yearsExp: 5 },
    link: "https://www.typescriptlang.org",
  },

  // Orbit 2 - Backend & Styling
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#339933",
    orbit: 2,
    description:
      "Runtime JavaScript phia server, cho phep xay dung API va backend nhanh chong.",
    whyWeUse: [
      "Fullstack JavaScript thong nhat",
      "NPM ecosystem khong lo",
      "Non-blocking I/O hieu suat cao",
    ],
    stats: { projects: 40, yearsExp: 5 },
    link: "https://nodejs.org",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#06B6D4",
    orbit: 2,
    description:
      "Utility-first CSS framework giup styling nhanh chong va nhat quan tren toan du an.",
    whyWeUse: [
      "Phat trien UI nhanh gap 3 lan",
      "Bundle size nho voi PurgeCSS",
      "Responsive design de dang",
    ],
    stats: { projects: 40, yearsExp: 3 },
    link: "https://tailwindcss.com",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#2D3748",
    orbit: 2,
    description:
      "ORM the he moi voi type-safety tuyet doi va developer experience tuyet voi.",
    whyWeUse: [
      "Auto-generated types tu schema",
      "Migration de dang va an toan",
      "Query builder truc quan",
    ],
    stats: { projects: 25, yearsExp: 3 },
    link: "https://www.prisma.io",
  },

  // Orbit 3 - Database & DevOps
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#4169E1",
    orbit: 3,
    description:
      "Co so du lieu quan he manh me nhat, ho tro JSON, full-text search va nhieu tinh nang nang cao.",
    whyWeUse: [
      "ACID compliance dam bao data integrity",
      "Performance tuyet voi voi indexing",
      "Mo rong tot cho du an lon",
    ],
    stats: { projects: 30, yearsExp: 5 },
    link: "https://www.postgresql.org",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#47A248",
    orbit: 3,
    description:
      "NoSQL database linh hoat, phu hop cho du lieu phi cau truc va prototyping nhanh.",
    whyWeUse: [
      "Schema linh hoat cho MVP nhanh",
      "Horizontal scaling de dang",
      "Document model truc quan",
    ],
    stats: { projects: 20, yearsExp: 4 },
    link: "https://www.mongodb.com",
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#2496ED",
    orbit: 3,
    description:
      "Container platform dam bao ung dung chay nhat quan tren moi moi truong.",
    whyWeUse: [
      "Moi truong dong nhat dev/prod",
      "Deploy va scale de dang",
      "Isolation va bao mat tot",
    ],
    stats: { projects: 35, yearsExp: 4 },
    link: "https://www.docker.com",
  },
  {
    name: "AWS",
    icon: <SiAmazonwebservices className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#FF9900",
    orbit: 3,
    description:
      "Cloud platform hang dau voi day du dich vu tu compute, storage den AI/ML.",
    whyWeUse: [
      "Dich vu da dang va toan dien",
      "Scale tu 0 den hang trieu users",
      "Bao mat va compliance cao",
    ],
    stats: { projects: 25, yearsExp: 4 },
    link: "https://aws.amazon.com",
  },
];

export function OrbitingTech({
  technologies = defaultTechnologies,
  centerLogo,
  className,
}: OrbitingTechProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<TechItemFull | null>(null);
  const [popoverPosition, setPopoverPosition] = useState<"left" | "right">(
    "right",
  );

  // Group technologies by orbit
  const orbits = {
    1: {
      radius: 110,
      speed: 30,
      items: technologies.filter((t) => t.orbit === 1),
    },
    2: {
      radius: 175,
      speed: 40,
      items: technologies.filter((t) => t.orbit === 2),
    },
    3: {
      radius: 240,
      speed: 50,
      items: technologies.filter((t) => t.orbit === 3),
    },
  };

  // Calculate popover position based on tech position
  const handleTechHover = useCallback(
    (tech: TechItemFull, index: number, totalItems: number) => {
      const angle = (360 / totalItems) * index;
      // If tech is on the left side of the orbit, show popover on left
      setPopoverPosition(angle > 90 && angle < 270 ? "left" : "right");
      setHoveredTech(tech);
      setIsPaused(true);
    },
    [],
  );

  const handleTechLeave = useCallback(() => {
    setHoveredTech(null);
    setIsPaused(false);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full aspect-square max-w-[550px] mx-auto",
        className,
      )}
    >
      {/* Center logo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ scale: isPaused ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#0066FF] to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
          {centerLogo || (
            <span className="text-3xl md:text-4xl font-bold text-white">
              TF
            </span>
          )}
        </div>
      </motion.div>

      {/* Orbit rings */}
      {Object.entries(orbits).map(([orbitNum, config]) => (
        <motion.div
          key={orbitNum}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/30 dark:border-slate-700/40"
          style={{
            width: config.radius * 2,
            height: config.radius * 2,
          }}
          animate={{
            opacity: isPaused ? 0.5 : 1,
            borderColor: isPaused ? "rgba(0, 102, 255, 0.2)" : undefined,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}

      {/* Orbiting items */}
      {Object.entries(orbits).map(([, config]) =>
        config.items.map((tech, index) => {
          const angleOffset = (360 / config.items.length) * index;
          const isHovered = hoveredTech?.name === tech.name;
          const hasHoveredItem = hoveredTech !== null;

          return (
            <motion.div
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                width: config.radius * 2,
                height: config.radius * 2,
                marginLeft: -config.radius,
                marginTop: -config.radius,
              }}
              animate={{
                rotate: isPaused
                  ? angleOffset
                  : [angleOffset, angleOffset + 360],
              }}
              transition={{
                rotate: {
                  duration: config.speed,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <motion.div
                className={cn(
                  "absolute w-14 h-14 md:w-16 md:h-16 rounded-xl",
                  "bg-white dark:bg-slate-800 shadow-lg",
                  "flex items-center justify-center cursor-pointer",
                  "border-2 transition-colors duration-300",
                  isHovered
                    ? "border-current"
                    : "border-slate-100 dark:border-slate-700",
                )}
                style={{
                  left: config.radius - 28,
                  top: -32,
                  color: tech.color,
                  borderColor: isHovered ? tech.color : undefined,
                }}
                animate={{
                  rotate: isPaused
                    ? -angleOffset
                    : [-angleOffset, -angleOffset - 360],
                  scale: isHovered ? 1.25 : 1,
                  opacity: hasHoveredItem && !isHovered ? 0.4 : 1,
                  zIndex: isHovered ? 50 : 10,
                }}
                transition={{
                  rotate: {
                    duration: config.speed,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: { duration: 0.25, ease: "easeOut" },
                  opacity: { duration: 0.2 },
                }}
                onMouseEnter={() =>
                  handleTechHover(tech, index, config.items.length)
                }
                onMouseLeave={handleTechLeave}
                whileHover={{
                  boxShadow: `0 20px 40px -10px ${tech.color}50`,
                }}
              >
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.icon}
                </motion.div>

                {/* Glow ring on hover */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      boxShadow: `0 0 20px ${tech.color}40, inset 0 0 10px ${tech.color}20`,
                    }}
                  />
                )}

                {/* Popover */}
                <TechPopover
                  tech={tech}
                  isOpen={isHovered}
                  position={popoverPosition}
                />
              </motion.div>
            </motion.div>
          );
        }),
      )}

      {/* Center glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        animate={{
          backgroundColor: hoveredTech
            ? `${hoveredTech.color}30`
            : "rgba(59, 130, 246, 0.2)",
          scale: isPaused ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Instruction hint */}
      <motion.p
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: isPaused ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        Hover vao cong nghe de xem chi tiet
      </motion.p>
    </div>
  );
}

export default OrbitingTech;
