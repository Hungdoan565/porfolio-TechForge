"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "@heroui/link";

import { cn } from "@/lib/utils";
import { FadeIn, SlideIn } from "@/components/ui/motion-primitives";
import { ProjectBentoCard, Project } from "@/components/ui/ProjectBentoCard";

// Placeholder projects - user will replace with real data
const placeholderProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "E-commerce",
    description:
      "Nền tảng thương mại điện tử hiện đại với thanh toán tích hợp, quản lý kho và phân tích doanh số real-time.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Stripe"],
    metrics: [
      { label: "Revenue", value: "+185%" },
      { label: "Users", value: "50K+" },
    ],
    liveUrl: "#",
    color: "#10B981",
    featured: true,
  },
  {
    id: "2",
    title: "SaaS Dashboard",
    category: "SaaS",
    description:
      "Dashboard quản lý doanh nghiệp với analytics real-time và báo cáo tự động.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Docker"],
    metrics: [
      { label: "Performance", value: "3x" },
      { label: "Clients", value: "200+" },
    ],
    liveUrl: "#",
    color: "#F59E0B",
    isDarkImage: true, // Flag for dark mode images
  },
  {
    id: "3",
    title: "Mobile Banking App",
    category: "Mobile App",
    description:
      "Ứng dụng ngân hàng số với bảo mật cao, chuyển tiền nhanh và quản lý tài chính thông minh.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Downloads", value: "100K+" },
      { label: "Rating", value: "4.9" },
    ],
    liveUrl: "#",
    color: "#8B5CF6",
  },
  {
    id: "4",
    title: "Healthcare Platform",
    category: "Web App",
    description:
      "Nền tảng y tế số hóa kết nối bệnh nhân và bác sĩ với tính năng đặt lịch online.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    techStack: ["Next.js", "Tailwind", "AWS"],
    liveUrl: "#",
    color: "#0EA5E9",
  },
  {
    id: "5",
    title: "Real Estate Listing",
    category: "Web App",
    description:
      "Website bất động sản với bản đồ tương tác và tìm kiếm thông minh.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    color: "#EC4899",
  },
];

// Testimonial data - more relevant for case studies section
const testimonial = {
  quote:
    "TechForge đã giúp chúng tôi tăng 185% doanh thu chỉ trong 6 tháng. Đội ngũ chuyên nghiệp và tận tâm.",
  author: "Nguyễn Văn A",
  role: "CEO, ShopViet",
  avatar: "NV",
};

interface CaseStudiesSectionProps {
  projects?: Project[];
  className?: string;
  showHeader?: boolean;
  showViewAll?: boolean;
}

export function CaseStudiesSection({
  projects = placeholderProjects,
  className,
  showHeader = true,
  showViewAll = true,
}: CaseStudiesSectionProps) {
  // Separate featured project from others
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section
      className={cn(
        "py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50",
        className,
      )}
      id="case-studies"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <FadeIn>
                <span className="inline-block px-3 py-1 bg-slate-200/80 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium mb-4">
                  CASE STUDIES
                </span>
              </FadeIn>
              <SlideIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                  Dự án tiêu biểu
                </h2>
              </SlideIn>
              <FadeIn delay={0.2}>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  Những dự án đã triển khai thành công, mang lại giá trị thực
                  cho khách hàng.
                </p>
              </FadeIn>
            </div>

            {showViewAll && (
              <FadeIn delay={0.3}>
                <Link
                  className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium group"
                  href="/projects"
                >
                  Xem tất cả dự án
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeIn>
            )}
          </div>
        )}

        {/* Bento Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Row 1: Featured (2 cols) + Testimonial Card (1 col) */}
          <motion.div
            className="md:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectBentoCard project={featuredProject} size="large" />
          </motion.div>

          {/* Testimonial Card - contextually relevant */}
          <motion.div
            className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/50 p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <Quote className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-4" />
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-300">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2: 3 projects */}
          {otherProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectBentoCard project={project} size="medium" />
            </motion.div>
          ))}

          {/* Row 3: Remaining project + CTA Card */}
          {otherProjects.slice(3, 4).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectBentoCard project={project} size="medium" />
            </motion.div>
          ))}

          {/* CTA Card - subtle dark, button is the only accent */}
          <motion.div
            className="md:col-span-1 lg:col-span-2 rounded-2xl bg-slate-900 dark:bg-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">
                Có dự án cần thực hiện?
              </h3>
              <p className="text-slate-400">
                Liên hệ ngay để được tư vấn miễn phí
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium rounded-full transition-colors whitespace-nowrap"
              href="/contact"
            >
              Liên hệ ngay
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
