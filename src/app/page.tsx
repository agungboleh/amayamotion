import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/About";
import HeroSection from "@/components/sections/Hero";
import ProductsSection from "@/components/sections/Products";
import ServicesSection from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
