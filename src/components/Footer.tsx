"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = [
    { href: "/privacy", label: t.common.privacy },
    { href: "/terms", label: t.common.terms },
  ];

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-wide flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-bold tracking-tighter">teLab</p>
          <p className="text-sm text-muted-foreground">
            {t.common.copyright.replace("{year}", year.toString())}
          </p>
        </div>
        <div className="flex gap-8 text-sm font-medium">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
