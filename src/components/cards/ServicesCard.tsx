import { IconType } from "react-icons";
import TagService from "../ui/TagSerrvice";

interface ServiceCardProps {
  number: string;
  icon: IconType;
  title: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
  tags,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-10 rounded-xl relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-200">
      <span className="absolute top-4 right-8 text-8xl font-black text-brand-base/5 select-none">
        {number}
      </span>
      <div className="relative z-10">
        <Icon className="text-brand-red text-4xl mb-4 block" />
        <p className="font-bold text-2xl text-brand-base mb-4">{title}</p>
        <p className="text-brand-base/70 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagService key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
