import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import DefaultLayout from "@/layouts/default";
import {
  HeroSection,
  ServicesSection,
  WhyUsSection,
  TechStackSection,
  FAQSection,
  ContactSection,
  ProcessSection,
  CultureSection,
} from "@/components/sections";
import { FadeIn } from "@/components/ui/motion-primitives";
import { Phone, MapPin, ArrowUpRight } from "@/components/ui/icons";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section - Window/Portal Effect */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Process Section - Orbital Timeline */}
      <ProcessSection />

      {/* Why Choose Us Section */}
      <WhyUsSection />

      {/* Culture Section - Team Values */}
      <CultureSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer - Minimal & Clean */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Brand Column */}
              <div className="md:col-span-5">
                <FadeIn distance={20}>
                  <h3 className="text-2xl font-bold mb-4">
                    <span className="text-[#0066FF]">TechForge</span>
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                    Kiến tạo giải pháp số cho doanh nghiệp. Đối tác công nghệ
                    tin cậy đồng hành từ ý tưởng đến sản phẩm hoàn chỉnh.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white transition-colors"
                      href="https://zalo.me/0945700813"
                      target="_blank"
                    >
                      Chat Zalo
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Services Column */}
              <div className="md:col-span-3">
                <FadeIn delay={0.1} distance={20}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Dịch vụ
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Custom Development",
                      "Technical Consulting",
                      "MVP Development",
                      "Maintenance & Support",
                    ].map((service, i) => (
                      <li key={i}>
                        <Link
                          className="text-slate-300 hover:text-white transition-colors text-sm"
                          href="#services"
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>

              {/* Contact Column */}
              <div className="md:col-span-4">
                <FadeIn delay={0.2} distance={20}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Liên hệ
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-300 text-sm">
                        0945 700 813
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-300 text-sm">
                        TP. Hồ Chí Minh
                      </span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <Divider className="bg-slate-800" />
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} TechForge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </DefaultLayout>
  );
}
