import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "md" | "lg";
  icon?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  icon,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all scale-100 active:scale-95 group";

  const variantClasses = {
    primary: "bg-brand-red text-white hover:bg-brand-base",
    secondary:
      "border border-white/30 backdrop-blur-sm text-white hover:bg-white/10",
    ghost:
      "border border-outline-variant/30 text-on-surface hover:bg-brand-base/10 hover:text-brand-base",
  };

  const sizeClasses = {
    default: "px-8 py-4",
    md: "px-6 py-3",
    lg: "px-10 py-5",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
          {icon}
        </span>
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
