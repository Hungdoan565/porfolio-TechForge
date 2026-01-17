"use client";

import type { LucideIcon } from "lucide-react";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: string[];
  icon: LucideIcon;
  color: string;
  progressLabel?: string;
  progressValue?: number;
  className?: string;
  delay?: number;
}

export function FeaturedCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  color,
  progressLabel,
  progressValue = 0,
  className,
  delay = 0,
}: FeaturedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className={cn(
        "relative p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500",
        "bg-white dark:bg-slate-800/90",
        "border border-slate-100 dark:border-slate-700/50",
        "hover:shadow-2xl",
        className,
      )}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.8 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}15, transparent 40%)`,
        }}
      />

      {/* Background Gradient */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 dark:opacity-20 transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with Float Animation */}
        <motion.div
          animate={isInView ? { y: [0, -5, 0] } : {}}
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${color}15` }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          {/* Icon Glow */}
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-40"
            style={{ backgroundColor: color }}
          />
          <Icon
            className="relative w-8 h-8 md:w-10 md:h-10"
            color={color}
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-lg font-medium mb-4" style={{ color }}>
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, x: -15 }}
              transition={{ delay: delay + 0.2 + idx * 0.1 }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${color}20` }}
              >
                <Check className="w-3.5 h-3.5" color={color} strokeWidth={3} />
              </div>
              <span className="font-medium">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Progress Indicator */}
        {progressLabel && (
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {progressLabel}
              </span>
              <span className="text-sm font-bold" style={{ color }}>
                {progressValue}%
              </span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                animate={isInView ? { width: `${progressValue}%` } : {}}
                className="h-full rounded-full"
                initial={{ width: 0 }}
                style={{ backgroundColor: color }}
                transition={{
                  duration: 1.2,
                  delay: delay + 0.5,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Border Glow on Hover */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: `inset 0 0 0 1px ${color}30, 0 0 40px ${color}10`,
        }}
      />
    </motion.div>
  );
}

export default FeaturedCard;
