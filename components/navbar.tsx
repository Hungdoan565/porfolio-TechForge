"use client";

import { useState, useEffect } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: `transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`,
        wrapper: "px-4 md:px-8",
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-2 group"
            href="/"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-800 group-hover:text-[#0066FF] transition-colors">
                TechForge
              </span>
              <span className="text-[10px] text-slate-500 -mt-1 hidden sm:block">
                IT Solutions Partner
              </span>
            </div>
          </NextLink>
        </NavbarBrand>

        <div className="hidden lg:flex gap-1 justify-start ml-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0066FF] transition-colors group"
                href={item.href}
              >
                {item.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0066FF] group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3 items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="#contact">
            <MagnetizeButton
              variant="primary"
              className="min-w-[140px] px-6 py-3 text-sm"
            >
              Liên hệ ngay
            </MagnetizeButton>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="pt-6 bg-white/95 backdrop-blur-xl">
        <motion.div
          className="mx-4 flex flex-col gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  size="lg"
                  className="w-full text-slate-700 hover:text-[#0066FF] py-3 px-4 rounded-xl hover:bg-blue-50 transition-all"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
          <motion.div
            className="mt-4 pt-4 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="w-full"
              onPress={() => setIsMenuOpen(false)}
            >
              <MagnetizeButton variant="primary" className="w-full">
                Liên hệ ngay
              </MagnetizeButton>
            </Link>
          </motion.div>
        </motion.div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
