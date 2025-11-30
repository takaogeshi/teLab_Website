import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {year} teLab</p>
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-indigo-500">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
