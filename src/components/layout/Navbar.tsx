"use client";

import { navItems } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "services",
  "products",
  "projects",
  "contact",
];

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isProjectPage);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (!isProjectPage) {
        setScrolled(window.scrollY > 20);
      }
      if (isProjectPage) {
        setActiveSection("");
        return;
      }
      const navbarHeight = 80;
      const scrollY = window.scrollY + navbarHeight + 10;

      let currentSection = "home";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);

        if (el && el.offsetTop <= scrollY) {
          currentSection = sectionIds[i];
          break;
        }
      }
      setActiveSection(currentSection);
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash !== currentSection) {
        window.history.replaceState(
          null,
          "",
          currentSection === "home"
            ? window.location.pathname
            : `#${currentSection}`,
        );
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isProjectPage]);

  // Sync state with route changes
  useEffect(() => {
    if (isProjectPage) {
      setScrolled(true);
      setActiveSection("");
    } else {
      setScrolled(window.scrollY > 20);

      // Read active section from URL when entering page
      const hash = window.location.hash.replace("#", "");

      if (sectionIds.includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    }
  }, [isProjectPage]);

  const getSectionId = (label: string): string => {
    const map: Record<string, string> = {
      Home: "home",
      About: "about",
      Services: "services",
      Products: "products",
      Projects: "projects",
      Contact: "contact",
    };

    return map[label] || "";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white border-b border-white shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-x-desktop max-w-container-max mx-auto h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-5 font-bold transition-colors duration-300 text-black"
        >
          <img
            src="/assets/logo.svg"
            alt="Amaya Logo"
            className="w-auto h-10"
          />
          <span className="text-2xl font-bold tracking-tight leading-none">
            AMAYA PERDANA KREASINDO
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = getSectionId(item.label);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(sectionId)}
                className={`transition-colors duration-300 text-sm uppercase tracking-wider font-semibold ${
                  isActive
                    ? "text-brand-red border-b-2 border-brand-red pb-1"
                    : "text-black hover:text-brand-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex justify-between items-center xl:hidden transition-colors duration-300 text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl!">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <nav className="xl:hidden bg-white border-t-2 border-black/10 mx-margin-x-desktop py-10 flex flex-col gap-5">
          {navItems.map((item) => {
            const sectionId = getSectionId(item.label);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors text-sm uppercase tracking-wider font-semibold ${
                  isActive
                    ? "text-brand-red"
                    : "text-black hover:text-brand-red"
                }`}
                onClick={() => {
                  setActiveSection(sectionId);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
