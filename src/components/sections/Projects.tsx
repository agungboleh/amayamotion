// "use client";

// import SectionHeading from "../ui/SectionHeading";
// import ProjectCard from "../cards/ProjectCard";

// export interface Project {
//   id: string;
//   initials: string;
//   category: string;
//   company: string;
//   title: string;
//   description: string;
//   features: string[];
//   href: string;
// }

// const Project: Project[] = [
//   {
//     id: "mead-johnson",
//     initials: "MJ",
//     category: "FMCG / Global",
//     company: "MEAD JOHNSON",
//     title: "Enterprise Retail & CRM Ecosystem",
//     description:
//       "Architecting a centralized operational hub for a global brand, seamlessly integrating supply chain tracking, targeted CRM, and data-driven call center operations.",
//     features: [
//       "Smart Inventory Control",
//       "Targeted CRM System",
//       "Integrated Call Center Module",
//     ],
//     href: "/projects/mead-johnson",
//   },
//   {
//     id: "santyoga-group",
//     initials: "SY",
//     category: "Automotive / National",
//     company: "SANTIYOGA",
//     title: "End-to-End Dealership Ecosystem & AI Integration",
//     description:
//       "Architecting a robust digital infrastructure for a national distributor. We seamlessly unified their headquarters and 21 branches into a secure, high-performance communication platform.",
//     features: [
//       "Intelligent AI Assistant (LLM-powered)",
//       "Enterprise Communication Network",
//       "Integrated CRM & Branch Management",
//     ],
//     href: "/projects/santyoga-group",
//   },
//   {
//     id: "korindo-group",
//     initials: "KO",
//     category: "Agribusiness / Enterprise",
//     company: "KORINDO",
//     title: "Enterprise Plantation Management System",
//     description:
//       "Digitizing end-to-end plantation operations. We engineered a highly resilient digital ecosystem bridging remote field data collection with centralized enterprise resource planning.",
//     features: [
//       "Seamless SAP Integration",
//       "Resilient Offline-First Architecture",
//       "Geolocation Workforce Management",
//     ],
//     href: "/projects/korindo-group",
//   },
//   {
//     id: "jti",
//     initials: "JTI",
//     category: "FMCG / Multinational",
//     company: "JAPAN TOBACCO INTERNATIONAL",
//     title: "Field Force Management & CRM",
//     description:
//       "Empowering field representatives with a robust Android application for real-time sales tracking, advanced CRM data collection, and strict geolocation auditing.",
//     features: [
//       "Advanced Fraud Prevention",
//       "Resilient Offline-First Operations",
//       "Real-Time Geolocation Tracking",
//     ],
//     href: "/projects/jti",
//   },
//   {
//     id: "sinar-prapanca",
//     initials: "SP",
//     category: "Security / Corporate",
//     company: "SINAR PRAPANCA",
//     title: "Security Workforce Management",
//     description:
//       "Digitizing physical security operations. We engineered a comprehensive mobile platform for security outsourcing management, instant reporting, and seamless client communication.",
//     features: [
//       "Real-Time Patrol & Attendance",
//       "Live Geolocation Monitoring",
//       "Direct Client Transparency",
//     ],
//     href: "/projects/sinar-prapanca",
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section
//       id="projects"
//       className="relative w-full bg-[#f7f6f3] scroll-mt-20 py-20 overflow-hidden"
//     >
//       <div className="relative max-w-container-max mx-auto px-margin-x-desktop">
//         <div className="relative z-10">
//           <div className="grid grid-cols-12">
//             <div className="col-span-12">
//               <SectionHeading
//                 label="Case Studies"
//                 title={
//                   <>
//                     Our <span className="text-brand-red">Projects</span>
//                   </>
//                 }
//                 description="A selection of enterprise-grade systems we've architected and deployed for global and national brands across Indonesia."
//               />
//             </div>
//           </div>
//           <div className="grid lg:grid-cols-3 gap-gutter mt-10">
//             {Project.map((project) => (
//               <ProjectCard key={project.id} project={project} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import SectionHeading from "../ui/SectionHeading";
import ProjectsAnimation, { Project } from "../scroll-animation/ProjectsAnimation";

const ProjectData: Project[] = [
  {
    id: "mead-johnson",
    initials: "MJ",
    category: "FMCG / Global",
    company: "MEAD JOHNSON",
    title: "Enterprise Retail & CRM Ecosystem",
    description:
      "Architecting a centralized operational hub for a global brand, seamlessly integrating supply chain tracking, targeted CRM, and data-driven call center operations.",
    features: [
      "Smart Inventory Control",
      "Targeted CRM System",
      "Integrated Call Center Module",
    ],
    href: "/projects/mead-johnson",
  },
  {
    id: "santyoga-group",
    initials: "SY",
    category: "Automotive / National",
    company: "SANTIYOGA",
    title: "End-to-End Dealership Ecosystem & AI Integration",
    description:
      "Architecting a robust digital infrastructure for a national distributor. We seamlessly unified their headquarters and 21 branches into a secure, high-performance communication platform.",
    features: [
      "Intelligent AI Assistant (LLM-powered)",
      "Enterprise Communication Network",
      "Integrated CRM & Branch Management",
    ],
    href: "/projects/santyoga-group",
  },
  {
    id: "korindo-group",
    initials: "KO",
    category: "Agribusiness / Enterprise",
    company: "KORINDO",
    title: "Enterprise Plantation Management System",
    description:
      "Digitizing end-to-end plantation operations. We engineered a highly resilient digital ecosystem bridging remote field data collection with centralized enterprise resource planning.",
    features: [
      "Seamless SAP Integration",
      "Resilient Offline-First Architecture",
      "Geolocation Workforce Management",
    ],
    href: "/projects/korindo-group",
  },
  {
    id: "jti",
    initials: "JTI",
    category: "FMCG / Multinational",
    company: "JAPAN TOBACCO INTERNATIONAL",
    title: "Field Force Management & CRM",
    description:
      "Empowering field representatives with a robust Android application for real-time sales tracking, advanced CRM data collection, and strict geolocation auditing.",
    features: [
      "Advanced Fraud Prevention",
      "Resilient Offline-First Operations",
      "Real-Time Geolocation Tracking",
    ],
    href: "/projects/jti",
  },
  {
    id: "sinar-prapanca",
    initials: "SP",
    category: "Security / Corporate",
    company: "SINAR PRAPANCA",
    title: "Security Workforce Management",
    description:
      "Digitizing physical security operations. We engineered a comprehensive mobile platform for security outsourcing management, instant reporting, and seamless client communication.",
    features: [
      "Real-Time Patrol & Attendance",
      "Live Geolocation Monitoring",
      "Direct Client Transparency",
    ],
    href: "/projects/sinar-prapanca",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-[#f7f6f3] scroll-mt-20 pb-20">
      {/* Header Tetap Menggunakan SectionHeading Asli */}
      <div className="absolute top-10 left-0 right-0 z-20 max-w-container-max mx-auto px-margin-x-desktop">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <SectionHeading
              label="Case Studies"
              title={
                <>
                  Our <span className="text-brand-red">Projects</span>
                </>
              }
              description="A selection of enterprise-grade systems we've architected and deployed for global and national brands across Indonesia."
            />
          </div>
        </div>
      </div>

      {/* Komponen Animasi yang Menampilkan Card Asli Anda */}
      <ProjectsAnimation projects={ProjectData} />
    </section>
  );
}