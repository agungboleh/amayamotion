interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "right";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <p className="text-xs font-bold text-brand-red uppercase">{label}</p>
        <p className="text-3xl font-bold text-black py-2.5">{title}</p>
      </div>
      <div>
        {description && (
          <p className="text-gray-600 text-right max-w-md">{description}</p>
        )}
      </div>
    </div>
  );
}
