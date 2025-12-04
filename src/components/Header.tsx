"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "@/lib/LanguageContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const toggleLanguage = () => setLanguage(language === "ja" ? "en" : "ja");

  const navLinks = [
    { href: "/", label: t.common.home },
    { href: "/apps", label: t.common.apps },
    { href: "/blog", label: t.common.blog },
    { href: "/support", label: t.common.support },
    { href: "/contact", label: t.common.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          teLab
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLanguage}
            className="text-sm font-bold border border-border px-3 py-1 hover:bg-muted transition-colors"
          >
            {language === "ja" ? "EN" : "JP"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="text-sm font-bold border border-border px-3 py-1 hover:bg-muted transition-colors"
          >
            {language === "ja" ? "EN" : "JP"}
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="p-2 -mr-2 text-foreground"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border bg-background md:hidden">
          <div className="container-wide py-8">
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-foreground"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
