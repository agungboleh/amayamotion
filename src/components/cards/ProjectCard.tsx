import { Project } from "../scroll-animation/ProjectsAnimation";
import { RiCheckboxCircleLine } from "react-icons/ri";
import Button from "../ui/Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="relative w-full h-135 rounded-xl transition-shadow"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-white rounded-xl overflow-hidden shadow-sm border border-brand-base/10 hover:shadow-md transition-shadow p-8 flex flex-col justify-between"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-brand-base text-white flex items-center justify-center font-bold rounded">
              {project.initials}
            </div>
            <div className="text-right">
              <span className="text-xs text-brand-base uppercase tracking-tighter">
                {project.category}
              </span>
            </div>
          </div>
          <span className="text-brand-red text-xl font-bold block mb-1">
            {project.company}
          </span>
          <p className="text-base font-bold mb-4 text-brand-base">
            {project.title}
          </p>
          <p className="text-brand-base/70 text-base mb-6">
            {project.description}
          </p>
          <ul className="space-y-2 text-base text-brand-base/70 flex-1">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <RiCheckboxCircleLine className="text-brand-base/70 text-lg" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="ghost"
          href={project.href}
          size="sm"
          className="mt-4 font-light"
        >
          Discover More
        </Button>
      </div>
      <div
        className="absolute inset-0 w-full h-full bg-brand-base text-white rounded-xl overflow-hidden shadow-2xl border border-white/10 p-8 flex flex-col justify-between"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-white text-brand-base flex items-center justify-center font-bold rounded">
              {project.initials}
            </div>
            <div className="text-right">
              <span className="text-xs text-white uppercase tracking-tighter">
                {project.category}
              </span>
            </div>
          </div>
          <span className="text-brand-red text-xl font-bold block mb-1">
            {project.company}
          </span>
          <p className="text-base font-bold mb-4 text-white">{project.title}</p>
          <p className="text-white/70 text-base mb-6">{project.description}</p>

          <ul className="space-y-2 text-base text-gray-300 flex-1">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <RiCheckboxCircleLine className="text-white/70 text-lg" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant="ghost"
          href={project.href}
          size="sm"
          className="mt-4 font-light text-brand-red border-brand-red hover:bg-brand-red hover:text-black transition-colors"
        >
          Discover More
        </Button>
      </div>
    </div>
  );
}
