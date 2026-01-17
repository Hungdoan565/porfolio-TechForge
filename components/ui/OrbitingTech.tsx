"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
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

type PopoverPosition = "left" | "right" | "top" | "bottom";

function calculateSmartPosition(
  iconX: number,
  iconY: number,
  containerWidth: number,
  containerHeight: number,
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
        x + POPOVER_WIDTH <= containerWidth - 10 &&
        y + POPOVER_HEIGHT <= containerHeight - 10;
      avoidLogo = iconAngleDeg > 45 && iconAngleDeg < 135;
    } else if (pos === "left") {
      x = iconX - POPOVER_WIDTH - GAP;
      y = iconY;
      fitsInBounds = x >= 10 && y + POPOVER_HEIGHT <= containerHeight - 10;
      avoidLogo = iconAngleDeg > 135 && iconAngleDeg < 225;
    } else if (pos === "top") {
      x = iconX;
      y = iconY - POPOVER_HEIGHT - GAP;
      fitsInBounds = x + POPOVER_WIDTH <= containerWidth - 10 && y >= 10;
      avoidLogo = iconAngleDeg > 225 && iconAngleDeg < 315;
    } else {
      x = iconX;
      y = iconY + ICON_SIZE + GAP;
      fitsInBounds =
        x + POPOVER_WIDTH <= containerWidth - 10 &&
        y + POPOVER_HEIGHT <= containerHeight - 10;
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
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const orbits = useMemo(
    () => ({
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
    }),
    [technologies],
  );

  const handleTechHover = useCallback(
    (tech: TechItemFull, e: React.MouseEvent) => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
        leaveTimeoutRef.current = null;
      }

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
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredTech(null);
      setPopoverData(null);
    }, 150);
  }, []);

  const isPaused = hoveredTech !== null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-square max-w-[550px] mx-auto",
        className,
      )}
    >
      {/* Center logo - LUÔN Ở TRUNG TÂM */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{ scale: isPaused ? 1.05 : 1 }}
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
        <div
          key={orbitNum}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/30 dark:border-slate-700/40 pointer-events-none",
            "transition-opacity duration-300",
            isPaused && "opacity-50",
          )}
          style={{ width: config.radius * 2, height: config.radius * 2 }}
        />
      ))}

      {/* Orbiting items */}
      {Object.entries(orbits).map(([orbitNum, config]) => (
        <OrbitRing
          key={orbitNum}
          radius={config.radius}
          speed={config.speed}
          items={config.items}
          isPaused={isPaused}
          hoveredTech={hoveredTech}
          onTechHover={handleTechHover}
          onTechLeave={handleTechLeave}
        />
      ))}

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none z-0"
        animate={{
          backgroundColor: hoveredTech
            ? `${hoveredTech.color}30`
            : "rgba(59, 130, 246, 0.2)",
          scale: isPaused ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Smart positioned popover */}
      <AnimatePresence>
        {hoveredTech && popoverData && (
          <motion.div
            className="absolute z-[100] pointer-events-auto"
            style={{
              left: popoverData.x,
              top: popoverData.y,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
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
  );
}

// Separate component for each orbit ring with proper animation
function OrbitRing({
  radius,
  speed,
  items,
  isPaused,
  hoveredTech,
  onTechHover,
  onTechLeave,
}: {
  radius: number;
  speed: number;
  items: TechItemFull[];
  isPaused: boolean;
  hoveredTech: TechItemFull | null;
  onTechHover: (tech: TechItemFull, e: React.MouseEvent) => void;
  onTechLeave: () => void;
}) {
  const [rotation, setRotation] = useState(0);
  const ICON_SIZE = 56; // w-14 = 56px

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        setRotation((prev) => (prev + (360 / speed) * deltaTime) % 360);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, speed]);

  return (
    <>
      {items.map((tech, index) => {
        const baseAngle = (360 / items.length) * index;
        const currentAngle = baseAngle + rotation;
        const angleRad = (currentAngle * Math.PI) / 180;
        const isHovered = hoveredTech?.name === tech.name;

        // Calculate x, y position from center
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              // Position from center of container, offset by half icon size
              left: "50%",
              top: "50%",
              width: ICON_SIZE,
              height: ICON_SIZE,
              marginLeft: -ICON_SIZE / 2,
              marginTop: -ICON_SIZE / 2,
              x,
              y,
              zIndex: isHovered ? 50 : 10,
            }}
          >
            <motion.div
              className={cn(
                "w-14 h-14 md:w-16 md:h-16 rounded-xl",
                "bg-white dark:bg-slate-800 shadow-lg",
                "flex items-center justify-center cursor-pointer",
                "border-2 border-slate-100 dark:border-slate-700",
                "transition-colors duration-200",
              )}
              style={{
                color: tech.color,
                borderColor: isHovered ? tech.color : undefined,
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isPaused && !isHovered ? 0.5 : 1,
              }}
              transition={{ duration: 0.2 }}
              onMouseEnter={(e) => onTechHover(tech, e)}
              onMouseLeave={onTechLeave}
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
          </motion.div>
        );
      })}
    </>
  );
}

export default OrbitingTech;
