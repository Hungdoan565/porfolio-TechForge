"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  image?: string;
  stats?: { label: string; value: string }[];
  color?: string;
  link?: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

// Default placeholder case studies
export const defaultCaseStudies: CaseStudy[] = [
  {
    title: "TechCorp App",
    category: "Mobile App",
    description: "Ứng dụng quản lý doanh nghiệp toàn diện với React Native",
    stats: [
      { label: "Revenue", value: "+150%" },
      { label: "Users", value: "50K+" },
    ],
    color: "#0066FF",
  },
  {
    title: "E-commerce Platform",
    category: "Web Platform",
    description: "Nền tảng thương mại điện tử với Next.js và headless CMS",
    stats: [
      { label: "Performance", value: "3x faster" },
      { label: "Conversion", value: "+80%" },
    ],
    color: "#10B981",
  },
];

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      animate={{
        rotateX: isHovered ? mousePosition.y * -10 : 0,
        rotateY: isHovered ? mousePosition.x * 10 : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      className={cn(
        "relative rounded-2xl overflow-hidden cursor-pointer group",
        "bg-white dark:bg-slate-800",
        "border border-slate-100 dark:border-slate-700/50",
        "h-[280px] md:h-[320px]",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
      transition={{ duration: 0.2 }}
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          background: `linear-gradient(135deg, ${caseStudy.color || "#0066FF"}40 0%, transparent 60%)`,
        }}
      />

      {/* Image placeholder or actual image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 dark:opacity-30">
        {caseStudy.image ? (
          <img
            alt={caseStudy.title}
            className="w-full h-full object-cover"
            src={caseStudy.image}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${caseStudy.color || "#0066FF"}20 0%, transparent 100%)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        {/* Category badge */}
        <motion.span
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-medium mb-4"
          style={{
            backgroundColor: `${caseStudy.color || "#0066FF"}15`,
            color: caseStudy.color || "#0066FF",
          }}
        >
          {caseStudy.category}
        </motion.span>

        {/* Title */}
        <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
          {caseStudy.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-auto line-clamp-2">
          {caseStudy.description}
        </p>

        {/* Stats - revealed on hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {caseStudy.stats?.map((stat, index) => (
            <div
              key={stat.label}
              className="px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-700/50"
            >
              <p
                className="text-lg font-bold"
                style={{ color: caseStudy.color || "#0066FF" }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Arrow indicator */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 45 : 0,
          }}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: `${caseStudy.color || "#0066FF"}15`,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight
            className="w-5 h-5"
            style={{ color: caseStudy.color || "#0066FF" }}
          />
        </motion.div>
      </div>

      {/* Hover spotlight effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, ${caseStudy.color || "#0066FF"}10, transparent 40%)`,
        }}
      />
    </motion.div>
  );
}

// Grid component for multiple case studies
interface CaseStudyGridProps {
  caseStudies?: CaseStudy[];
  className?: string;
}

export function CaseStudyGrid({
  caseStudies = defaultCaseStudies,
  className,
}: CaseStudyGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
        className,
      )}
    >
      {caseStudies.map((caseStudy, index) => (
        <motion.div
          key={caseStudy.title}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <CaseStudyCard caseStudy={caseStudy} />
        </motion.div>
      ))}
    </div>
  );
}

export default CaseStudyCard;
