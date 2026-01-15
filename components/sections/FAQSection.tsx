"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { FadeIn } from "@/components/ui/motion-primitives";

const faqItems = [
  {
    question: "Chi phi du an duoc tinh nhu the nao?",
    answer:
      "Chi phi phu thuoc vao scope, do phuc tap va timeline cua du an. Chung toi cung cap bao gia chi tiet sau khi phan tich yeu cau, khong phat sinh chi phi an. Co the thanh toan theo giai doan de giam rui ro cho ca hai ben.",
  },
  {
    question: "Thoi gian hoan thanh du an bao lau?",
    answer:
      "Tuy thuoc vao quy mo du an. MVP cho startup thuong tu 4-8 tuan, du an enterprise tu 3-6 thang. Chung toi cam ket timeline ro rang ngay tu dau va bao cao tien do dinh ky hang tuan.",
  },
  {
    question: "Co ho tro sau khi ban giao khong?",
    answer:
      "Co. Tat ca du an deu co warranty period tu 1-3 thang tuy goi. Chung toi cung cung cap goi maintenance & support dai han voi SLA ro rang de dam bao he thong van hanh on dinh.",
  },
  {
    question: "Lam sao dam bao chat luong code?",
    answer:
      "Chung toi ap dung code review dinh ky, automated testing (unit test, integration test), CI/CD pipeline, va tuan thu coding standards quoc te. Ban giao kem documentation day du va source code sach.",
  },
  {
    question: "Co ky NDA bao mat thong tin khong?",
    answer:
      "Co. Chung toi luon ky NDA (Non-Disclosure Agreement) truoc khi bat dau du an de dam bao an toan thong tin tuyet doi cho doanh nghiep. Day la quy trinh bat buoc voi moi khach hang.",
  },
  {
    question: "Lam viec remote hay onsite?",
    answer:
      "Linh hoat theo nhu cau cua doanh nghiep. Team co the lam viec 100% remote, onsite tai van phong khach hang, hoac hybrid. Bao cao tien do dinh ky qua meeting online hoac truc tiep tuy yeu cau.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <FadeIn distance={40} duration={0.8}>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#0066FF] uppercase tracking-wider mb-3">
              Cau hoi thuong gap
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Giai dap thac mac
            </h2>
            <p className="text-lg text-slate-600">
              Nhung cau hoi pho bien ve dich vu cua chung toi
            </p>
          </div>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn distance={40} duration={0.8} delay={0.2}>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-2 md:p-4">
            <Accordion
              variant="splitted"
              selectionMode="multiple"
              className="gap-3"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  aria-label={item.question}
                  title={
                    <span className="text-base md:text-lg font-semibold text-slate-800">
                      {item.question}
                    </span>
                  }
                  className="bg-slate-50 rounded-2xl px-4 md:px-6 hover:bg-slate-100 transition-colors"
                  classNames={{
                    trigger: "py-4 md:py-5",
                    content: "pt-0 pb-4 md:pb-5 text-slate-600 leading-relaxed",
                  }}
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
