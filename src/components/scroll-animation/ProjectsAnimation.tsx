"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../cards/ProjectCard";

export interface Project {
  id: string;
  initials: string;
  category: string;
  company: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

interface ProjectsAnimationProps {
  projects: Project[];
}

export default function ProjectsAnimation({ projects }: ProjectsAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const topCardsRef = useRef<HTMLDivElement[]>([]);
  const bottomCardsRef = useRef<HTMLDivElement[]>([]);

  // Membagi project: 3 pertama untuk baris atas, 2 sisanya untuk baris bawah
  const topProjects = projects.slice(0, 3);
  const bottomProjects = projects.slice(3, 5);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cardsWrapper = cardsWrapperRef.current;
    const topCards = topCardsRef.current;
    const bottomCards = bottomCardsRef.current;

    if (!section || !cardsWrapper) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Phase 1, 2, 3: Entrance Top 3 Cards
      topCards.forEach((card) => {
        if (card) {
          tl.to(card, {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      });

      // Hold
      tl.to({}, { duration: 0.5 });

      // Phase 4: Flip Top 3 Cards
      tl.to(topCards, {
        rotateY: 180,
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
      });

      // Hold
      tl.to({}, { duration: 0.5 });

      // Phase 5: Shift Cards Wrapper Ke Atas
      tl.to(cardsWrapper, {
        y: -520,
        duration: 1.2,
        ease: "power3.inOut",
      });

      // Hold
      tl.to({}, { duration: 0.3 });

      // Phase 6, 7: Entrance Bottom 2 Cards
      bottomCards.forEach((card) => {
        if (card) {
          tl.to(card, {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
          });
        }
      });

      // Hold
      tl.to({}, { duration: 0.5 });

      // Phase 8: Flip Bottom 2 Cards
      tl.to(bottomCards, {
        rotateY: 180,
        duration: 1,
        stagger: 0.25,
        ease: "power2.inOut",
      });

      // Final Hold
      tl.to({}, { duration: 1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-[#f7f6f3] overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <div className="relative max-w-container-max mx-auto px-margin-x-desktop h-full pt-32">
        <div ref={cardsWrapperRef} className="relative w-full z-10">
          {/* Top 3 Cards */}
          <div className="grid lg:grid-cols-3 gap-gutter">
            {topProjects.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) topCardsRef.current[idx] = el;
                }}
                className="opacity-0 transform translate-y-20 -rotate-y-90"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Bottom 2 Cards */}
          <div className="grid lg:grid-cols-2 gap-gutter lg:w-2/3 mx-auto mt-gutter">
            {bottomProjects.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) bottomCardsRef.current[idx] = el;
                }}
                className="opacity-0 transform translate-y-20 -rotate-y-90"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}