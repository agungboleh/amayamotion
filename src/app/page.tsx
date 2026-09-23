import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/About";
import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <HeroSection />
        {/* <ProductSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
