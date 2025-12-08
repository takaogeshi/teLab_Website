"use client";

import Link from "next/link";
import Image from "next/image";
import { CubeTransparentIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { apps } from "@/data/apps";
import { useLanguage } from "@/lib/LanguageContext";

const platformLabels: Record<string, string> = {
  macos: "macOS",
};

export default function AppsPage() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-20 pb-20">
      <section className="scroll-animate container-wide pt-20">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-display text-6xl md:text-8xl gradient-text">{t.apps.title}</h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            {t.apps.subtitle}
          </p>
        </div>
      </section>

      <section className="scroll-animate container-wide">
        <div className="grid gap-8 md:grid-cols-2">
          {apps.map((app) => (
            <div key={app.id} className="group relative flex flex-col justify-between border border-border p-8 transition-colors hover:border-foreground min-h-[300px]">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <h2 className="text-4xl font-bold tracking-tighter gradient-text group-hover:underline decoration-2 underline-offset-4">
                      {app.name}
                    </h2>
                    {app.status === 'coming_soon' && (
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20">
                        {t.appDetail.comingSoon}
                      </span>
                    )}
                  </div>
                  {app.versions ? (
                    <Image
                      src={app.versions.find((v) => v.name === "Pro")?.iconUrl || app.versions[0].iconUrl}
                      alt={`${app.name} icon`}
                      width={64}
                      height={64}
                      className="h-16 w-16 shadow-sm"
                    />
                  ) : (
                    <CubeTransparentIcon className="h-16 w-16 text-muted-foreground" />
                  )}
                </div>
                <p className="text-lg text-muted-foreground">
                  {language === "en" ? app.shortDescription_en : app.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {app.platforms.map((platform) => (
                    <span key={platform} className="border border-border px-3 py-1">
                      {platformLabels[platform] ?? platform}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={`/apps/${app.id}`}
                  className="inline-flex items-center text-lg font-bold"
                >
                  {t.common.viewDetails}
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute inset-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section >
    </div >
  );
}
