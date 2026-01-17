"use client";

import type { LucideIcon } from "lucide-react";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  color?: string;
  showProgressBar?: boolean;
  progressMax?: number;
  delay?: number;
  className?: string;
}

export function StatsCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  icon: Icon,
  color = "#0066FF",
  showProgressBar = true,
  progressMax = 100,
  delay = 0,
  className,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  // Animate counter
  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  // Animate progress bar (only if decorative icon is NOT provided)
  useEffect(() => {
    if (!isInView || Icon) return;

    const timeout = setTimeout(
      () => {
        const targetWidth = Math.min((value / progressMax) * 100, 100);

        setProgressWidth(targetWidth);
      },
      delay * 1000 + 500,
    );

    return () => clearTimeout(timeout);
  }, [isInView, value, progressMax, delay, Icon]);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className={cn(
        "relative p-6 md:p-8 rounded-3xl transition-all duration-300 group",
        "bg-white dark:bg-slate-800/80",
        "border border-slate-100 dark:border-slate-700/50",
        "hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-600",
        "hover:-translate-y-1",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Icon (optional - decorative when progress bar is hidden) */}
      {Icon && (
        <motion.div
          className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-8 h-8" strokeWidth={1.5} style={{ color }} />
        </motion.div>
      )}

      {/* Counter Value */}
      <div className="flex items-baseline gap-1 mb-2">
        {prefix && (
          <span className="text-2xl md:text-3xl font-bold" style={{ color }}>
            {prefix}
          </span>
        )}
        <motion.span
          className="text-4xl md:text-5xl font-bold tabular-nums"
          style={{ color }}
        >
          {count}
        </motion.span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-bold" style={{ color }}>
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200 mb-1">
        {label}
      </p>

      {/* Description (optional) */}
      {description && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          {description}
        </p>
      )}

      {/* Progress Bar - only shown when no icon is provided */}
      {!Icon && showProgressBar && (
        <div className="mt-4">
          <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${progressWidth}%` }}
              className="h-full rounded-full"
              initial={{ width: 0 }}
              style={{ backgroundColor: color }}
              transition={{
                duration: 1,
                delay: delay + 0.5,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      )}

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${color}15, 0 0 80px ${color}08`,
        }}
      />
    </motion.div>
  );
}

export default StatsCounter;
