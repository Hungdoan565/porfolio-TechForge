"use client";

import { FadeIn, HoverScale } from "@/components/ui/motion-primitives";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
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
    titleVi: "Phat trien phan mem theo yeu cau",
    description:
      "Xay dung giai phap phan mem duoc thiet ke rieng, toi uu cho quy trinh kinh doanh cua doanh nghiep ban.",
    features: [
      "Web Applications",
      "Mobile Applications",
      "Enterprise Systems",
      "API & Integration",
    ],
    color: "#0066FF",
    bgColor: "bg-blue-50",
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    titleVi: "Tu van cong nghe",
    description:
      "Tu van chuyen sau giup doanh nghiep dua ra quyet dinh cong nghe dung dan, tiet kiem chi phi va thoi gian.",
    features: [
      "Tu van kien truc he thong",
      "Danh gia & toi uu code",
      "Lua chon tech stack",
      "Quy trinh Agile/Scrum",
    ],
    color: "#10B981",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    titleVi: "Xay dung MVP cho Startup",
    description:
      "Bien y tuong thanh san pham thuc te trong thoi gian ngan nhat, giup startup nhanh chong validate thi truong.",
    features: [
      "Rapid Prototyping",
      "Lean Development",
      "Iterative Approach",
      "Market-ready Product",
    ],
    color: "#F59E0B",
    bgColor: "bg-amber-50",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-3">
              Dich vu
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Giai phap cong nghe toan dien
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dap ung moi nhu cau so hoa cua doanh nghiep voi doi ngu chuyen gia
              giau kinh nghiem
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeIn
              key={index}
              distance={60}
              duration={0.8}
              delay={0.1 * index}
            >
              <HoverScale scale={1.02}>
                <motion.div
                  className="group h-full flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-500 relative overflow-hidden"
                  whileHover={{
                    y: -4,
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`relative w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon
                      className="w-7 h-7"
                      style={{ color: service.color }}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-[#0066FF] transition-colors">
                    {service.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: service.color }}
                  >
                    {service.titleVi}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-2.5 text-sm text-slate-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Check
                            className="w-3 h-3 text-[#0066FF]"
                            strokeWidth={3}
                          />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:text-[#0052CC] transition-colors group/link"
                  >
                    Tim hieu them
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </motion.div>
              </HoverScale>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn distance={40} duration={0.8} delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4">
              Khong tim thay dich vu phu hop? Hay lien he de duoc tu van giai
              phap rieng.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white rounded-full font-semibold hover:bg-[#0052CC] transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Lien he tu van
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
