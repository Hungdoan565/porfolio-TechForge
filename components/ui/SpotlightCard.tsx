"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
  hoverBorderColor?: string;
  showBorderGlow?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(0, 102, 255, 0.15)",
  hoverBorderColor = "rgba(0, 102, 255, 0.5)",
  showBorderGlow = true,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.8);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.8);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={divRef}
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-500",
        // Light mode
        "bg-white/90 border border-slate-200/80 backdrop-blur-sm",
        // Dark mode
        "dark:bg-slate-900/90 dark:border-slate-700/50 dark:backdrop-blur-md",
        // Hover states
        "hover:shadow-xl",
        "dark:hover:shadow-2xl dark:hover:shadow-blue-500/5",
        className,
      )}
      style={{
        boxShadow:
          isHovered && showBorderGlow
            ? `0 0 30px ${hoverBorderColor.replace("0.5", "0.15")}, 0 0 60px ${hoverBorderColor.replace("0.5", "0.08")}`
            : undefined,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.01 }}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Border glow effect on hover */}
      {showBorderGlow && (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${hoverBorderColor.replace("0.5", "0.1")}, transparent 40%)`,
          }}
        />
      )}

      {/* Inner border glow */}
      <div
        className="pointer-events-none absolute inset-[1px] rounded-[23px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.5 : 0,
          border: `1px solid ${hoverBorderColor}`,
        }}
      />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;
