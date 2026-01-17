"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company: string;
  avatar?: string;
}

interface TestimonialTickerProps {
  testimonials?: Testimonial[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  direction?: "left" | "right";
}

// Default placeholder testimonials
const defaultTestimonials: Testimonial[] = [
  {
    quote: "Chất lượng code xuất sắc, đúng deadline",
    author: "Nguyễn Văn A",
    role: "CEO",
    company: "TechCorp",
  },
  {
    quote: "Team làm việc chuyên nghiệp, hỗ trợ 24/7",
    author: "Trần Thị B",
    role: "CTO",
    company: "StartupX",
  },
  {
    quote: "Đã hợp tác 3 dự án, rất hài lòng",
    author: "Lê Văn C",
    role: "Product Manager",
    company: "InnovateCo",
  },
  {
    quote: "Giao tiếp tốt, báo cáo tiến độ rõ ràng",
    author: "Phạm Thị D",
    role: "Founder",
    company: "DigitalHub",
  },
  {
    quote: "Chi phí hợp lý, chất lượng cao",
    author: "Hoàng Văn E",
    role: "Director",
    company: "VietTech",
  },
];

export function TestimonialTicker({
  testimonials = defaultTestimonials,
  speed = 30,
  pauseOnHover = true,
  className,
  direction = "left",
}: TestimonialTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [testimonials]);

  return (
    <div className={cn("relative overflow-hidden py-6", className)}>
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Ticker container */}
      <motion.div
        ref={containerRef}
        className="flex gap-4 md:gap-6"
        animate={{
          x: direction === "left" ? [0, -contentWidth] : [-contentWidth, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.author}-${index}`}
            className={cn(
              "flex-shrink-0 w-72 md:w-80 p-5 md:p-6 rounded-2xl",
              "bg-white dark:bg-slate-800/80",
              "border border-slate-100 dark:border-slate-700/50",
              "shadow-sm hover:shadow-lg transition-shadow duration-300",
            )}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {/* Quote icon */}
            <Quote className="w-6 h-6 text-[#0066FF]/30 mb-3" />

            {/* Quote text */}
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium mb-4 line-clamp-2">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF] to-indigo-600 flex items-center justify-center text-white font-semibold text-sm overflow-hidden">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  testimonial.author.charAt(0)
                )}
              </div>

              {/* Name & Role */}
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {testimonial.role && `${testimonial.role}, `}
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TestimonialTicker;
