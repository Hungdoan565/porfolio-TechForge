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
    title: "Chat luong code",
    description:
      "Code sach, co documentation, de bao tri va mo rong theo chuan quoc te",
    color: "text-[#0066FF]",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Giao dung deadline",
    description: "98% du an giao dung han cam ket voi bao cao tien do dinh ky",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Headphones,
    title: "Ho tro sau ban giao",
    description:
      "Bao hanh va ho tro ky thuat lien tuc sau khi hoan thanh du an",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: LayoutGrid,
    title: "Quy trinh chuyen nghiep",
    description:
      "Lam viec theo Agile/Scrum voi sprint ro rang, minh bach tu dau den cuoi",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Wallet,
    title: "Gia ca minh bach",
    description:
      "Bao gia ro rang, chi tiet, khong phat sinh chi phi an trong suot du an",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Lock,
    title: "Bao mat thong tin",
    description:
      "Ky NDA bao mat, dam bao an toan tuyet doi cho du lieu doanh nghiep",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Du an hoan thanh" },
  { value: 30, suffix: "+", label: "Khach hang tin tuong" },
  { value: 5, suffix: "+", label: "Nam kinh nghiem" },
  { value: 10, suffix: "+", label: "Cong nghe thanh thao" },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration - Subtle */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-3">
              Tai sao chon chung toi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Cam ket chat luong va su hai long
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chung toi khong chi code, chung toi xay dung moi quan he doi tac
              lau dai voi khach hang
            </p>
          </div>
        </FadeIn>

        {/* Stats Row - Clean Style */}
        <FadeIn distance={50} duration={0.8} delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative text-center p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-[#0066FF] flex items-baseline justify-center">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={0.2 * index}
                    className="tabular-nums"
                  />
                  <span>{stat.suffix}</span>
                </div>
                <span className="text-sm text-slate-600 mt-3 block font-medium">
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
                className="group p-6 md:p-8 rounded-3xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-200 relative overflow-hidden"
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

                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0066FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
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
