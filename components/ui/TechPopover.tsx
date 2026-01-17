"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, CheckCircle2, Briefcase, Calendar } from "lucide-react";

export interface TechInfo {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  whyWeUse: string[];
  stats: {
    projects: number;
    yearsExp: number;
  };
  link: string;
}

interface TechPopoverProps {
  tech: TechInfo;
  isOpen: boolean;
  position?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export function TechPopover({
  tech,
  isOpen,
  position = "right",
  className,
}: TechPopoverProps) {
  const slideDirection = {
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
    top: { y: 20, opacity: 0 },
    bottom: { y: -20, opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key={tech.name}
          className={cn("relative w-72 md:w-80", className)}
          initial={slideDirection[position]}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={slideDirection[position]}
          transition={{ 
            duration: 0.25, 
            ease: "easeInOut",
            opacity: { duration: 0.2 }
          }}
        >
          {/* Arrow pointing to icon */}
          <div
            className="absolute w-3 h-3 bg-white dark:bg-slate-800 border-l border-t border-slate-200 dark:border-slate-700 z-10"
            style={{
              ...(position === "right" && {
                left: -7,
                top: "50%",
                transform: "translateY(-50%) rotate(45deg)",
                borderRight: "none",
                borderBottom: "none",
              }),
              ...(position === "left" && {
                right: -7,
                top: "50%",
                transform: "translateY(-50%) rotate(45deg)",
                borderLeft: "none",
                borderTop: "none",
              }),
              ...(position === "bottom" && {
                top: -7,
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                borderLeft: "none",
                borderTop: "none",
              }),
              ...(position === "top" && {
                bottom: -7,
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                borderRight: "none",
                borderBottom: "none",
              }),
            }}
          />

          {/* Card Content */}
          <motion.div
            className={cn(
              "relative rounded-2xl overflow-hidden",
              "bg-white dark:bg-slate-800",
              "border border-slate-200 dark:border-slate-600",
              "shadow-2xl shadow-slate-900/10 dark:shadow-black/30",
            )}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.25, 
              delay: 0.05,
              ease: "easeOut" 
            }}
          >
            {/* Header with gradient */}
            <motion.div
              key={`${tech.name}-header`}
              className="p-4 pb-3 dark:bg-slate-750"
              style={{
                background: `linear-gradient(135deg, ${tech.color}15 0%, transparent 100%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    // Dark icons get white background in dark mode
                    (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                      ? "dark:bg-white"
                      : ""
                  )}
                  style={{ 
                    backgroundColor: (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                      ? `${tech.color}20`
                      : `${tech.color}20`
                  }}
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <div 
                    className={cn(
                      (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                        ? "dark:[&>svg]:text-slate-400"
                        : ""
                    )}
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                </motion.div>

                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.15 }}
                >
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                    {tech.name}
                  </h4>
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#0066FF] transition-colors"
                  >
                    {new URL(tech.link).hostname}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="px-4 pb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 }}
            >
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>

            {/* Why we use */}
            <motion.div 
              className="px-4 pb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.25 }}
            >
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                Tại sao chúng tôi chọn
              </p>
              <ul className="space-y-1.5">
                {tech.whyWeUse.map((reason, index) => (
                  <motion.li
                    key={`${tech.name}-reason-${index}`}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.2 }}
                  >
                    <CheckCircle2
                      className={cn(
                        "w-4 h-4 mt-0.5 flex-shrink-0",
                        (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                          ? "dark:text-blue-400"
                          : ""
                      )}
                      style={{ 
                        color: (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                          ? undefined
                          : tech.color 
                      }}
                    />
                    <span>{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="px-4 pb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.35 }}
            >
              <div className="flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400 dark:text-slate-300" />
                  <div>
                    <p
                      className={cn(
                        "text-lg font-bold",
                        (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                          ? "dark:text-blue-400"
                          : ""
                      )}
                      style={{ 
                        color: (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                          ? undefined
                          : tech.color 
                      }}
                    >
                      {tech.stats.projects}+
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Dự án</p>
                  </div>
                </div>
                <div className="w-px bg-slate-200 dark:bg-slate-700" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-300" />
                  <div>
                    <p
                      className={cn(
                        "text-lg font-bold",
                        (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                          ? "dark:text-blue-400"
                          : ""
                      )}
                      style={{ 
                        color: (tech.color === "#000000" || tech.color.toLowerCase().includes("#2d3"))
                          ? undefined
                          : tech.color 
                      }}
                    >
                      {tech.stats.yearsExp}+
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Năm kinh nghiệm</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glow border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 1px ${tech.color}30`,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TechPopover;
