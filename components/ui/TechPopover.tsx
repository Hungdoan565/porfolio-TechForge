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
  const positionStyles = {
    left: "right-full mr-4 top-1/2 -translate-y-1/2",
    right: "left-full ml-4 top-1/2 -translate-y-1/2",
    top: "bottom-full mb-4 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-4 left-1/2 -translate-x-1/2",
  };

  const arrowStyles = {
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45",
    right: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45",
    top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
    bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45",
  };

  const slideDirection = {
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
    top: { y: 20, opacity: 0 },
    bottom: { y: -20, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            "absolute z-[100] w-72 md:w-80",
            positionStyles[position],
            className,
          )}
          initial={slideDirection[position]}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={slideDirection[position]}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Arrow */}
          <div
            className={cn(
              "absolute w-3 h-3 bg-white dark:bg-slate-800 border-l border-t border-slate-200 dark:border-slate-700",
              arrowStyles[position],
            )}
          />

          {/* Card Content */}
          <motion.div
            className={cn(
              "relative rounded-2xl overflow-hidden",
              "bg-white dark:bg-slate-800",
              "border border-slate-200 dark:border-slate-700",
              "shadow-2xl shadow-slate-900/10 dark:shadow-black/30",
            )}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {/* Header with gradient */}
            <div
              className="p-4 pb-3"
              style={{
                background: `linear-gradient(135deg, ${tech.color}15 0%, transparent 100%)`,
              }}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${tech.color}20` }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div style={{ color: tech.color }}>{tech.icon}</div>
                </motion.div>

                {/* Name */}
                <div>
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
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-4 pb-3">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {tech.description}
              </p>
            </div>

            {/* Why we use */}
            <div className="px-4 pb-3">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">
                Tại sao chúng tôi chọn
              </p>
              <ul className="space-y-1.5">
                {tech.whyWeUse.map((reason, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: tech.color }}
                    />
                    <span>{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="px-4 pb-4">
              <div className="flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <div>
                    <p
                      className="text-lg font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.stats.projects}+
                    </p>
                    <p className="text-xs text-slate-500">Dự án</p>
                  </div>
                </div>
                <div className="w-px bg-slate-200 dark:bg-slate-700" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <div>
                    <p
                      className="text-lg font-bold"
                      style={{ color: tech.color }}
                    >
                      {tech.stats.yearsExp}+
                    </p>
                    <p className="text-xs text-slate-500">Năm kinh nghiệm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow border effect */}
            <div
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
