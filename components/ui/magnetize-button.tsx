"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

interface MagnetizeButtonProps {
  particleCount?: number;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

function MagnetizeButton({
  className,
  particleCount = 12,
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i]?.x || 0,
      y: particles[i]?.y || 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  const baseStyles =
    variant === "primary"
      ? "bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-lg shadow-blue-500/25"
      : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50";

  return (
    <motion.button
      className={cn(
        "relative min-w-[180px] px-8 py-4 rounded-full font-semibold text-base",
        "transition-all duration-300 touch-none overflow-visible",
        baseStyles,
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {/* Particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index]?.x || 0, y: particles[index]?.y || 0 }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            variant === "primary" ? "bg-white/60" : "bg-blue-400/60",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-30",
          )}
          style={{
            left: "50%",
            top: "50%",
          }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isAttracting && <Sparkles className="w-4 h-4 animate-pulse" />}
        {children}
      </span>
    </motion.button>
  );
}

export { MagnetizeButton };
