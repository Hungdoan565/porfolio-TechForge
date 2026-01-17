"use client";

import * as React from "react";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Moon,
  Phone,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Link } from "@heroui/link";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/motion-primitives";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Custom Zalo Icon - Outline style to match other social icons
const ZaloIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    {/* Back speech bubble */}
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const services = [
  "Custom Development",
  "Technical Consulting",
  "MVP Development",
  "Maintenance & Support",
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578280394648",
    tooltip: "Theo dõi trên Facebook",
  },
  {
    icon: ZaloIcon,
    label: "Zalo",
    href: "https://zalo.me/0945700813",
    tooltip: "Chat Zalo",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/techforge",
    tooltip: "Theo dõi trên Instagram",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/techforge",
    tooltip: "Kết nối trên LinkedIn",
  },
];

function FooterSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark";

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="relative lg:col-span-1">
            <FadeIn distance={20}>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">
                <span className="text-[#0066FF]">TechForge</span>
              </h2>
              <p className="mb-6 text-slate-400 text-sm leading-relaxed max-w-sm">
                Kiến tạo giải pháp số cho doanh nghiệp. Đối tác công nghệ tin
                cậy đồng hành từ ý tưởng đến sản phẩm hoàn chỉnh.
              </p>
              <Link
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white transition-colors"
                href="https://zalo.me/0945700813"
                target="_blank"
              >
                Chat Zalo
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </FadeIn>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-[#0066FF]/10 blur-2xl" />
          </div>

          {/* Services Column */}
          <div>
            <FadeIn delay={0.1} distance={20}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Dịch vụ
              </h3>
              <nav className="space-y-3">
                {services.map((service, i) => (
                  <Link
                    key={i}
                    className="block text-slate-300 hover:text-white transition-colors text-sm"
                    href="#services"
                  >
                    {service}
                  </Link>
                ))}
              </nav>
            </FadeIn>
          </div>

          {/* Contact Column */}
          <div>
            <FadeIn delay={0.2} distance={20}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Liên hệ
              </h3>
              <address className="space-y-4 text-sm not-italic">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-300">0945 700 813</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-300">TP. Hồ Chí Minh</span>
                </div>
              </address>
            </FadeIn>
          </div>

          {/* Social & Theme Column */}
          <div className="relative">
            <FadeIn delay={0.3} distance={20}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Kết nối
              </h3>
              <div className="mb-6 flex flex-wrap gap-3">
                <TooltipProvider>
                  {socialLinks.map((social, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          className="rounded-full border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:text-white text-slate-300"
                          size="icon"
                          variant="outline"
                        >
                          <Link
                            href={social.href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <social.icon />
                            <span className="sr-only">{social.label}</span>
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-slate-800 border-slate-700 text-white">
                        <p>{social.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>

              {/* Dark Mode Toggle */}
              {mounted && (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                  <Sun className="h-4 w-4 text-amber-400" />
                  <Switch
                    checked={isDarkMode}
                    className="data-[state=checked]:bg-[#0066FF] data-[state=unchecked]:bg-slate-600"
                    id="dark-mode"
                    onCheckedChange={handleThemeChange}
                  />
                  <Moon className="h-4 w-4 text-blue-400" />
                  <Label
                    className="text-slate-400 text-xs ml-1"
                    htmlFor="dark-mode"
                  >
                    {isDarkMode ? "Dark" : "Light"}
                  </Label>
                </div>
              )}
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TechForge. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <Link
              className="text-slate-500 hover:text-slate-300 transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-slate-500 hover:text-slate-300 transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
