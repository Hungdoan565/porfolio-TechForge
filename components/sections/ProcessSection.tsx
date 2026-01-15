"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/motion-primitives";
import {
  MessageCircle,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Zap,
} from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  icon: React.ElementType;
  status: "completed" | "active" | "upcoming";
  duration: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Tư vấn & Phân tích",
    shortTitle: "Tư vấn",
    description: "Lắng nghe và phân tích nhu cầu, đề xuất giải pháp phù hợp",
    details: [
      "Họp kickoff meeting",
      "Phân tích yêu cầu chi tiết",
      "Đề xuất tech stack",
      "Báo giá minh bạch",
    ],
    icon: MessageCircle,
    status: "completed",
    duration: "1-2 ngày",
  },
  {
    id: 2,
    title: "Thiết kế & Lập kế hoạch",
    shortTitle: "Thiết kế",
    description: "Thiết kế UI/UX và lập kế hoạch phát triển chi tiết",
    details: [
      "Wireframe & Mockup",
      "System Architecture",
      "Sprint planning",
      "Timeline rõ ràng",
    ],
    icon: Layers,
    status: "completed",
    duration: "1-2 tuần",
  },
  {
    id: 3,
    title: "Phát triển",
    shortTitle: "Dev",
    description: "Coding theo Agile/Scrum với báo cáo tiến độ định kỳ",
    details: [
      "Sprint 2 tuần",
      "Daily standup",
      "Code review",
      "Demo hàng tuần",
    ],
    icon: Code2,
    status: "active",
    duration: "4-12 tuần",
  },
  {
    id: 4,
    title: "Testing & QA",
    shortTitle: "Testing",
    description: "Kiểm thử kỹ lưỡng đảm bảo chất lượng sản phẩm",
    details: [
      "Unit testing",
      "Integration testing",
      "UAT với khách hàng",
      "Performance testing",
    ],
    icon: ShieldCheck,
    status: "upcoming",
    duration: "1-2 tuần",
  },
  {
    id: 5,
    title: "Bàn giao & Hỗ trợ",
    shortTitle: "Launch",
    description: "Deploy production và hỗ trợ sau bàn giao",
    details: [
      "Deploy lên server",
      "Training sử dụng",
      "Bảo hành 1-3 tháng",
      "Support 24/7",
    ],
    icon: Rocket,
    status: "upcoming",
    duration: "Liên tục",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-rotate through steps
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 5) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getStatusColor = (status: ProcessStep["status"]) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "active":
        return "bg-[#0066FF] animate-pulse";
      case "upcoming":
        return "bg-slate-300";
      default:
        return "bg-slate-300";
    }
  };

  const getStepPosition = (index: number, total: number) => {
    const angle = (index / total) * 360 - 90; // Start from top
    const radius = 160;
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

  const activeStepData = processSteps.find((s) => s.id === activeStep);

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decoration - Subtle */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-3">
              Quy trình
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Quy trình làm việc chuyên nghiệp
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              5 bước đơn giản để biến ý tưởng thành sản phẩm hoàn chỉnh
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Orbital Timeline - Desktop */}
          <FadeIn distance={50} duration={0.8} delay={0.2}>
            <div
              ref={containerRef}
              className="relative aspect-square max-w-md mx-auto hidden md:flex items-center justify-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Orbit ring */}
              <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-slate-200" />

              {/* Center content */}
              <motion.div
                className="absolute w-32 h-32 rounded-full bg-[#0066FF] flex items-center justify-center shadow-lg shadow-blue-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Step nodes */}
              {processSteps.map((step, index) => {
                const pos = getStepPosition(index, processSteps.length);
                const isActive = step.id === activeStep;
                const Icon = step.icon;

                return (
                  <motion.button
                    key={step.id}
                    className={`absolute w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-xl shadow-blue-500/20 scale-125 z-20"
                        : "bg-white/80 hover:bg-white hover:shadow-lg z-10"
                    } border-2 ${
                      isActive ? "border-[#0066FF]" : "border-slate-200"
                    }`}
                    style={{
                      left: `calc(50% + ${pos.x}px - 28px)`,
                      top: `calc(50% + ${pos.y}px - 28px)`,
                    }}
                    onClick={() => {
                      setActiveStep(step.id);
                      setIsAutoPlaying(false);
                    }}
                    whileHover={{ scale: isActive ? 1.25 : 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? "text-[#0066FF]" : "text-slate-500"
                      }`}
                    />
                    {/* Status indicator */}
                    <span
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(
                        step.status,
                      )}`}
                    />
                  </motion.button>
                );
              })}

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {processSteps.map((step, index) => {
                  if (index === processSteps.length - 1) return null;
                  const pos1 = getStepPosition(index, processSteps.length);
                  const pos2 = getStepPosition(index + 1, processSteps.length);
                  const isActive =
                    step.id === activeStep || step.id + 1 === activeStep;
                  return (
                    <line
                      key={`line-${index}`}
                      x1={`calc(50% + ${pos1.x}px)`}
                      y1={`calc(50% + ${pos1.y}px)`}
                      x2={`calc(50% + ${pos2.x}px)`}
                      y2={`calc(50% + ${pos2.y}px)`}
                      stroke={isActive ? "#0066FF" : "#e2e8f0"}
                      strokeWidth="2"
                      strokeDasharray={isActive ? "0" : "4"}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Mobile Steps List */}
            <div className="md:hidden space-y-3">
              {processSteps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === activeStep;
                return (
                  <button
                    key={step.id}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-blue-50 border-2 border-blue-200"
                        : "bg-white border border-slate-200"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-[#0066FF] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p
                        className={`font-semibold ${
                          isActive ? "text-[#0066FF]" : "text-slate-800"
                        }`}
                      >
                        {step.shortTitle}
                      </p>
                      <p className="text-sm text-slate-500">{step.duration}</p>
                    </div>
                    <span
                      className={`ml-auto w-3 h-3 rounded-full ${getStatusColor(
                        step.status,
                      )}`}
                    />
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Step Details */}
          <FadeIn distance={50} duration={0.8} delay={0.3}>
            <AnimatePresence mode="wait">
              {activeStepData && (
                <motion.div
                  key={activeStepData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                >
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-[#0066FF]">
                      0{activeStepData.id}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {activeStepData.title}
                      </h3>
                      <span className="text-sm text-[#0066FF] font-medium">
                        {activeStepData.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 text-lg">
                    {activeStepData.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-3 mb-6">
                    {activeStepData.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                        <span className="text-slate-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#0066FF] font-semibold hover:text-[#0052CC] transition-colors group"
                  >
                    Bắt đầu dự án
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
