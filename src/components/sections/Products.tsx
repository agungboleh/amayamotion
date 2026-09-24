"use client";

import {
  RiAiGenerate2,
  RiArchiveFill,
  RiArchiveLine,
  RiCalculatorLine,
  RiDashboardLine,
  RiDeviceLine,
  RiExchange2Line,
  RiIdCardLine,
  RiP2pLine,
} from "react-icons/ri";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const features = [
  { icon: RiP2pLine, label: "Multi-Branch Synchronization" },
  { icon: RiCalculatorLine, label: "Automated Tax Calculation" },
  { icon: RiIdCardLine, label: "Staff & Access Role Management" },
  { icon: RiDashboardLine, label: "Built-in CRM & Loyalty" },
  { icon: RiArchiveLine, label: "Real-time Inventory & Pricing" },
  { icon: RiDeviceLine, label: "Omnichannel & Multi-Device Support" },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative w-full bg-white scroll-mt-20 py-20 overflow-hidden"
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-desktop">
        <div className="relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <SectionHeading
                label="our products"
                title={
                  <>
                    Juno <span className="text-brand-red">Point of Sales</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-bold text-2xl mt-8 mb-4 text-brand-base">
                The Most Comprehensive &amp; Cost-Effective Retail Management
                Ecosystem in Indonesia.
              </h3>
              <p className="text-brand-base/70 text-lg leading-relaxed mb-4">
                Juno is more than just a point of sale it&apos;s the operational
                hub for your growing business. Built for speed and reliability,
                Juno seamlessly synchronizes your daily transactions,
                multi-branch inventory, and financial reporting. Pre-integrated
                with leading payment gateways and logistics platforms, we
                provide an enterprise-grade retail experience designed to scale
                with your operations.
              </p>
              <Button href="/#contact" size="md" className="mb-12">
                Request a Demo
              </Button>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 p-3 bg-brand-base/10 rounded-lg"
                  >
                    <feature.icon className="text-xl text-brand-base/70" />
                    <span className="font-light text-xs text-brand-base/70">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-brand-base/5 rounded-3xl -rotate-2 scale-102" />
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl h-full">
                <div className="rounded-2xl bg-white flex items-center justify-center h-full">
                  <img
                    src="/assets/products/junopos.webp"
                    alt="Juno POS"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
