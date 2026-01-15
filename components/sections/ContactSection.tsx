"use client";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { FadeIn } from "@/components/ui/motion-primitives";
import { Link } from "@heroui/link";
import { Phone, Clock, MapPin, MessageCircle } from "@/components/ui/icons";
import { motion } from "framer-motion";

const serviceOptions = [
  { value: "custom-dev", label: "Custom Software Development" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "mvp", label: "MVP Development" },
  { value: "maintenance", label: "Maintenance & Support" },
  { value: "other", label: "Khac" },
];

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Cam on ban da lien he! Chung toi se phan hoi trong thoi gian som nhat.",
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-3">
              Lien he
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Bat dau du an cua ban
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Lien he ngay de duoc tu van mien phi ve giai phap cong nghe phu
              hop
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn distance={50} duration={0.8} delay={0.1}>
            <motion.div
              className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 p-8 md:p-10 border border-slate-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Gui yeu cau tu van
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Ho va ten"
                    placeholder="Nguyen Van A"
                    variant="bordered"
                    isRequired
                    classNames={{
                      inputWrapper:
                        "border-slate-200 hover:border-blue-300 focus-within:border-[#0066FF]",
                    }}
                  />
                  <Input
                    label="So dien thoai"
                    placeholder="0912 345 678"
                    variant="bordered"
                    type="tel"
                    classNames={{
                      inputWrapper:
                        "border-slate-200 hover:border-blue-300 focus-within:border-[#0066FF]",
                    }}
                  />
                </div>
                <Input
                  label="Email"
                  placeholder="email@company.com"
                  variant="bordered"
                  type="email"
                  isRequired
                  classNames={{
                    inputWrapper:
                      "border-slate-200 hover:border-blue-300 focus-within:border-[#0066FF]",
                  }}
                />
                <Select
                  label="Loai dich vu"
                  placeholder="Chon dich vu quan tam"
                  variant="bordered"
                  classNames={{
                    trigger: "border-slate-200 hover:border-blue-300",
                  }}
                >
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value}>{option.label}</SelectItem>
                  ))}
                </Select>
                <Textarea
                  label="Mo ta yeu cau"
                  placeholder="Mo ta ngan gon ve du an hoac van de ban can giai quyet..."
                  variant="bordered"
                  minRows={4}
                  classNames={{
                    inputWrapper:
                      "border-slate-200 hover:border-blue-300 focus-within:border-[#0066FF]",
                  }}
                />
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  radius="full"
                  className="w-full font-semibold bg-[#0066FF] hover:bg-[#0052CC] shadow-lg shadow-blue-500/25"
                >
                  Gui yeu cau tu van
                </Button>
              </form>
            </motion.div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn distance={50} duration={0.8} delay={0.2}>
            <div className="flex flex-col gap-6">
              {/* Quick Contact Card */}
              <motion.div
                className="bg-[#0066FF] rounded-3xl p-8 text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-6 h-6" />
                    <h3 className="text-xl font-bold">
                      Lien he nhanh qua Zalo
                    </h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    Phan hoi nhanh trong vong 2 gio lam viec
                  </p>
                  <Link
                    href="https://zalo.me/0945700813"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#0066FF] rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat Zalo ngay
                  </Link>
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 space-y-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-slate-800">
                  Thong tin lien he
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0066FF] flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Hotline / Zalo</p>
                      <p className="text-lg font-semibold text-slate-800">
                        0945 700 813
                      </p>
                      <p className="text-sm text-slate-600">Huy Dien</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Gio lam viec</p>
                      <p className="text-lg font-semibold text-slate-800">
                        T2 - T7: 9:00 - 18:00
                      </p>
                      <p className="text-sm text-slate-600">
                        Ho tro khan cap 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Khu vuc</p>
                      <p className="text-lg font-semibold text-slate-800">
                        TP. Ho Chi Minh
                      </p>
                      <p className="text-sm text-slate-600">
                        Ho tro remote toan quoc
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
