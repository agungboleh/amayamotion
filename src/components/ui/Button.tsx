import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: IconType;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all scale-100 active:scale-95 group";
  const variantClasses = {
    primary: "bg-brand-red text-white hover:bg-brand-base",
    secondary:
      "border border-brand-base/30 text-brand-base hover:bg-brand-base/10",
    ghost:
      "border border-outline-variant/30 text-on-surface hover:bg-brand-base/10 hover:text-brand-base",
  };
  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-10 py-5",
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    <>
      {children}

      {Icon && (
        <Icon
          className="transition-transform group-hover:translate-x-1"
          size={20}
        />
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
