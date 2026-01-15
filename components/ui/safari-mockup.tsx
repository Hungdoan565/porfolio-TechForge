"use client";

import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SafariMockupProps {
  url?: string;
  imageSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

const SafariMockup: React.FC<SafariMockupProps> = ({
  url = "techforge.vn",
  imageSrc,
  className,
  children,
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20",
        "border border-slate-200/50 dark:border-slate-700/50",
        "bg-white dark:bg-slate-900",
        className,
      )}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Safari Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        {/* Traffic Lights */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors cursor-pointer" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-colors cursor-pointer" />
          <span className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 mx-4 max-w-md">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
            {/* Lock Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {url}
            </span>
          </div>
        </div>

        {/* Placeholder for right side */}
        <div className="w-16" />
      </div>

      {/* Content Area */}
      <div className="relative bg-slate-50 dark:bg-slate-900 aspect-video overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Preview"
            fill
            className="object-cover"
            priority
          />
        ) : children ? (
          children
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">
            No preview available
          </div>
        )}
      </div>
    </motion.div>
  );
};

export { SafariMockup };
export default SafariMockup;
