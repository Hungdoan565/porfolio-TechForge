"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { TechStackPills } from "@/components/ui/TechStackPills";

// Project data type
export interface Project {
  id: string;
  title: string;
  category:
    | "Web App"
    | "Mobile App"
    | "E-commerce"
    | "SaaS"
    | "Dashboard"
    | "Landing Page";
  description: string;
  image?: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  color: string;
  featured?: boolean;
  isDarkImage?: boolean; // Flag for dark mode images to use dark browser header
}

// Category colors
const categoryColors: Record<string, { bg: string; text: string }> = {
  "Web App": {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  "Mobile App": {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
  "E-commerce": {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
  },
  SaaS: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
  },
  Dashboard: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  "Landing Page": {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    text: "text-pink-600 dark:text-pink-400",
  },
};

interface ProjectBentoCardProps {
  project: Project;
  className?: string;
  size?: "small" | "medium" | "large";
}

export function ProjectBentoCard({
  project,
  className,
  size = "medium",
}: ProjectBentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const categoryStyle =
    categoryColors[project.category] || categoryColors["Web App"];

  // Size-based configurations
  const sizeConfig = {
    small: {
      imageHeight: "h-32",
      titleSize: "text-lg",
      showMetrics: false,
      techMaxVisible: 3,
      padding: "p-4",
    },
    medium: {
      imageHeight: "h-40",
      titleSize: "text-xl",
      showMetrics: true,
      techMaxVisible: 4,
      padding: "p-5",
    },
    large: {
      imageHeight: "h-52",
      titleSize: "text-2xl",
      showMetrics: true,
      techMaxVisible: 6,
      padding: "p-6",
    },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      animate={{
        scale: isHovered ? 1.02 : 1,
      }}
      className={cn(
        "group relative rounded-2xl overflow-hidden cursor-pointer",
        "bg-white dark:bg-slate-800/80",
        "border border-slate-200/80 dark:border-slate-700/50",
        "shadow-sm hover:shadow-xl transition-shadow duration-300",
        "flex flex-col",
        className,
      )}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Safari Browser Mockup */}
      <div className="relative overflow-hidden rounded-t-lg mx-3 mt-3">
        {/* Browser Chrome - adaptive to image theme */}
        <div
          className={cn(
            "flex items-center gap-2 px-3 py-2 rounded-t-lg border-b",
            project.isDarkImage
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600",
          )}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-2">
            <div
              className={cn(
                "flex items-center gap-1.5 px-2 py-0.5 rounded text-xs max-w-[140px]",
                project.isDarkImage
                  ? "bg-slate-700 text-slate-400"
                  : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400",
              )}
            >
              <svg
                className="w-2.5 h-2.5 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect height="11" rx="2" width="18" x="3" y="11" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="truncate">
                {project.liveUrl || "project.com"}
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot Area */}
        <div
          className={cn(
            "relative bg-slate-50 dark:bg-slate-900 overflow-hidden",
            config.imageHeight,
          )}
        >
          {project.image ? (
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              className="relative w-full h-full"
              transition={{ duration: 0.4 }}
            >
              <Image
                fill
                alt={project.title}
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={project.image}
              />
            </motion.div>
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}30 100%)`,
              }}
            >
              <span className="text-4xl opacity-50">
                {project.category === "Mobile App" ? "📱" : "🖥️"}
              </span>
            </div>
          )}

          {/* Hover overlay with View Project */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-4"
            initial={{ opacity: 0 }}
          >
            {project.liveUrl && (
              <motion.a
                animate={{ y: isHovered ? 0 : 20 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                href={project.liveUrl}
                initial={{ y: 20 }}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Project
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className={cn("flex flex-col", config.padding)}>
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium",
              categoryStyle.bg,
              categoryStyle.text,
            )}
          >
            {project.category}
          </span>

          {project.liveUrl && (
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-700"
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </motion.div>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0066FF] transition-colors",
            config.titleSize,
          )}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4">
          <TechStackPills
            maxVisible={config.techMaxVisible}
            size="sm"
            techs={project.techStack}
            variant="ghost"
          />
        </div>

        {/* Metrics - shown on hover for medium/large */}
        {config.showMetrics &&
          project.metrics &&
          project.metrics.length > 0 && (
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              className="flex gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p
                    className="text-lg font-bold"
                    style={{ color: project.color }}
                  >
                    {metric.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
      </div>

      {/* Glow effect on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: `0 0 60px ${project.color}40`,
        }}
      />
    </motion.div>
  );
}

export default ProjectBentoCard;
