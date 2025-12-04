"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b border-slate-200 bg-white/80 text-slate-800 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          teLab
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-transparent text-slate-700 transition hover:bg-white"
        >
          {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>
      <nav
        className={`grid overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-5xl px-4 pb-4">
          <ul className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-1 text-slate-700 transition hover:text-slate-900"
                  onClick={closeMenu}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-xs text-slate-400">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
