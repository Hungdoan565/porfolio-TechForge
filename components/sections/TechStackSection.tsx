"use client";

import { FadeIn } from "@/components/ui/motion-primitives";
import TechMarquee from "@/components/ui/TechMarquee";

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decoration - Subtle */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16 px-4">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-3">
              Cong nghe
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Stack cong nghe hien dai
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Su dung cac cong nghe moi nhat dam bao hieu suat va kha nang mo
              rong
            </p>
          </div>
        </FadeIn>

        {/* Tech Marquee */}
        <FadeIn delay={0.2} distance={30}>
          <TechMarquee />
        </FadeIn>

        {/* Bottom caption */}
        <FadeIn delay={0.4} distance={20}>
          <p className="text-center text-sm text-slate-500 mt-12 px-4">
            Va nhieu cong nghe khac tuy theo yeu cau du an
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
