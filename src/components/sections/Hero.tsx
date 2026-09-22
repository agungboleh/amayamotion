"use client";
import HeroMotion from "@/data/HeroMotion.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-full bg-white py-10">
      <div className="max-w-container-max mx-auto px-margin-x-desktop">
        <div className="grid grid-cols-12 gap-0 lg:gap-10">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7 flex flex-col lg:justify-center lg:h-screen mt-12.5 lg:mt-0">
            <h1 className="text-4xl xl:text-6xl font-black text-black">
              Architecting <span className="text-brand-red">Intelligent</span>{" "}
              Digital Solutions for
              <span className="text-brand-red"> Business Growth.</span>
            </h1>
            <p className="text-base xl:text-lg mt-4 text-brand-base">
              Transforming complex challenges into AI-powered web and mobile
              applications. From fluid cross-platform experiences to advanced
              language model integrations, we build secure, scalable systems
              designed to automate operations and drive real results.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col lg:justify-center h-screen">
            <div className="h-screen flex items-center justify-center">
              <Lottie
                animationData={HeroMotion}
                loop={false}
                autoplay
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
