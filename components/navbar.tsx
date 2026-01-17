"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu as HeroUINavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Users,
  Award,
  Clock,
  HeadphonesIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import {
  Menu,
  MenuItem,
  ServiceItem,
  TechItem,
  CategoryHeader,
} from "@/components/ui/navbar-menu";
import {
  ReactIcon,
  VueIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  PythonIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  AWSIcon,
  GCPIcon,
  AzureIcon,
  DockerIcon,
} from "@/components/ui/tech-icons";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Smooth Scroll Handler
  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);

      if (element) {
        // Close dropdown
        setActive(null);

        // GSAP smooth scroll
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: href,
            offsetY: 80, // Navbar height offset
          },
          ease: "power3.inOut",
        });
      }
    }
  }, []);

  // Handle link click with scroll animation
  const handleLinkClick = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        scrollToSection(href);
      }
      setActive(null);
    },
    [scrollToSection],
  );

  return (
    <HeroUINavbar
      classNames={{
        base: `transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`,
        wrapper: "px-4 md:px-8",
      }}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo - Left */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-2 group"
            href="/"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Logo />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-[#0066FF] transition-colors">
                TechForge
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
                IT Solutions Partner
              </span>
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation - Center with Mega Menu */}
      <NavbarContent className="hidden lg:flex" justify="center">
        <Menu setActive={setActive}>
          {/* Trang chủ - Simple link */}
          <MenuItem
            active={active}
            href="/"
            item="Trang chủ"
            setActive={setActive}
          />

          {/* Dịch vụ - Redesigned Dropdown */}
          <MenuItem active={active} item="Dịch vụ" setActive={setActive}>
            <div className="grid grid-cols-2 gap-2 min-w-[360px]">
              <ServiceItem
                description="Website & ứng dụng web hiện đại"
                href="#services"
                icon={Globe}
                title="Web Development"
                onClick={() => handleLinkClick("#services")}
              />
              <ServiceItem
                description="Ứng dụng iOS & Android native"
                href="#services"
                icon={Smartphone}
                title="Mobile App"
                onClick={() => handleLinkClick("#services")}
              />
              <ServiceItem
                description="Hệ thống backend & RESTful API"
                href="#services"
                icon={Database}
                title="Backend & API"
                onClick={() => handleLinkClick("#services")}
              />
              <ServiceItem
                description="AWS, GCP, Azure & DevOps"
                href="#services"
                icon={Cloud}
                title="Cloud Solutions"
                onClick={() => handleLinkClick("#services")}
              />
            </div>
          </MenuItem>

          {/* Công nghệ - 3 Columns with Tech Icons */}
          <MenuItem active={active} item="Công nghệ" setActive={setActive}>
            <div className="grid grid-cols-3 gap-6 min-w-[520px]">
              {/* Frontend Column */}
              <div>
                <CategoryHeader title="Frontend" />
                <div className="space-y-1">
                  <TechItem
                    href="#tech-stack"
                    icon={ReactIcon}
                    name="React / Next.js"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={VueIcon}
                    name="Vue / Nuxt.js"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={TypeScriptIcon}
                    name="TypeScript"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={TailwindIcon}
                    name="Tailwind CSS"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                </div>
              </div>

              {/* Backend Column */}
              <div>
                <CategoryHeader title="Backend" />
                <div className="space-y-1">
                  <TechItem
                    href="#tech-stack"
                    icon={NodeIcon}
                    name="Node.js"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={PythonIcon}
                    name="Python / FastAPI"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={PostgreSQLIcon}
                    name="PostgreSQL"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={MongoDBIcon}
                    name="MongoDB"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                </div>
              </div>

              {/* DevOps Column */}
              <div>
                <CategoryHeader title="DevOps & Cloud" />
                <div className="space-y-1">
                  <TechItem
                    href="#tech-stack"
                    icon={AWSIcon}
                    name="AWS"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={GCPIcon}
                    name="Google Cloud"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={AzureIcon}
                    name="Azure"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                  <TechItem
                    href="#tech-stack"
                    icon={DockerIcon}
                    name="Docker"
                    onClick={() => handleLinkClick("#tech-stack")}
                  />
                </div>
              </div>
            </div>
          </MenuItem>

          {/* Về chúng tôi - Dropdown */}
          <MenuItem active={active} item="Về chúng tôi" setActive={setActive}>
            <div className="grid grid-cols-2 gap-3 min-w-[420px]">
              <ServiceItem
                description="Kinh nghiệm 5+ năm trong phát triển phần mềm"
                href="#why-us"
                icon={Users}
                title="Đội ngũ chuyên gia"
                onClick={() => handleLinkClick("#why-us")}
              />
              <ServiceItem
                description="Quy trình Agile/Scrum chuẩn quốc tế"
                href="#why-us"
                icon={Award}
                title="Chất lượng đảm bảo"
                onClick={() => handleLinkClick("#why-us")}
              />
              <ServiceItem
                description="Cam kết deadline, báo cáo minh bạch"
                href="#why-us"
                icon={Clock}
                title="Đúng tiến độ"
                onClick={() => handleLinkClick("#why-us")}
              />
              <ServiceItem
                description="Đồng hành bảo trì sau bàn giao sản phẩm"
                href="#why-us"
                icon={HeadphonesIcon}
                title="Hỗ trợ 24/7"
                onClick={() => handleLinkClick("#why-us")}
              />
            </div>
          </MenuItem>

          {/* FAQ - Simple link */}
          <MenuItem
            active={active}
            href="#faq"
            item="FAQ"
            setActive={setActive}
            onClick={() => handleLinkClick("#faq")}
          />
        </Menu>
      </NavbarContent>

      {/* Right side - Theme switch & CTA */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3 items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <MagnetizeButton
            className="min-w-[140px] px-6 py-3 text-sm"
            variant="primary"
            onClick={() => handleLinkClick("#contact")}
          >
            Liên hệ ngay
          </MagnetizeButton>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <HeroUINavbarMenu className="pt-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 flex flex-col gap-2"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  className="w-full text-slate-700 dark:text-slate-300 hover:text-[#0066FF] py-3 px-4 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
                  href={item.href}
                  size="lg"
                  onPress={() => {
                    setIsMenuOpen(false);
                    if (item.href.startsWith("#")) {
                      setTimeout(() => scrollToSection(item.href), 100);
                    }
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
          <motion.div
            animate={{ opacity: 1 }}
            className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <MagnetizeButton
              className="w-full"
              variant="primary"
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => scrollToSection("#contact"), 100);
              }}
            >
              Liên hệ ngay
            </MagnetizeButton>
          </motion.div>
        </motion.div>
      </HeroUINavbarMenu>
    </HeroUINavbar>
  );
};
