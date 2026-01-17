"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, Users, Calendar, Clock, Quote } from "lucide-react";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
  color?: string;
}

interface FloatingTestimonial {
  quote: string;
  author: string;
  role: string;
}

interface AsymmetricBentoProps {
  stats?: StatItem[];
  heroTitle?: string;
  heroSubtitle?: string;
  floatingTestimonial?: FloatingTestimonial;
  className?: string;
}

// Default stats
const defaultStats: StatItem[] = [
  {
    value: 98,
    suffix: "%",
    label: "Đúng deadline",
    icon: Clock,
    color: "#0066FF",
  },
  {
    value: 50,
    suffix: "+",
    label: "Dự án hoàn thành",
    icon: TrendingUp,
    color: "#10B981",
  },
  {
    value: 30,
    suffix: "+",
    label: "Khách hàng",
    icon: Users,
    color: "#F59E0B",
  },
  {
    value: 5,
    suffix: "+",
    label: "Năm kinh nghiệm",
    icon: Calendar,
    color: "#8B5CF6",
  },
];

const defaultTestimonial: FloatingTestimonial = {
  quote: "Team làm việc chuyên nghiệp, đúng cam kết",
  author: "Nguyễn Văn A",
  role: "CEO, TechCorp",
};

// Animated counter hook
function useCounter(
  target: number,
  duration: number = 2000,
  isInView: boolean,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}

// Individual stat card
function StatCard({
  stat,
  delay = 0,
  size = "normal",
}: {
  stat: StatItem;
  delay?: number;
  size?: "normal" | "large";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(stat.value, 2000, isInView);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-white dark:bg-slate-800/80",
        "border border-slate-100 dark:border-slate-700/50",
        "p-5 md:p-6",
        size === "large" && "p-6 md:p-8",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Icon background */}
      {Icon && (
        <motion.div
          className="absolute top-3 right-3 opacity-10"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <Icon className="w-12 h-12" style={{ color: stat.color }} />
        </motion.div>
      )}

      {/* Value */}
      <div className="flex items-baseline gap-1">
        {stat.prefix && (
          <span
            className={cn(
              "font-bold",
              size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            )}
            style={{ color: stat.color }}
          >
            {stat.prefix}
          </span>
        )}
        <motion.span
          className={cn(
            "font-bold tabular-nums",
            size === "large" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl",
          )}
          style={{ color: stat.color }}
        >
          {count}
        </motion.span>
        {stat.suffix && (
          <span
            className={cn(
              "font-bold",
              size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            )}
            style={{ color: stat.color }}
          >
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 mt-1">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function AsymmetricBento({
  stats = defaultStats,
  heroTitle = "Tại sao chọn chúng tôi?",
  heroSubtitle = "Chúng tôi không chỉ code, chúng tôi xây dựng mối quan hệ đối tác lâu dài",
  floatingTestimonial = defaultTestimonial,
  className,
}: AsymmetricBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(100px,auto)]",
        className,
      )}
    >
      {/* Hero Card - Large (spans 7 cols, 2 rows on desktop) */}
      <motion.div
        className={cn(
          "col-span-12 lg:col-span-7 row-span-1 lg:row-span-2",
          "relative rounded-3xl overflow-hidden",
          "p-6 md:p-8 lg:p-10",
          "bg-gradient-to-br from-[#0066FF] to-indigo-600",
        )}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {heroTitle}
          </motion.h3>
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {heroSubtitle}
          </motion.p>
        </div>

        {/* Floating testimonial quote */}
        <motion.div
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8 max-w-[250px] md:max-w-xs"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-5"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Quote className="w-5 h-5 text-white/50 mb-2" />
            <p className="text-sm text-white font-medium italic mb-3">
              &ldquo;{floatingTestimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white text-xs font-bold">
                {floatingTestimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-white font-semibold">
                  {floatingTestimonial.author}
                </p>
                <p className="text-xs text-white/60">
                  {floatingTestimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Cards - Right column (5 cols each, stacked) */}
      {stats.slice(0, 2).map((stat, index) => (
        <div key={stat.label} className="col-span-6 lg:col-span-5 row-span-1">
          <StatCard stat={stat} delay={0.3 + index * 0.1} />
        </div>
      ))}

      {/* Bottom row - remaining stats */}
      {stats.slice(2).map((stat, index) => (
        <div key={stat.label} className="col-span-6 lg:col-span-3 row-span-1">
          <StatCard stat={stat} delay={0.5 + index * 0.1} />
        </div>
      ))}

      {/* Feature highlight card - spans remaining space */}
      <motion.div
        className={cn(
          "col-span-12 lg:col-span-6 row-span-1",
          "relative rounded-2xl overflow-hidden",
          "bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900",
          "p-5 md:p-6",
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg md:text-xl mb-1">
              Hỗ trợ 24/7
            </p>
            <p className="text-slate-400 text-sm">
              Đội ngũ support sẵn sàng hỗ trợ mọi lúc
            </p>
          </div>
          <motion.div
            className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-2xl">💬</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AsymmetricBento;
