"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CultureValue {
  title: string;
  description: string;
  emoji: string;
  teamMembers?: string[]; // Avatar URLs
}

interface CulturePreviewProps {
  values?: CultureValue[];
  className?: string;
}

// Default placeholder values
const defaultValues: CultureValue[] = [
  {
    title: "Collaboration First",
    description:
      "Chúng tôi tin rằng ý tưởng tốt nhất đến từ sự hợp tác. Làm việc nhóm, chia sẻ kiến thức.",
    emoji: "🤝",
    teamMembers: [],
  },
  {
    title: "Always Learning",
    description:
      "Tech talks hàng tuần, budget học tập, conference attendance. Không ngừng phát triển.",
    emoji: "📚",
    teamMembers: [],
  },
  {
    title: "Work-Life Balance",
    description:
      "Remote-first, flexible hours, mental health days. Sức khỏe quan trọng hơn deadline.",
    emoji: "⚖️",
    teamMembers: [],
  },
];

export function CulturePreview({
  values = defaultValues,
  className,
}: CulturePreviewProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",
        className,
      )}
    >
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          className={cn(
            "relative p-6 md:p-8 rounded-2xl overflow-hidden cursor-pointer",
            "bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900",
            "border border-slate-100 dark:border-slate-700/50",
            "group",
          )}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{
            y: -8,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Large background emoji */}
          <motion.span
            className="absolute -right-4 -bottom-4 text-[100px] md:text-[120px] opacity-5 dark:opacity-10 pointer-events-none select-none"
            animate={{
              scale: hoveredIndex === index ? 1.2 : 1,
              rotate: hoveredIndex === index ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {value.emoji}
          </motion.span>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Emoji */}
            <motion.span
              className="text-4xl md:text-5xl block mb-4"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
                rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {value.emoji}
            </motion.span>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
              {value.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {value.description}
            </p>

            {/* Team member avatars */}
            <div className="flex -space-x-2">
              {value.teamMembers && value.teamMembers.length > 0
                ? value.teamMembers.slice(0, 4).map((avatar, avatarIndex) => (
                    <motion.div
                      key={avatarIndex}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + avatarIndex * 0.1 }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    >
                      <img
                        src={avatar}
                        alt="Team member"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))
                : // Placeholder avatars
                  [...Array(3)].map((_, avatarIndex) => (
                    <motion.div
                      key={avatarIndex}
                      className={cn(
                        "w-8 h-8 rounded-full border-2 border-white dark:border-slate-800",
                        "bg-gradient-to-br",
                        avatarIndex === 0 && "from-blue-400 to-blue-600",
                        avatarIndex === 1 && "from-emerald-400 to-emerald-600",
                        avatarIndex === 2 && "from-purple-400 to-purple-600",
                      )}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + avatarIndex * 0.1 }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    />
                  ))}

              {/* More indicator */}
              {value.teamMembers && value.teamMembers.length > 4 && (
                <motion.div
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-300"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  +{value.teamMembers.length - 4}
                </motion.div>
              )}
            </div>
          </div>

          {/* Hover border glow */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(0, 102, 255, 0.3)",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default CulturePreview;
