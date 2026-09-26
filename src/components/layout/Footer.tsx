import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Services", href: "/#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Products", href: "/#products" },
      { label: "Projects", href: "/#projects" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-base/10 w-full">
      <div className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-gutter w-full mb-12">
          <div className="max-w-md">
            <Link
              href="/"
              className="flex items-center gap-5 font-bold transition-colors duration-300 text-brand-base mb-4"
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
            <p className="text-brand-base/70 text-md">
              Architecting Intelligent Digital Solutions for Business Growth.
              Leading the digital transformation through precision engineering
              and AI.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerColumns.map((col) => (
              <nav key={col.title} className="flex flex-col gap-3">
                <span className="font-bold text-sm uppercase tracking-widest text-brand-base mb-2">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-brand-base/70 hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-base/10 w-full gap-4">
          <p className="text-xs text-brand-base/70">
            &copy; {new Date().getFullYear()} Amaya Perdana Kreasindo. All
            rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-brand-base/70">
            <span className="w-2 h-2 rounded-full bg-brand-red" />
            Enterprise IT Solutions &bull; Jakarta, Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
