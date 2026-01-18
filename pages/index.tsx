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
  FooterSection,
  CaseStudiesSection,
} from "@/components/sections";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section - Window/Portal Effect */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Case Studies Section - Bento Grid */}
      <CaseStudiesSection />

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

      {/* Footer Section */}
      <FooterSection />
    </DefaultLayout>
  );
}
