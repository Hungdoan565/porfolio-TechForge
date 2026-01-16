"use client";

import { FadeIn, CountUp } from "@/components/ui/motion-primitives";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Headphones,
  LayoutGrid,
  Wallet,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Chất lượng code",
    description:
      "Code sạch, có documentation, dễ bảo trì và mở rộng theo chuẩn quốc tế",
    color: "text-[#0066FF]",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Giao đúng deadline",
    description: "98% dự án giao đúng hạn cam kết với báo cáo tiến độ định kỳ",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ sau bàn giao",
    description:
      "Bảo hành và hỗ trợ kỹ thuật liên tục sau khi hoàn thành dự án",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: LayoutGrid,
    title: "Quy trình chuyên nghiệp",
    description:
      "Làm việc theo Agile/Scrum với sprint rõ ràng, minh bạch từ đầu đến cuối",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Wallet,
    title: "Giá cả minh bạch",
    description:
      "Báo giá rõ ràng, chi tiết, không phát sinh chi phí ẩn trong suốt dự án",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Lock,
    title: "Bảo mật thông tin",
    description:
      "Ký NDA bảo mật, đảm bảo an toàn tuyệt đối cho dữ liệu doanh nghiệp",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Dự án hoàn thành" },
  { value: 30, suffix: "+", label: "Khách hàng tin tưởng" },
  { value: 5, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 10, suffix: "+", label: "Công nghệ thành thạo" },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background decoration - Subtle */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-50 dark:bg-slate-800/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3">
              Tại sao chọn chúng tôi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Cam kết chất lượng và sự hài lòng
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Chúng tôi không chỉ code, chúng tôi xây dựng mối quan hệ đối tác
              lâu dài với khách hàng
            </p>
          </div>
        </FadeIn>

        {/* Stats Row - Clean Style */}
        <FadeIn distance={50} duration={0.8} delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative text-center p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-[#0066FF] dark:text-blue-400 flex items-baseline justify-center">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={0.2 * index}
                    className="tabular-nums"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-300 mt-3 block font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              distance={40}
              duration={0.6}
              delay={0.08 * index}
            >
              <motion.div
                className="group p-6 md:p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`relative w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-5`}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
