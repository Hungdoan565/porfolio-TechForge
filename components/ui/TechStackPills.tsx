"use client";

import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  ReactIcon,
  NextJSIcon,
  TypeScriptIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  TailwindIcon,
  MongoDBIcon,
  DockerIcon,
  AWSIcon,
  PythonIcon,
  VueIcon,
  GraphQLIcon,
  FigmaIcon,
  ReduxIcon,
  GitIcon,
} from "@/components/ui/tech-brand-icons";

// Tech stack item type
export interface TechItem {
  name: string;
  icon?: string;
}

// Map tech names to their icons
const techIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  react: ReactIcon,
  "next.js": NextJSIcon,
  nextjs: NextJSIcon,
  typescript: TypeScriptIcon,
  ts: TypeScriptIcon,
  "node.js": NodeJSIcon,
  nodejs: NodeJSIcon,
  node: NodeJSIcon,
  postgresql: PostgreSQLIcon,
  postgres: PostgreSQLIcon,
  tailwind: TailwindIcon,
  "tailwind css": TailwindIcon,
  tailwindcss: TailwindIcon,
  mongodb: MongoDBIcon,
  mongo: MongoDBIcon,
  docker: DockerIcon,
  aws: AWSIcon,
  python: PythonIcon,
  vue: VueIcon,
  "vue.js": VueIcon,
  vuejs: VueIcon,
  graphql: GraphQLIcon,
  figma: FigmaIcon,
  redux: ReduxIcon,
  git: GitIcon,
};

// Get icon component for a tech name
function getTechIcon(
  techName: string,
): React.ComponentType<{ className?: string }> | null {
  const normalizedName = techName.toLowerCase().trim();

  return techIconMap[normalizedName] || null;
}

interface TechStackPillsProps {
  techs: (string | TechItem)[];
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  maxVisible?: number;
  showLabels?: boolean;
}

export function TechStackPills({
  techs,
  className,
  size = "sm",
  variant = "default",
  maxVisible,
  showLabels = true,
}: TechStackPillsProps) {
  const visibleTechs = maxVisible ? techs.slice(0, maxVisible) : techs;
  const hiddenCount = maxVisible ? Math.max(0, techs.length - maxVisible) : 0;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const variantClasses = {
    default:
      "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300",
    outline:
      "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-transparent",
    ghost:
      "bg-slate-50/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400",
  };

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visibleTechs.map((tech, index) => {
        const techName = typeof tech === "string" ? tech : tech.name;
        const IconComponent = getTechIcon(techName);

        return (
          <motion.span
            key={techName}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
              "inline-flex items-center rounded-full font-medium transition-all",
              "hover:scale-105 hover:shadow-sm",
              sizeClasses[size],
              variantClasses[variant],
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            whileHover={{ y: -1 }}
          >
            {IconComponent && <IconComponent className={iconSizes[size]} />}
            {showLabels && <span>{techName}</span>}
          </motion.span>
        );
      })}

      {hiddenCount > 0 && (
        <span
          className={cn(
            "inline-flex items-center rounded-full font-medium",
            sizeClasses[size],
            variantClasses[variant],
          )}
        >
          +{hiddenCount}
        </span>
      )}
    </div>
  );
}

// Icon-only variant for compact display
interface TechIconsRowProps {
  techs: string[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function TechIconsRow({
  techs,
  className,
  size = "md",
}: TechIconsRowProps) {
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {techs.map((techName, index) => {
        const IconComponent = getTechIcon(techName);

        if (!IconComponent) return null;

        return (
          <motion.div
            key={techName}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative"
            initial={{ opacity: 0, scale: 0.8 }}
            title={techName}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <IconComponent
              className={cn(
                iconSizes[size],
                "transition-transform group-hover:scale-110",
              )}
            />
            {/* Tooltip on hover */}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {techName}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default TechStackPills;
