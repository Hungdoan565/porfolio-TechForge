"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
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

import { FadeIn, CountUp } from "@/components/ui/motion-primitives";
import {
  ReactIcon,
  NextJSIcon,
  TypeScriptIcon,
  NodeJSIcon,
  PythonIcon,
  DockerIcon,
  TailwindIcon,
  PostgreSQLIcon,
} from "@/components/ui/tech-brand-icons";

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
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      transition={{ delay: delay + 0.5, duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl
          bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl
          border border-white/50 dark:border-slate-700/50
          shadow-lg shadow-black/5 dark:shadow-black/20"
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
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

// Tech icon for scroll reveal - with brand SVG icons
function TechIconReveal({
  icon: Icon,
  name,
  scrollProgress,
  index,
  total,
}: {
  icon: React.ElementType;
  name: string;
  scrollProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  // Calculate stagger timing for each icon
  const startThreshold = 0.1 + (index / total) * 0.3;
  const endThreshold = startThreshold + 0.15;

  const opacity = useTransform(
    scrollProgress,
    [startThreshold, endThreshold],
    [0, 1],
  );

  const yPos = useTransform(
    scrollProgress,
    [startThreshold, endThreshold],
    [40, 0],
  );

  const scaleVal = useTransform(
    scrollProgress,
    [startThreshold, endThreshold],
    [0.7, 1],
  );

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      style={{ opacity, y: yPos, scale: scaleVal }}
    >
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {name}
      </span>
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
    { icon: ReactIcon, name: "React" },
    { icon: NextJSIcon, name: "Next.js" },
    { icon: TypeScriptIcon, name: "TypeScript" },
    { icon: NodeJSIcon, name: "Node.js" },
    { icon: PythonIcon, name: "Python" },
    { icon: TailwindIcon, name: "Tailwind" },
    { icon: PostgreSQLIcon, name: "PostgreSQL" },
    { icon: DockerIcon, name: "Docker" },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[120vh] w-full overflow-hidden bg-slate-50 dark:bg-slate-900"
      id="hero"
    >
      {/* Background Layer - hero-video.webp bleeding right (full width, centered laptop) */}
      <motion.div
        className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[60%] h-full z-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        {/* The image with aspect ratio to prevent CLS */}
        <div className="relative w-full h-full" style={{ aspectRatio: '16/9' }}>
          <Image
            fill
            priority
            alt="TechForge Portfolio Showcase"
            className="object-cover object-center"
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 60vw"
            src="/hero-video.webp"
          />
        </div>

        {/* Gradient mask - fades from left to right (stronger on mobile) */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r 
            from-slate-50 via-slate-50/90 md:via-slate-50/70 to-transparent
            dark:from-slate-900 dark:via-slate-900/90 md:dark:via-slate-900/70 dark:to-transparent"
        />

        {/* Top/Bottom gradient for blending */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b 
            from-slate-50 via-transparent to-slate-50
            dark:from-slate-900 dark:via-transparent dark:to-slate-900"
        />
      </motion.div>

      {/* Floating Glassmorphism Badges - Hidden on mobile/tablet for performance */}
      <motion.div
        className="absolute inset-0 z-20 hidden xl:block"
        style={{ y: badgesY, opacity: badgesOpacity }}
      >
        {glassBadges.map((badge) => (
          <GlassBadge
            key={badge.label}
            className={badge.className}
            color={badge.color}
            delay={badge.delay}
            icon={badge.icon}
            label={badge.label}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
                </span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  IT Solutions Partner
                </span>
              </div>
            </FadeIn>

            {/* Main Title */}
            <FadeIn delay={0.1} distance={40}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-slate-900 dark:text-white">Tech</span>
                <span className="text-[#0066FF]">Forge</span>
              </h1>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={0.2} distance={40}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
                Kiến tạo giải pháp số
                <br />
                <span className="text-[#0066FF]">cho doanh nghiệp</span>
              </h2>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.3} distance={40}>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
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

            {/* Stats Row - Responsive spacing */}
            <FadeIn delay={0.5} distance={50}>
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center min-w-[60px]">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0066FF] flex items-baseline justify-center tabular-nums">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <CountUp
                        delay={0.5 + index * 0.2}
                        duration={2.5}
                        end={stat.value}
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </motion.div>
      </div>

      {/* Tech Icons Scroll Reveal Section */}
      <div className="absolute bottom-[15%] left-0 right-0 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            {techIcons.map((tech, index) => (
              <TechIconReveal
                key={tech.name}
                icon={tech.icon}
                index={index}
                name={tech.name}
                scrollProgress={scrollYProgress}
                total={techIcons.length}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0 }}
        style={{ opacity: textOpacity }}
        transition={{ delay: 1 }}
      >
        <a
          className="flex flex-col items-center gap-2 group cursor-pointer"
          href="#services"
        >
          <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
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
            <ChevronDown className="w-6 h-6 text-slate-300 dark:text-slate-600 group-hover:text-[#0066FF] transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
