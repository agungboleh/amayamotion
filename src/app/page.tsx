import Navbar from "@/components/layout/Navbar";
import AboutAnimation from "@/components/scroll-animation/AboutAnimation";
import AboutSection from "@/components/sections/About";
import HeroSection from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <AboutAnimation /> */}
        {/* <ServicesSection /> */}
        {/* <ProductSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
