"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Scale, Lightbulb, Heart } from "lucide-react";

import DisplayCards from "@/components/ui/display-cards";
import { FadeIn } from "@/components/ui/motion-primitives";

// 5 Culture cards với màu riêng biệt - tăng hover translate để thấy rõ tiêu đề
const cultureCards = [
  {
    icon: <Users className="size-4 text-blue-400" />,
    title: "Hợp tác & Chia sẻ",
    description: "Ý tưởng tốt nhất đến từ teamwork",
    date: "Core Value #1",
    titleClassName: "text-blue-600 dark:text-blue-400",
    iconBgClassName: "bg-blue-500/20",
    className:
      "[grid-area:stack] hover:-translate-y-20 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-300 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <BookOpen className="size-4 text-emerald-400" />,
    title: "Không ngừng học hỏi",
    description: "Phát triển bản thân mỗi ngày",
    date: "Core Value #2",
    titleClassName: "text-emerald-600 dark:text-emerald-400",
    iconBgClassName: "bg-emerald-500/20",
    className:
      "[grid-area:stack] translate-x-10 translate-y-6 hover:-translate-y-14 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-300 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Scale className="size-4 text-purple-400" />,
    title: "Cân bằng cuộc sống",
    description: "Remote-first, flexible hours",
    date: "Core Value #3",
    titleClassName: "text-purple-600 dark:text-purple-400",
    iconBgClassName: "bg-purple-500/20",
    className:
      "[grid-area:stack] translate-x-20 translate-y-12 hover:-translate-y-8 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-300 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Lightbulb className="size-4 text-amber-400" />,
    title: "Đổi mới sáng tạo",
    description: "Luôn tìm kiếm giải pháp tốt hơn",
    date: "Core Value #4",
    titleClassName: "text-amber-600 dark:text-amber-400",
    iconBgClassName: "bg-amber-500/20",
    className:
      "[grid-area:stack] translate-x-[7.5rem] translate-y-[4.5rem] hover:-translate-y-2 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-300 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Heart className="size-4 text-rose-400" />,
    title: "Khách hàng là trọng tâm",
    description: "Thành công của bạn là của chúng tôi",
    date: "Core Value #5",
    titleClassName: "text-rose-600 dark:text-rose-400",
    iconBgClassName: "bg-rose-500/20",
    className:
      "[grid-area:stack] translate-x-40 translate-y-24 hover:translate-y-4",
  },
];

export default function CultureSection() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0066FF]/5 to-purple-500/5 dark:from-[#0066FF]/10 dark:to-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-emerald-500/5 to-cyan-500/5 dark:from-emerald-500/10 dark:to-cyan-500/10 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <FadeIn distance={40} duration={0.8}>
            <div className="text-center lg:text-left">
              <motion.span
                className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                Văn hóa làm việc
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                Giá trị cốt lõi của team
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Những nguyên tắc định hình cách chúng tôi làm việc và phát triển
                cùng nhau mỗi ngày.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "100%", label: "Remote-first" },
                  { value: "Weekly", label: "Tech Talks" },
                  { value: "5+", label: "Năm kinh nghiệm" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-[#0066FF] dark:text-blue-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Display Cards */}
          <FadeIn delay={0.2} distance={40} duration={0.8}>
            <div className="flex justify-center items-center min-h-[400px] md:min-h-[450px]">
              <DisplayCards cards={cultureCards} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
