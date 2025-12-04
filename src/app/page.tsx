"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  SparklesIcon,
  NewspaperIcon,
  LifebuoyIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { apps } from "@/data/apps";
import { useLanguage } from "@/lib/LanguageContext";

const featuredApps = apps.slice(0, 2);

export default function Home() {
  const { t, language } = useLanguage();

  const infoSections = [
    {
      title: t.common.blog,
      description: t.home.latestInfo.blogDesc,
      href: "/blog",
      icon: NewspaperIcon,
    },
    {
      title: t.common.support,
      description: t.home.latestInfo.supportDesc,
      href: "/support",
      icon: LifebuoyIcon,
    },
    {
      title: t.common.contact,
      description: t.home.latestInfo.contactDesc,
      href: "/contact",
      icon: EnvelopeIcon,
    },
  ];

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="scroll-animate container-wide pt-20 md:pt-32">
        <div className="max-w-4xl space-y-8">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <SparklesIcon className="h-4 w-4" /> {t.home.hero.tagline}
          </p>
          <h1 className="text-display text-4xl md:text-6xl lg:text-7xl whitespace-pre-line gradient-text">
            {t.home.hero.title}
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground md:text-2xl text-balance">
            {t.home.hero.description}
          </p>
          <div className="pt-4">
            <Link
              href="/apps"
              className="btn-gradient text-lg px-8 py-4"
            >
              {t.home.hero.cta}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="scroll-animate container-wide">
        <div className="mb-16 border-b border-border pb-6">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-text">{t.home.recommends.title}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredApps.map((app) => (
            <div
              key={app.id}
              className="group relative flex flex-col justify-between border border-border p-8 transition-colors hover:border-foreground min-h-[400px]"
            >
              <div className="space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {app.platforms.join(" / ")}
                </p>
                <h3 className="text-5xl font-bold tracking-tighter md:text-6xl gradient-text group-hover:underline decoration-2 underline-offset-4">
                  {app.name}
                </h3>
                <p className="text-xl font-medium text-foreground">
                  {language === "en" ? app.tagline_en : app.tagline}
                </p>
                <p className="text-muted-foreground">
                  {language === "en" ? app.shortDescription_en : app.shortDescription}
                </p>
              </div>
              <Link
                href={`/apps/${app.id}`}
                className="mt-8 inline-flex items-center text-lg font-bold"
              >
                {t.common.learnMore}
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="scroll-animate container-wide">
        <div className="mb-16 border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl gradient-text">{t.home.latestInfo.title}</h2>
          <p className="text-muted-foreground">{t.home.latestInfo.subtitle}</p>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3 border border-border">
          {infoSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group bg-background p-8 transition-colors hover:bg-muted/50"
              >
                <div className="mb-6">
                  <Icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight gradient-text">{section.title}</h3>
                <p className="text-muted-foreground">{section.description}</p>
                <div className="mt-6 flex items-center text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100">
                  {t.common.readMore} <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
