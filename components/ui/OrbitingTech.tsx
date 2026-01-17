"use client";

import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechPopover, type TechInfo } from "./TechPopover";

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

export interface TechItemFull extends TechInfo {
  orbit: 1 | 2 | 3;
}

interface OrbitingTechProps {
  technologies?: TechItemFull[];
  centerLogo?: React.ReactNode;
  className?: string;
}

const defaultTechnologies: TechItemFull[] = [
  {
    name: "React",
    icon: <SiReact className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#61DAFB",
    orbit: 1,
    description:
      "Thư viện UI mạnh mẽ với component-based architecture, cho phép xây dựng giao diện phức tạp một cách dễ dàng.",
    whyWeUse: [
      "Ecosystem lớn nhất thế giới",
      "Virtual DOM tối ưu hiệu suất",
      "Tái sử dụng component dễ dàng",
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
      "Framework React full-stack với SSR, SSG và API routes. Giải pháp hoàn hảo cho web hiện đại.",
    whyWeUse: [
      "SEO tốt với Server-Side Rendering",
      "Performance tuyệt vời với Image Optimization",
      "Deploy dễ dàng với Vercel",
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
      "JavaScript với static typing, giúp phát hiện lỗi sớm và tăng trải nghiệm developer.",
    whyWeUse: [
      "Type safety giảm lỗi runtime",
      "IntelliSense và autocomplete mạnh",
      "Refactoring an toàn và dễ dàng",
    ],
    stats: { projects: 50, yearsExp: 5 },
    link: "https://www.typescriptlang.org",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#339933",
    orbit: 2,
    description:
      "Runtime JavaScript phía server, cho phép xây dựng API và backend nhanh chóng.",
    whyWeUse: [
      "Fullstack JavaScript thống nhất",
      "NPM ecosystem khổng lồ",
      "Non-blocking I/O hiệu suất cao",
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
      "Utility-first CSS framework giúp styling nhanh chóng và nhất quán trên toàn dự án.",
    whyWeUse: [
      "Phát triển UI nhanh gấp 3 lần",
      "Bundle size nhỏ với PurgeCSS",
      "Responsive design dễ dàng",
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
      "ORM thế hệ mới với type-safety tuyệt đối và developer experience tuyệt vời.",
    whyWeUse: [
      "Auto-generated types từ schema",
      "Migration dễ dàng và an toàn",
      "Query builder trực quan",
    ],
    stats: { projects: 25, yearsExp: 3 },
    link: "https://www.prisma.io",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-6 h-6 md:w-7 md:h-7" />,
    color: "#4169E1",
    orbit: 3,
    description:
      "Cơ sở dữ liệu quan hệ mạnh mẽ nhất, hỗ trợ JSON, full-text search và nhiều tính năng nâng cao.",
    whyWeUse: [
      "ACID compliance đảm bảo data integrity",
      "Performance tuyệt vời với indexing",
      "Mở rộng tốt cho dự án lớn",
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
      "NoSQL database linh hoạt, phù hợp cho dữ liệu phi cấu trúc và prototyping nhanh.",
    whyWeUse: [
      "Schema linh hoạt cho MVP nhanh",
      "Horizontal scaling dễ dàng",
      "Document model trực quan",
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
      "Container platform đảm bảo ứng dụng chạy nhất quán trên mọi môi trường.",
    whyWeUse: [
      "Môi trường đồng nhất dev/prod",
      "Deploy và scale dễ dàng",
      "Isolation và bảo mật tốt",
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
      "Cloud platform hàng đầu với đầy đủ dịch vụ từ compute, storage đến AI/ML.",
    whyWeUse: [
      "Dịch vụ đa dạng và toàn diện",
      "Scale từ 0 đến hàng triệu users",
      "Bảo mật và compliance cao",
    ],
    stats: { projects: 25, yearsExp: 4 },
    link: "https://aws.amazon.com",
  },
];

const POPOVER_WIDTH = 320;
const POPOVER_HEIGHT = 280;
const LOGO_SIZE = 96;
const LOGO_MARGIN = 60;

const orbitStyles = `
  @keyframes orbitRotate1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes orbitRotate2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes orbitRotate3 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes counterRotate1 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes counterRotate2 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes counterRotate3 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  
  .orbit-ring-1 { animation: orbitRotate1 30s linear infinite; }
  .orbit-ring-2 { animation: orbitRotate2 40s linear infinite; }
  .orbit-ring-3 { animation: orbitRotate3 50s linear infinite; }
  .counter-rotate-1 { animation: counterRotate1 30s linear infinite; transform-origin: center; }
  .counter-rotate-2 { animation: counterRotate2 40s linear infinite; transform-origin: center; }
  .counter-rotate-3 { animation: counterRotate3 50s linear infinite; transform-origin: center; }
  
  .orbit-paused { animation-play-state: paused !important; }
`;

type PopoverPosition = "left" | "right" | "top" | "bottom";

function calculateSmartPosition(
  iconX: number,
  iconY: number,
  containerWidth: number,
  containerHeight: number,
  popoverWidth: number,
  popoverHeight: number,
): { x: number; y: number; position: PopoverPosition } {
  const ICON_SIZE = 56;
  const GAP = 12;

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  const iconCenterX = iconX + ICON_SIZE / 2;
  const iconCenterY = iconY + ICON_SIZE / 2;

  const iconAngle = Math.atan2(iconCenterY - centerY, iconCenterX - centerX);
  const iconAngleDeg = ((iconAngle * 180) / Math.PI + 360) % 360;

  const priorityOrder: {
    pos: PopoverPosition;
    minAngle: number;
    maxAngle: number;
  }[] = [
    { pos: "right", minAngle: 315, maxAngle: 45 },
    { pos: "bottom", minAngle: 45, maxAngle: 135 },
    { pos: "left", minAngle: 135, maxAngle: 225 },
    { pos: "top", minAngle: 225, maxAngle: 315 },
  ];

  for (const { pos, minAngle, maxAngle } of priorityOrder) {
    let x = 0,
      y = 0;
    let fitsInBounds = false;
    let avoidLogo = false;

    if (pos === "right") {
      x = iconX + ICON_SIZE + GAP;
      y = iconY;
      fitsInBounds =
        x + popoverWidth <= containerWidth - 10 &&
        y + popoverHeight <= containerHeight - 10;
      avoidLogo = iconAngleDeg > 45 && iconAngleDeg < 135;
    } else if (pos === "left") {
      x = iconX - popoverWidth - GAP;
      y = iconY;
      fitsInBounds = x >= 10 && y + popoverHeight <= containerHeight - 10;
      avoidLogo = iconAngleDeg > 135 && iconAngleDeg < 225;
    } else if (pos === "top") {
      x = iconX;
      y = iconY - popoverHeight - GAP;
      fitsInBounds = x + popoverWidth <= containerWidth - 10 && y >= 10;
      avoidLogo = iconAngleDeg > 225 && iconAngleDeg < 315;
    } else {
      x = iconX;
      y = iconY + ICON_SIZE + GAP;
      fitsInBounds =
        x + popoverWidth <= containerWidth - 10 &&
        y + popoverHeight <= containerHeight - 10;
      avoidLogo = iconAngleDeg > 45 && iconAngleDeg < 135;
    }

    if (fitsInBounds && !avoidLogo) {
      return { x, y, position: pos };
    }
  }

  return { x: iconX + ICON_SIZE + GAP, y: iconY, position: "right" };
}

export function OrbitingTech({
  technologies = defaultTechnologies,
  centerLogo,
  className,
}: OrbitingTechProps) {
  const [hoveredTech, setHoveredTech] = useState<TechItemFull | null>(null);
  const [popoverData, setPopoverData] = useState<{
    x: number;
    y: number;
    position: PopoverPosition;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const orbits = useMemo(
    () => ({
      1: { radius: 110, items: technologies.filter((t) => t.orbit === 1) },
      2: { radius: 175, items: technologies.filter((t) => t.orbit === 2) },
      3: { radius: 240, items: technologies.filter((t) => t.orbit === 3) },
    }),
    [technologies],
  );

  const handleTechHover = useCallback(
    (tech: TechItemFull, e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (containerRect) {
        const iconX = rect.left - containerRect.left;
        const iconY = rect.top - containerRect.top;

        const positionData = calculateSmartPosition(
          iconX,
          iconY,
          containerRect.width,
          containerRect.height,
          POPOVER_WIDTH,
          POPOVER_HEIGHT,
        );

        setPopoverData({
          x: positionData.x,
          y: positionData.y,
          position: positionData.position,
        });
      }

      setHoveredTech(tech);
    },
    [],
  );

  const handleTechLeave = useCallback(() => {
    setHoveredTech(null);
    setPopoverData(null);
  }, []);

  const isPaused = hoveredTech !== null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: orbitStyles }} />

      <div
        ref={containerRef}
        className={cn(
          "relative w-full aspect-square max-w-[550px] mx-auto",
          className,
        )}
      >
        {/* Center logo - moves down when popover is open */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 z-10"
          animate={{
            y: isPaused ? 40 : 0,
            scale: isPaused ? 0.9 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
          <div
            key={orbitNum}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/30 dark:border-slate-700/40",
              "transition-opacity duration-300",
              isPaused && "opacity-50",
            )}
            style={{ width: config.radius * 2, height: config.radius * 2 }}
          />
        ))}

        {/* Orbit containers with CSS animation */}
        {Object.entries(orbits).map(([orbitNum, config]) => (
          <div
            key={`orbit-${orbitNum}`}
            className={cn(
              "absolute top-1/2 left-1/2",
              `orbit-ring-${orbitNum}`,
              isPaused && "orbit-paused",
            )}
            style={{
              width: config.radius * 2,
              height: config.radius * 2,
              marginLeft: -config.radius,
              marginTop: -config.radius,
            }}
          >
            {config.items.map((tech, index) => {
              const angle = (360 / config.items.length) * index;
              const isHovered = hoveredTech?.name === tech.name;

              return (
                <div
                  key={tech.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: config.radius * 2,
                    height: config.radius * 2,
                    marginLeft: -config.radius,
                    marginTop: -config.radius,
                    transform: `rotate(${angle}deg) translateX(${config.radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    ref={(el) => {
                      if (el) iconRefs.current.set(tech.name, el);
                    }}
                    className={cn(
                      "w-14 h-14 md:w-16 md:h-16 rounded-xl -ml-7 -mt-7 md:-ml-8 md:-mt-8",
                      "bg-white dark:bg-slate-800 shadow-lg",
                      "flex items-center justify-center cursor-pointer",
                      "border-2 border-slate-100 dark:border-slate-700",
                      `counter-rotate-${orbitNum}`,
                      isPaused && "orbit-paused",
                    )}
                    style={{
                      color: tech.color,
                      borderColor: isHovered ? tech.color : undefined,
                    }}
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      opacity: isPaused && !isHovered ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={(e) => handleTechHover(tech, e)}
                    onMouseLeave={handleTechLeave}
                  >
                    {tech.icon}

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
                  </motion.div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none z-0"
          animate={{
            backgroundColor: hoveredTech
              ? `${hoveredTech.color}30`
              : "rgba(59, 130, 246, 0.2)",
            scale: isPaused ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Smart positioned popover */}
        <AnimatePresence>
          {hoveredTech && popoverData && (
            <motion.div
              className="absolute z-[200] pointer-events-auto"
              style={{
                left: popoverData.x,
                top: popoverData.y,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <TechPopover
                tech={hoveredTech}
                isOpen={true}
                position={popoverData.position}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instruction hint */}
        <motion.p
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap"
          animate={{ opacity: isPaused ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Di chuột vào công nghệ để xem chi tiết
        </motion.p>
      </div>
    </>
  );
}

export default OrbitingTech;
