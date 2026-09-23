"use client";

import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServicesCard";
import {
  RiAiGenerate2,
  RiCloudLine,
  RiGlobalLine,
  RiSmartphoneLine,
} from "react-icons/ri";
import ServicesAnimation from "../scroll-animation/ServicesAnimation";

const services = [
  {
    id: "ai-automation",
    number: "01",
    icon: RiAiGenerate2,
    title: "Applied AI & Intelligent Automation",
    description:
      "Integrating advanced Large Language Models (LLMs) and custom AI workflows directly into your enterprise ecosystem. We engineer smart automation to streamline data processing, enhance customer interactions, and optimize complex business operations.",
    tags: ["LLM Integration", "Workflow Automation", "NLP", "AI Chatbots"],
  },
  {
    id: "web-architecture",
    number: "02",
    icon: RiGlobalLine,
    title: "Enterprise Web Architecture",
    description:
      "Building robust, highly concurrent backend architectures and scalable microservices. We engineer secure, high-performance web platforms capable of handling complex business logic and massive user traffic without compromising speed.",
    tags: ["Microservices", "API Design", "High Availability", "Security"],
  },
  {
    id: "mobile-development",
    number: "03",
    icon: RiSmartphoneLine,
    title: "Fluid Mobile App Development",
    description:
      "Crafting high-fidelity, cross-platform mobile experiences that deliver seamless native performance. From complex internal operational tools to sleek consumer-facing apps, we ensure stability, speed, and intuitive user interfaces.",
    tags: ["iOS & Android", "Cross-Platform", "Native Performance", "UX/UI"],
  },
  {
    id: "cloud-operations",
    number: "04",
    icon: RiCloudLine,
    title: "Managed Infrastructure & Cloud Operations",
    description:
      "Providing end-to-end system administration, secure server management, and proactive maintenance. We ensure your digital infrastructure—from expansive enterprise email servers to cloud databases—remains highly available, secure, and resilient.",
    tags: ["Cloud Management", "Server Admin", "24/7 Monitoring", "DevOps"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#f7f6f3] scroll-mt-20 py-20 overflow-hidden"
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-desktop">
        <div className="relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <SectionHeading
                label="what we do"
                title={
                  <>
                    Our <span className="text-brand-red">Services</span>
                  </>
                }
                description="End-to-end digital engineering solutions tailored for enterprise demands — from intelligent automation to resilient infrastructure."
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter mt-20 mb-20">
            <div className="absolute w-full h-[calc(100%+15px)] pointer-events-none z-1">
              <ServicesAnimation />
            </div>
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
