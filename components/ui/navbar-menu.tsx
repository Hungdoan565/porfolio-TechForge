"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  onClick,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) => {
  const isActive = active === item;

  const content = (
    <motion.p
      className={cn(
        "cursor-pointer font-medium text-sm relative",
        "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
        isActive && "text-[#0066FF] dark:text-[#0066FF]",
      )}
      transition={{ duration: 0.3 }}
    >
      {item}
      {/* Active indicator dot */}
      {isActive && (
        <motion.span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0066FF] rounded-full"
          layoutId="nav-indicator"
          transition={transition}
        />
      )}
    </motion.p>
  );

  // If no children (dropdown), render as a simple link
  if (!children && href) {
    return (
      <Link className="relative" href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setActive(item)}>
      {content}
      {active !== null && children && (
        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                className={cn(
                  "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl",
                  "rounded-2xl overflow-hidden",
                  "border border-slate-200/50 dark:border-slate-700/50",
                  "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]",
                  "dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]",
                )}
                layoutId="active"
                transition={transition}
              >
                <motion.div layout className="w-max h-full p-5">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      className={cn(
        "relative rounded-full",
        "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl",
        "border border-slate-200/50 dark:border-slate-700/50",
        "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.05)]",
        "flex justify-center items-center space-x-8 px-8 py-4",
        className,
      )}
      onMouseLeave={() => setActive(null)}
    >
      {children}
    </nav>
  );
};

// ServiceItem - Clean minimal with border accent (compact)
export const ServiceItem = ({
  title,
  description,
  href,
  icon: Icon,
  onClick,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        className={cn(
          "group flex items-center gap-3 p-2.5 rounded-lg",
          "bg-white dark:bg-slate-800/50",
          "border-2 border-transparent",
          "hover:border-[#0066FF]/30 hover:bg-blue-50/50 dark:hover:bg-slate-800",
          "transition-all duration-200",
        )}
        whileHover={{ x: 2 }}
      >
        {/* Icon Container - Smaller */}
        <div
          className={cn(
            "flex-shrink-0 w-9 h-9 rounded-lg",
            "bg-gradient-to-br from-blue-50 to-slate-50",
            "dark:from-slate-700 dark:to-slate-800",
            "flex items-center justify-center",
            "group-hover:from-blue-100 group-hover:to-blue-50",
            "dark:group-hover:from-slate-600 dark:group-hover:to-slate-700",
            "transition-all duration-200",
          )}
        >
          <Icon className="w-5 h-5 text-[#0066FF]" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4
            className={cn(
              "text-xs font-semibold",
              "text-slate-800 dark:text-white",
              "group-hover:text-[#0066FF] dark:group-hover:text-[#0066FF]",
              "transition-colors duration-200",
            )}
          >
            {title}
          </h4>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
            {description}
          </p>
        </div>

        {/* Arrow - Smaller */}
        <ArrowRight
          className={cn(
            "w-3.5 h-3.5 text-slate-300 dark:text-slate-600",
            "group-hover:text-[#0066FF] group-hover:translate-x-0.5",
            "transition-all duration-200 flex-shrink-0 mt-0.5",
          )}
        />
      </motion.div>
    </Link>
  );
};

// TechItem - For technology stack with colored icons
export const TechItem = ({
  name,
  icon: Icon,
  href,
  onClick,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        className={cn(
          "group flex items-center gap-3 px-3 py-2 rounded-lg",
          "hover:bg-slate-50 dark:hover:bg-slate-800/50",
          "transition-all duration-200",
        )}
        whileHover={{ x: 4 }}
      >
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          <Icon size={20} />
        </div>
        <span
          className={cn(
            "text-sm text-slate-600 dark:text-slate-300",
            "group-hover:text-slate-900 dark:group-hover:text-white",
            "transition-colors duration-200",
          )}
        >
          {name}
        </span>
      </motion.div>
    </Link>
  );
};

// Category Header for tech dropdown
export const CategoryHeader = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("mb-3", className)}>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {title}
      </p>
      <div className="mt-1.5 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
    </div>
  );
};

// HoveredLink - Simple link with hover effect
export const HoveredLink = ({
  children,
  href,
  onClick,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  [key: string]: unknown;
}) => {
  return (
    <Link href={href} onClick={onClick} {...rest}>
      <motion.span
        className={cn(
          "block text-sm py-1",
          "text-slate-600 dark:text-slate-300",
          "hover:text-[#0066FF] dark:hover:text-[#0066FF]",
          "transition-colors duration-200",
        )}
        whileHover={{ x: 4 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};
