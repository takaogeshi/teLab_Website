import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide text-slate-900">
          teLab
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-indigo-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
