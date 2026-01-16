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
  { value: "other", label: "Khác" },
];

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3">
              Liên hệ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Bắt đầu dự án của bạn
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí về giải pháp công nghệ phù
              hợp
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn distance={50} duration={0.8} delay={0.1}>
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 p-8 md:p-10 border border-slate-100 dark:border-slate-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Gửi yêu cầu tư vấn
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Họ và tên"
                    placeholder="Nguyễn Văn A"
                    variant="bordered"
                    isRequired
                    classNames={{
                      inputWrapper:
                        "border-slate-200 hover:border-blue-300 focus-within:border-[#0066FF]",
                    }}
                  />
                  <Input
                    label="Số điện thoại"
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
                  label="Loại dịch vụ"
                  placeholder="Chọn dịch vụ quan tâm"
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
                  label="Mô tả yêu cầu"
                  placeholder="Mô tả ngắn gọn về dự án hoặc vấn đề bạn cần giải quyết..."
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
                  Gửi yêu cầu tư vấn
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
                      Liên hệ nhanh qua Zalo
                    </h3>
                  </div>
                  <p className="text-white/80 mb-6">
                    Phản hồi nhanh trong vòng 2 giờ làm việc
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
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 space-y-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Thông tin liên hệ
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[#0066FF] dark:text-blue-400 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Hotline / Zalo</p>
                      <p className="text-lg font-semibold text-slate-800 dark:text-white">
                        0945 700 813
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Huy Diễn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Giờ làm việc</p>
                      <p className="text-lg font-semibold text-slate-800 dark:text-white">
                        T2 - T7: 9:00 - 18:00
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Hỗ trợ khẩn cấp 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/50 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Khu vực</p>
                      <p className="text-lg font-semibold text-slate-800 dark:text-white">
                        TP. Hồ Chí Minh
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Hỗ trợ remote toàn quốc
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
