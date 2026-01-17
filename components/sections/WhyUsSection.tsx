"use client";

import React from "react";
import { motion } from "framer-motion";

// Import all new components
import { AsymmetricBento } from "@/components/ui/AsymmetricBento";
import { OrbitingTech } from "@/components/ui/OrbitingTech";
import { TestimonialTicker } from "@/components/ui/TestimonialTicker";
import { CulturePreview } from "@/components/ui/CulturePreview";
import { CaseStudyGrid } from "@/components/ui/CaseStudyCard";
import { FadeIn } from "@/components/ui/motion-primitives";

// ============================================
// DATA - Placeholder, thêm vào sau
// ============================================

// Testimonials data (placeholder)
const testimonials = [
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
];

// Culture values (placeholder)
const cultureValues = [
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

// Case studies (placeholder)
const caseStudies = [
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

// ============================================
// SECTION COMPONENT
// ============================================

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 lg:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 dark:from-emerald-500/10 dark:to-cyan-500/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* ============================================ */}
        {/* SECTION 1: Asymmetric Bento Hero + Stats */}
        {/* ============================================ */}
        <FadeIn distance={40} duration={0.8}>
          <AsymmetricBento
            heroTitle="Tại sao chọn chúng tôi?"
            heroSubtitle="Chúng tôi không chỉ code, chúng tôi xây dựng mối quan hệ đối tác lâu dài với khách hàng"
            floatingTestimonial={{
              quote: "Team làm việc chuyên nghiệp, đúng cam kết",
              author: "Nguyễn Văn A",
              role: "CEO, TechCorp",
            }}
          />
        </FadeIn>

        {/* ============================================ */}
        {/* SECTION 2: Orbiting Tech Stack */}
        {/* ============================================ */}
        <div className="mt-20 md:mt-28">
          <FadeIn distance={40} duration={0.8}>
            <div className="text-center mb-8 md:mb-12">
              <motion.span
                className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Tech Stack
              </motion.span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
                Công nghệ chúng tôi sử dụng
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} distance={40} duration={0.8}>
            <OrbitingTech className="max-w-[500px] md:max-w-[550px]" />
          </FadeIn>
        </div>

        {/* ============================================ */}
        {/* SECTION 3: Testimonial Ticker */}
        {/* ============================================ */}
        <div className="mt-20 md:mt-28">
          <FadeIn distance={40} duration={0.8}>
            <div className="text-center mb-6 md:mb-8">
              <motion.span
                className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Khách hàng nói gì
              </motion.span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
                Được tin tưởng bởi hàng chục doanh nghiệp
              </h3>
            </div>
          </FadeIn>

          <TestimonialTicker testimonials={testimonials} speed={40} />
        </div>

        {/* ============================================ */}
        {/* SECTION 4: Culture Preview */}
        {/* ============================================ */}
        <div className="mt-20 md:mt-28">
          <FadeIn distance={40} duration={0.8}>
            <div className="text-center mb-8 md:mb-12">
              <motion.span
                className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Văn hóa làm việc
              </motion.span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
                Giá trị cốt lõi của team
              </h3>
            </div>
          </FadeIn>

          <CulturePreview values={cultureValues} />
        </div>

        {/* ============================================ */}
        {/* SECTION 5: Case Study Previews */}
        {/* ============================================ */}
        <div className="mt-20 md:mt-28">
          <FadeIn distance={40} duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12">
              <div>
                <motion.span
                  className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Case Studies
                </motion.span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
                  Dự án tiêu biểu
                </h3>
              </div>

              <motion.a
                href="#portfolio"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#0066FF] dark:text-blue-400 font-medium hover:underline"
                whileHover={{ x: 5 }}
              >
                Xem tất cả dự án
                <span>→</span>
              </motion.a>
            </div>
          </FadeIn>

          <CaseStudyGrid caseStudies={caseStudies} />
        </div>
      </div>
    </section>
  );
}
