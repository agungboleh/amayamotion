import { IconType } from "react-icons";

interface IconBoxProps {
  icon: IconType; // Menggunakan tipe IconType dari react-icons
  className?: string;
}

export default function IconBox({ icon: Icon, className = "" }: IconBoxProps) {
  return (
    <div
      className={`flex items-center justify-center bg-brand-gray-light p-4 rounded-lg text-[#fecdcd] text-3xl ${className}`}
    >
      <Icon />
    </div>
  );
}