"use client";

import type { LucideIcon } from "lucide-react";

import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { FadeIn } from "@/components/ui/motion-primitives";
import SpotlightCard from "@/components/ui/SpotlightCard";
import {
  Code2,
  Settings,
  Rocket,
  Check,
  ArrowRight,
} from "@/components/ui/icons";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    titleVi: "Phát triển phần mềm theo yêu cầu",
    description:
      "Xây dựng giải pháp phần mềm được thiết kế riêng, tối ưu cho quy trình kinh doanh của doanh nghiệp bạn.",
    features: [
      "Web Applications",
      "Mobile Applications",
      "Enterprise Systems",
      "API & Integration",
    ],
    color: "#0066FF",
    spotlightColor: "rgba(0, 102, 255, 0.15)",
    hoverBorderColor: "rgba(0, 102, 255, 0.4)",
    iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
    iconGlow: "bg-blue-500/30",
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    titleVi: "Tư vấn công nghệ",
    description:
      "Tư vấn chuyên sâu giúp doanh nghiệp đưa ra quyết định công nghệ đúng đắn, tiết kiệm chi phí và thời gian.",
    features: [
      "Tư vấn kiến trúc hệ thống",
      "Đánh giá & tối ưu code",
      "Lựa chọn tech stack",
      "Quy trình Agile/Scrum",
    ],
    color: "#10B981",
    spotlightColor: "rgba(16, 185, 129, 0.15)",
    hoverBorderColor: "rgba(16, 185, 129, 0.4)",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    iconGlow: "bg-emerald-500/30",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    titleVi: "Xây dựng MVP cho Startup",
    description:
      "Biến ý tưởng thành sản phẩm thực tế trong thời gian ngắn nhất, giúp startup nhanh chóng validate thị trường.",
    features: [
      "Rapid Prototyping",
      "Lean Development",
      "Iterative Approach",
      "Market-ready Product",
    ],
    color: "#F59E0B",
    spotlightColor: "rgba(245, 158, 11, 0.15)",
    hoverBorderColor: "rgba(245, 158, 11, 0.4)",
    iconBg: "bg-amber-500/10 dark:bg-amber-500/20",
    iconGlow: "bg-amber-500/30",
  },
];

// Icon Glow Component
function IconWithGlow({
  Icon,
  color,
  bgClass,
  glowClass,
}: {
  Icon: LucideIcon;
  color: string;
  bgClass: string;
  glowClass: string;
}) {
  return (
    <motion.div
      className="relative"
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, 0],
      }}
    >
      {/* Glow effect behind icon */}
      <div
        className={`absolute inset-0 ${glowClass} rounded-2xl blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
      />
      {/* Icon container */}
      <div
        className={`relative w-14 h-14 rounded-2xl ${bgClass} flex items-center justify-center transition-all duration-300`}
      >
        <Icon
          className="w-7 h-7 transition-transform duration-300"
          color={color}
          strokeWidth={1.5}
        />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
      id="services"
    >
      {/* Background decoration - Reduced on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs - Smaller on mobile */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 dark:from-emerald-500/10 dark:to-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Grid pattern for dark mode */}
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3"
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Dịch vụ
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Giải pháp công nghệ toàn diện
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Đáp ứng mọi nhu cầu số hóa của doanh nghiệp với đội ngũ chuyên gia
              giàu kinh nghiệm
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeIn
              key={index}
              delay={0.15 * index}
              distance={60}
              duration={0.8}
            >
              <SpotlightCard
                className="group h-full p-8"
                hoverBorderColor={service.hoverBorderColor}
                showBorderGlow={true}
                spotlightColor={service.spotlightColor}
              >
                {/* Icon */}
                <IconWithGlow
                  Icon={service.icon}
                  bgClass={service.iconBg}
                  color={service.color}
                  glowClass={service.iconGlow}
                />

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-6 mb-1 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p
                  className="text-sm font-medium mb-4 transition-colors duration-300"
                  style={{ color: service.color }}
                >
                  {service.titleVi}
                </p>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.1 * idx + 0.3 }}
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, x: 0 }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          backgroundColor: `${service.color}15`,
                        }}
                      >
                        <Check
                          className="w-3 h-3"
                          color={service.color}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group/link"
                  href="#contact"
                  style={{ color: service.color }}
                >
                  <span className="relative">
                    Tìm hiểu thêm
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300"
                      style={{ backgroundColor: service.color }}
                    />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5} distance={40} duration={0.8}>
          <div className="text-center mt-16">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Không tìm thấy dịch vụ phù hợp? Hãy liên hệ để được tư vấn giải
              pháp riêng.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:bg-[#0052CC]"
                href="#contact"
              >
                Liên hệ tư vấn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
