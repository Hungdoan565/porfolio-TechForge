"use client";

import { FadeIn } from "@/components/ui/motion-primitives";
import TechMarquee from "@/components/ui/TechMarquee";

export default function TechStackSection() {
  return (
    <section
      className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
      id="tech-stack"
    >
      {/* Background decoration - Subtle */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 dark:bg-blue-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 dark:bg-slate-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16 px-4">
            <span className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3">
              Công nghệ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Stack công nghệ hiện đại
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Sử dụng các công nghệ mới nhất đảm bảo hiệu suất và khả năng mở
              rộng
            </p>
          </div>
        </FadeIn>

        {/* Tech Marquee */}
        <FadeIn delay={0.2} distance={30}>
          <TechMarquee />
        </FadeIn>

        {/* Bottom caption */}
        <FadeIn delay={0.4} distance={20}>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-12 px-4">
            Và nhiều công nghệ khác tùy theo yêu cầu dự án
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
