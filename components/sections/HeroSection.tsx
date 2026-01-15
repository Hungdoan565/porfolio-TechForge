"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { FadeIn, CountUp } from "@/components/ui/motion-primitives";
import {
  ChevronDown,
  ArrowRight,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Zap,
  Sparkles,
} from "lucide-react";
import { Link } from "@heroui/link";
import Image from "next/image";

// Glassmorphism floating badge component
function GlassBadge({
  icon: Icon,
  label,
  color,
  delay = 0,
  className = "",
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl
          bg-white/70 backdrop-blur-xl
          border border-white/50
          shadow-lg shadow-black/5"
        animate={{ y: [-4, 4, -4] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05, y: 0 }}
      >
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <span className="text-sm font-semibold text-slate-700">{label}</span>
      </motion.div>
    </motion.div>
  );
}

// Tech icon for scroll reveal - simplified version
function TechIconReveal({
  icon: Icon,
  color,
  name,
  delay,
}: {
  icon: React.ElementType;
  color: string;
  name: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-white"
        style={{ boxShadow: `0 8px 30px ${color}25` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      <span className="text-xs font-medium text-slate-500">{name}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  // Scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for different elements
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const badgesY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const badgesOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const stats = [
    { value: 50, suffix: "+", label: "Dự án" },
    { value: 98, suffix: "%", label: "Đúng hạn" },
    { value: 24, prefix: "<", suffix: "h", label: "Phản hồi" },
  ];

  const glassBadges = [
    {
      icon: Code2,
      label: "Frontend",
      color: "#0066FF",
      className: "top-[15%] right-[8%]",
      delay: 0,
    },
    {
      icon: Database,
      label: "Backend",
      color: "#10B981",
      className: "top-[35%] right-[3%]",
      delay: 0.1,
    },
    {
      icon: Cpu,
      label: "AI/ML",
      color: "#8B5CF6",
      className: "top-[55%] right-[6%]",
      delay: 0.2,
    },
    {
      icon: Globe,
      label: "Cloud",
      color: "#F59E0B",
      className: "top-[75%] right-[10%]",
      delay: 0.3,
    },
    {
      icon: Layers,
      label: "DevOps",
      color: "#EC4899",
      className: "top-[25%] right-[25%]",
      delay: 0.15,
    },
    {
      icon: Zap,
      label: "Fast",
      color: "#06B6D4",
      className: "top-[65%] right-[22%]",
      delay: 0.25,
    },
  ];

  const techIcons = [
    { icon: Code2, color: "#E34F26", name: "HTML5" },
    { icon: Layers, color: "#1572B6", name: "CSS3" },
    { icon: Zap, color: "#F7DF1E", name: "JavaScript" },
    { icon: Globe, color: "#61DAFB", name: "React" },
    { icon: Database, color: "#000000", name: "Next.js" },
    { icon: Cpu, color: "#3178C6", name: "TypeScript" },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[120vh] w-full overflow-hidden bg-slate-50"
    >
      {/* Background Layer - hero-video.webp bleeding right */}
      <motion.div
        className="absolute top-0 right-0 w-[65%] h-full z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        {/* The image */}
        <div className="relative w-full h-full">
          <Image
            src="/hero-video.webp"
            alt="TechForge Portfolio Showcase"
            fill
            className="object-cover object-left"
            priority
            quality={85}
          />
        </div>

        {/* Gradient mask - fades from left to right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              to right,
              rgb(248, 250, 252) 0%,
              rgb(248, 250, 252) 10%,
              rgba(248, 250, 252, 0.95) 20%,
              rgba(248, 250, 252, 0.7) 35%,
              rgba(248, 250, 252, 0.3) 50%,
              rgba(248, 250, 252, 0) 70%
            )`,
          }}
        />

        {/* Top/Bottom gradient for blending */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              to bottom,
              rgb(248, 250, 252) 0%,
              transparent 15%,
              transparent 85%,
              rgb(248, 250, 252) 100%
            )`,
          }}
        />
      </motion.div>

      {/* Floating Glassmorphism Badges */}
      <motion.div
        className="absolute inset-0 z-20 hidden lg:block"
        style={{ y: badgesY, opacity: badgesOpacity }}
      >
        {glassBadges.map((badge) => (
          <GlassBadge
            key={badge.label}
            icon={badge.icon}
            label={badge.label}
            color={badge.color}
            delay={badge.delay}
            className={badge.className}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <motion.div
          className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="max-w-xl">
            {/* Badge */}
            <FadeIn delay={0} distance={30}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
                </span>
                <span className="text-sm font-medium text-slate-600">
                  IT Solutions Partner
                </span>
              </div>
            </FadeIn>

            {/* Main Title */}
            <FadeIn delay={0.1} distance={40}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-slate-900">Tech</span>
                <span className="text-[#0066FF]">Forge</span>
              </h1>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={0.2} distance={40}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 mb-4">
                Kiến tạo giải pháp số
                <br />
                <span className="text-[#0066FF]">cho doanh nghiệp</span>
              </h2>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.3} distance={40}>
              <p className="text-base md:text-lg text-slate-500 mb-8 leading-relaxed">
                Đối tác công nghệ tin cậy đồng hành cùng doanh nghiệp từ ý tưởng
                đến sản phẩm hoàn chỉnh. Chúng tôi giúp bạn số hóa, tối ưu quy
                trình và tăng trưởng bền vững.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4} distance={50}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="#contact">
                  <motion.button
                    className="btn-primary inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Tư vấn miễn phí
                  </motion.button>
                </Link>
                <Link href="#services">
                  <motion.button
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Xem dịch vụ
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </FadeIn>

            {/* Stats Row */}
            <FadeIn delay={0.5} distance={50}>
              <div className="flex items-center gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#0066FF] flex items-baseline justify-center tabular-nums">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        delay={0.5 + index * 0.2}
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </div>
                    <span className="text-sm text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </div>

      {/* Tech Icons Scroll Reveal Section */}
      <div className="absolute bottom-[15%] left-0 right-0 z-30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {techIcons.map((tech, index) => (
              <TechIconReveal
                key={tech.name}
                icon={tech.icon}
                color={tech.color}
                name={tech.name}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ opacity: textOpacity }}
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-xs text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
            Khám phá
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-slate-300 group-hover:text-[#0066FF] transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
