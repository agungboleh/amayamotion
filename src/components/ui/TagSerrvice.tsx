interface TagServiceProps {
  label: string;
  className?: string;
}

export default function TagService({ label, className = "" }: TagServiceProps) {
  return (
    <span
      className={`px-3 py-1 bg-brand-base/10 text-xs text-brand-base/70 rounded-full ${className}`}
    >
      {label}
    </span>
  );
}
