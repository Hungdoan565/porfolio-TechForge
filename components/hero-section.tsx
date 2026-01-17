"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Programming language icons as SVG components
const TechIcons = {
  html: (
    <svg className="w-full h-full" viewBox="0 0 128 128">
      <path
        d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
        fill="#E44D26"
      />
      <path d="M64 116.8l36.378-10.086 8.559-95.878H64z" fill="#F16529" />
      <path
        d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        fill="#EBEBEB"
      />
      <path
        d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        fill="#fff"
      />
    </svg>
  ),
  react: (
    <svg className="w-full h-full" viewBox="0 0 128 128">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 5.2-19.7 12.6-19.7 20.8 0 8.2 7.2 15.7 19.7 20.8 2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-5.2 19.7-12.6 19.7-20.8s-7.2-15.7-19.7-20.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-2.2-.6-4.4-1.3-6.4-2.1-10-3.8-15.7-8.8-15.7-13.5zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 2.2.6 4.4 1.3 6.4 2.1 10 3.8 15.7 8.8 15.7 13.5 0 4.6-5.7 9.6-15.7 13.4z" />
      </g>
    </svg>
  ),
  java: (
    <svg className="w-full h-full" viewBox="0 0 128 128">
      <path
        d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
        fill="#0074BD"
      />
      <path
        d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
        fill="#EA2D2E"
      />
      <path
        d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
        fill="#0074BD"
      />
      <path
        d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
        fill="#EA2D2E"
      />
      <path
        d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
        fill="#0074BD"
      />
    </svg>
  ),
  csharp: (
    <svg className="w-full h-full" viewBox="0 0 128 128">
      <path
        d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
        fill="#9B4F96"
      />
      <path
        d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
        fill="#68217A"
      />
      <path
        d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
        fill="#fff"
      />
      <path
        d="M82 74h4v-8h8v-4h-8v-8h-4v8h-8v4h8zM100 74h4v-8h8v-4h-8v-8h-4v8h-8v4h8z"
        fill="#fff"
      />
    </svg>
  ),
  nextjs: (
    <svg className="w-full h-full" viewBox="0 0 128 128">
      <circle cx="64" cy="64" fill="currentColor" r="64" />
      <path
        d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.586 67.878a64.216 64.216 0 006.717-5.203zM81.778 38.4h8.533v51.2h-8.533z"
        fill="#f8fafc"
      />
    </svg>
  ),
};

interface FloatingIconProps {
  icon: keyof typeof TechIcons;
  className?: string;
  delay?: number;
}

const FloatingIcon = ({
  icon,
  className = "",
  delay = 0,
}: FloatingIconProps) => (
  <div
    className={`floating-icon absolute w-12 h-12 md:w-16 md:h-16 opacity-0 ${className}`}
    data-delay={delay}
  >
    <div className="w-full h-full drop-shadow-lg filter backdrop-blur-sm bg-white/10 rounded-xl p-2">
      {TechIcons[icon]}
    </div>
  </div>
);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const iconsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const icons = gsap.utils.toArray<HTMLElement>(".floating-icon");

      // Set initial state - icons clustered at the laptop
      gsap.set(icons, {
        opacity: 0,
        scale: 0.3,
        y: 50,
      });

      // Create the main scroll-driven timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Laptop subtle parallax
      tl.to(
        laptopRef.current,
        {
          y: -30,
          scale: 0.95,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // Animate each icon outward with staggered timing
      icons.forEach((icon, index) => {
        const delay = parseFloat(icon.dataset.delay || "0");
        const angle = (index / icons.length) * Math.PI * 2;
        const radius = 150 + Math.random() * 100;

        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius - 200; // Float upward

        tl.to(
          icon,
          {
            opacity: 1,
            scale: 1,
            x: xOffset,
            y: yOffset,
            rotation: (Math.random() - 0.5) * 20,
            ease: "power2.out",
            duration: 0.8,
          },
          delay * 0.1,
        );
      });

      // Fade out icons at the end
      tl.to(
        icons,
        {
          opacity: 0,
          y: "-=100",
          duration: 0.4,
          stagger: 0.05,
        },
        0.7,
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      id="hero"
    >
      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 md:px-8 mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            TechForge
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto mb-2">
          Đồng hành cùng bạn trong mọi dự án CNTT
        </p>
        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-8">
          Code thuê • Đồ án • Mentor dự án chuyên nghiệp
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })}
            href="#contact"
          >
            Liên hệ ngay
          </Link>
          <Link
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              size: "lg",
            })}
            href="#services"
          >
            Xem dịch vụ
          </Link>
        </div>
      </div>

      {/* Laptop + Icons Container */}
      <div className="relative w-full max-w-4xl mx-auto px-4">
        {/* Floating Icons */}
        <div
          ref={iconsContainerRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <FloatingIcon
            className="left-[10%] top-[20%]"
            delay={0}
            icon="html"
          />
          <FloatingIcon
            className="right-[15%] top-[15%]"
            delay={1}
            icon="react"
          />
          <FloatingIcon
            className="left-[5%] bottom-[30%]"
            delay={2}
            icon="java"
          />
          <FloatingIcon
            className="right-[10%] bottom-[25%]"
            delay={3}
            icon="csharp"
          />
          <FloatingIcon
            className="left-[20%] top-[10%]"
            delay={4}
            icon="nextjs"
          />
        </div>

        {/* Laptop Image */}
        <div ref={laptopRef} className="relative z-10 w-full">
          <img
            alt="NextGen Dev Laptop with code"
            className="w-full h-auto object-contain drop-shadow-2xl"
            loading="eager"
            src="/hero-video.webp"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
