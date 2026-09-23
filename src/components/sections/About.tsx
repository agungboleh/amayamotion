"use client";

import { LuBrainCircuit, LuDraftingCompass, LuHistory } from "react-icons/lu";
import IconBox from "../ui/IconBox";
import AboutAnimation from "../scroll-animation/AboutAnimation";
import SectionHeading from "../ui/SectionHeading";

const missions = [
  {
    icon: LuBrainCircuit,
    title: "01. Intelligent Automation",
    description:
      "Integrating sophisticated language models and automated AI workflows to streamline complex business operations and enhance decision-making.",
  },
  {
    icon: LuDraftingCompass,
    title: "02. Scalable Architecture",
    description:
      "Building secure, high-performance custom web and mobile applications designed to support enterprise-grade demands.",
  },
  {
    icon: LuHistory,
    title: "03. Future-Proof Ecosystems",
    description:
      "Delivering end-to-end digital infrastructures that don't just solve today's problems, but continuously evolve with technological advancements.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f7f6f3] scroll-mt-20 py-20 overflow-hidden"
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-desktop">
        <div className="relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <SectionHeading
                label="about us"
                title={
                  <>
                    Vision & <span className="text-brand-red">Mission</span>
                  </>
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-8 items-start mb-20">
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="absolute -top-12 left-17 w-[calc(100%+60px)] h-[calc(100%+246px)] pointer-events-none z-0">
                <AboutAnimation />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-brand-red text-xs font-bold tracking-wider">
                  OUR VISION
                </p>
                <p className="text-2xl mt-6 font-semibold leading-relaxed text-brand-base">
                  To be the catalyst for enterprise transformation by
                  architecting intelligent digital solutions that bridge robust
                  software engineering with advanced AI technologies.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
              {missions.map((mission) => (
                <div
                  key={mission.title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="flex gap-6 items-start">
                    <IconBox icon={mission.icon} />
                    <div>
                      <h3 className="text-xl font-bold text-brand-base mb-2">
                        {mission.title}
                      </h3>
                      <p className="text-md text-brand-base/70 leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
