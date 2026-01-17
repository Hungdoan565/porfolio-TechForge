"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Headphones,
  ArrowRight,
} from "lucide-react";

// ============================================
// TYPES
// ============================================

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  href?: string;
  cta?: string;
}

interface AsymmetricBentoProps {
  stats?: StatItem[];
  heroTitle?: string;
  heroSubtitle?: string;
  heroCta?: {
    text: string;
    href: string;
  };
  className?: string;
}

// ============================================
// DEFAULT DATA
// ============================================

const defaultStats: StatItem[] = [
  {
    value: 98,
    suffix: "%",
    label: "Đúng deadline",
    description: "Cam kết giao hàng đúng hẹn",
    icon: Clock,
    href: "#services",
    cta: "Xem dịch vụ",
  },
  {
    value: 50,
    suffix: "+",
    label: "Dự án hoàn thành",
    description: "Đa dạng ngành nghề",
    icon: TrendingUp,
    href: "#portfolio",
    cta: "Xem portfolio",
  },
  {
    value: 30,
    suffix: "+",
    label: "Khách hàng",
    description: "Tin tưởng và quay lại",
    icon: Users,
    href: "#testimonials",
    cta: "Đọc reviews",
  },
  {
    value: 5,
    suffix: "+",
    label: "Năm kinh nghiệm",
    description: "Liên tục phát triển",
    icon: Calendar,
    href: "#about",
    cta: "Về chúng tôi",
  },
];

// ============================================
// ANIMATED COUNTER HOOK
// ============================================

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

// ============================================
// BENTO CARD COMPONENT (Feature-First Style)
// ============================================

function BentoCard({
  stat,
  delay = 0,
  variant = "default",
}: {
  stat: StatItem;
  delay?: number;
  variant?: "default" | "accent";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(stat.value, 2000, isInView);
  const Icon = stat.icon;

  const isAccent = variant === "accent";

  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
        "p-5 md:p-6 h-full min-h-[160px]",
        // Light mode
        isAccent
          ? "bg-gradient-to-br from-[#0066FF] to-blue-600"
          : "bg-white border border-slate-200/80",
        // Dark mode
        isAccent
          ? "dark:from-blue-600 dark:to-blue-700"
          : "dark:bg-slate-800/90 dark:border-slate-700/50",
        // Shadows
        isAccent
          ? "shadow-lg shadow-blue-500/20"
          : "shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50",
        // Transform
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {/* Background Icon */}
      {Icon && (
        <div
          className={cn(
            "absolute top-4 right-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
            isAccent ? "opacity-20" : "opacity-[0.08]",
          )}
        >
          <Icon
            className={cn(
              "w-14 h-14",
              isAccent ? "text-white" : "text-[#0066FF]",
            )}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-1 transition-transform duration-300 group-hover:-translate-y-1">
        {/* Value */}
        <div className="flex items-baseline gap-0.5">
          {stat.prefix && (
            <span
              className={cn(
                "text-xl md:text-2xl font-bold",
                isAccent ? "text-white" : "text-[#0066FF]",
              )}
            >
              {stat.prefix}
            </span>
          )}
          <motion.span
            className={cn(
              "text-3xl md:text-4xl font-bold tabular-nums tracking-tight",
              isAccent ? "text-white" : "text-[#0066FF]",
            )}
          >
            {count}
          </motion.span>
          {stat.suffix && (
            <span
              className={cn(
                "text-xl md:text-2xl font-bold",
                isAccent ? "text-white" : "text-[#0066FF]",
              )}
            >
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <p
          className={cn(
            "text-sm md:text-base font-semibold",
            isAccent ? "text-white" : "text-slate-800 dark:text-slate-200",
          )}
        >
          {stat.label}
        </p>

        {/* Description */}
        {stat.description && (
          <p
            className={cn(
              "text-xs md:text-sm",
              isAccent ? "text-white/70" : "text-slate-500 dark:text-slate-400",
            )}
          >
            {stat.description}
          </p>
        )}
      </div>

      {/* Hover CTA */}
      {stat.href && stat.cta && (
        <motion.div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4",
            "translate-y-full opacity-0",
            "group-hover:translate-y-0 group-hover:opacity-100",
            "transition-all duration-300 ease-out",
          )}
        >
          <a
            href={stat.href}
            className={cn(
              "inline-flex items-center gap-1.5 text-sm font-medium",
              isAccent
                ? "text-white hover:text-white/80"
                : "text-[#0066FF] hover:text-blue-700 dark:hover:text-blue-400",
            )}
          >
            {stat.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      )}

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          "opacity-0 group-hover:opacity-100",
          isAccent ? "bg-white/5" : "bg-slate-50/50 dark:bg-slate-700/20",
        )}
      />
    </motion.div>
  );
}

// ============================================
// HERO CARD COMPONENT
// ============================================

function HeroCard({
  title,
  subtitle,
  cta,
  isInView,
}: {
  title: string;
  subtitle: string;
  cta?: { text: string; href: string };
  isInView: boolean;
}) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden h-full min-h-[280px] md:min-h-[340px]",
        "p-6 md:p-8 lg:p-10",
        "bg-gradient-to-br from-[#0066FF] via-blue-600 to-indigo-600",
        "shadow-xl shadow-blue-500/25",
        "flex flex-col justify-between",
      )}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <motion.h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-base md:text-lg text-white/80 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* CTA Button */}
      {cta && (
        <motion.div
          className="relative z-10 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={cta.href}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
              "bg-white text-[#0066FF] font-semibold text-sm md:text-base",
              "hover:bg-white/90 transition-colors duration-200",
              "shadow-lg shadow-black/10",
            )}
          >
            {cta.text}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

// ============================================
// FEATURE CARD COMPONENT (Support 24/7)
// ============================================

function FeatureCard({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden h-full min-h-[140px]",
        "p-5 md:p-6",
        "bg-gradient-to-br from-slate-900 to-slate-800",
        "dark:from-slate-800 dark:to-slate-900",
        "flex items-center justify-between gap-4",
        "group hover:-translate-y-1 transition-all duration-300",
        "shadow-lg shadow-slate-900/20",
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-white font-bold text-lg md:text-xl mb-1">
          Hỗ trợ 24/7
        </p>
        <p className="text-slate-400 text-sm">
          Đội ngũ support sẵn sàng hỗ trợ mọi lúc
        </p>
      </div>

      {/* Icon */}
      <motion.div
        className={cn(
          "relative z-10 w-12 h-12 rounded-xl",
          "bg-[#0066FF]/20 flex items-center justify-center",
          "group-hover:bg-[#0066FF]/30 transition-colors duration-300",
        )}
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        <Headphones className="w-6 h-6 text-[#0066FF]" />
      </motion.div>
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function AsymmetricBento({
  stats = defaultStats,
  heroTitle = "Tại sao chọn chúng tôi?",
  heroSubtitle = "Chúng tôi không chỉ code, chúng tôi xây dựng mối quan hệ đối tác lâu dài với khách hàng",
  heroCta = { text: "Liên hệ ngay", href: "#contact" },
  className,
}: AsymmetricBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {/* Hero Card - Spans 2 rows on lg */}
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
        <HeroCard
          title={heroTitle}
          subtitle={heroSubtitle}
          cta={heroCta}
          isInView={isInView}
        />
      </div>

      {/* First two stats - Right column on lg */}
      {stats.slice(0, 2).map((stat, index) => (
        <div key={stat.label} className="lg:col-span-1">
          <BentoCard
            stat={stat}
            delay={0.2 + index * 0.1}
            variant={index === 0 ? "accent" : "default"}
          />
        </div>
      ))}

      {/* Remaining stats - Bottom row */}
      {stats.slice(2).map((stat, index) => (
        <div key={stat.label} className="lg:col-span-1">
          <BentoCard stat={stat} delay={0.4 + index * 0.1} />
        </div>
      ))}

      {/* Feature Card - 24/7 Support */}
      <div className="md:col-span-2 lg:col-span-1">
        <FeatureCard isInView={isInView} />
      </div>
    </div>
  );
}

export default AsymmetricBento;
