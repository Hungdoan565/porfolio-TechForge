"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

import { FadeIn } from "@/components/ui/motion-primitives";

const faqItems = [
  {
    question: "Chi phí dự án được tính như thế nào?",
    answer:
      "Chi phí phụ thuộc vào scope, độ phức tạp và timeline của dự án. Chúng tôi cung cấp báo giá chi tiết sau khi phân tích yêu cầu, không phát sinh chi phí ẩn. Có thể thanh toán theo giai đoạn để giảm rủi ro cho cả hai bên.",
  },
  {
    question: "Thời gian hoàn thành dự án bao lâu?",
    answer:
      "Tùy thuộc vào quy mô dự án. MVP cho startup thường từ 4-8 tuần, dự án enterprise từ 3-6 tháng. Chúng tôi cam kết timeline rõ ràng ngay từ đầu và báo cáo tiến độ định kỳ hàng tuần.",
  },
  {
    question: "Có hỗ trợ sau khi bàn giao không?",
    answer:
      "Có. Tất cả dự án đều có warranty period từ 1-3 tháng tùy gói. Chúng tôi cũng cung cấp gói maintenance & support dài hạn với SLA rõ ràng để đảm bảo hệ thống vận hành ổn định.",
  },
  {
    question: "Làm sao đảm bảo chất lượng code?",
    answer:
      "Chúng tôi áp dụng code review định kỳ, automated testing (unit test, integration test), CI/CD pipeline, và tuân thủ coding standards quốc tế. Bàn giao kèm documentation đầy đủ và source code sạch.",
  },
  {
    question: "Có ký NDA bảo mật thông tin không?",
    answer:
      "Có. Chúng tôi luôn ký NDA (Non-Disclosure Agreement) trước khi bắt đầu dự án để đảm bảo an toàn thông tin tuyệt đối cho doanh nghiệp. Đây là quy trình bắt buộc với mọi khách hàng.",
  },
  {
    question: "Làm việc remote hay onsite?",
    answer:
      "Linh hoạt theo nhu cầu của doanh nghiệp. Team có thể làm việc 100% remote, onsite tại văn phòng khách hàng, hoặc hybrid. Báo cáo tiến độ định kỳ qua meeting online hoặc trực tiếp tùy yêu cầu.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900" id="faq">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#0066FF] dark:text-blue-400 uppercase tracking-wider mb-3">
              Câu hỏi thường gặp
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Giải đáp thắc mắc
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Những câu hỏi phổ biến về dịch vụ của chúng tôi
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn delay={0.2} distance={40} duration={0.8}>
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-2 md:p-4">
            <Accordion
              className="gap-3"
              selectionMode="multiple"
              variant="splitted"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.question}
                  className="bg-slate-50 dark:bg-slate-700 rounded-2xl px-4 md:px-6 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                  classNames={{
                    trigger: "py-4 md:py-5",
                    content:
                      "pt-0 pb-4 md:pb-5 text-slate-600 dark:text-slate-300 leading-relaxed",
                  }}
                  title={
                    <span className="text-base md:text-lg font-semibold text-slate-800 dark:text-white">
                      {item.question}
                    </span>
                  }
                >
                  {item.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
