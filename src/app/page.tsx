import Link from "next/link";
import {
  ArrowRightIcon,
  SparklesIcon,
  NewspaperIcon,
  BuildingOffice2Icon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { apps } from "@/data/apps";

const featuredApps = apps.slice(0, 2);

const infoSections = [
  {
    title: "Blog",
    description: "開発ロードマップやリリースノートを随時更新しています。",
    href: "/blog",
    icon: NewspaperIcon,
  },
  {
    title: "Case Studies",
    description: "導入チームの声や、活用しているワークフローを紹介します。",
    href: "/case-studies",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Support",
    description: "FAQ・トラブルシューティング・アップデート情報のハブです。",
    href: "/support",
    icon: LifebuoyIcon,
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="hero-gradient full-bleed px-6 py-12 md:px-10 flex items-center">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/80">
            <SparklesIcon className="h-5 w-5 text-white" /> DIGITAL TOOL STUDIO
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            シンプルなツールで、集中できるワークフローを。
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            teLab は、Mac と iOS にフォーカスしたソフトウェアスタジオです。
            毎日の作業に寄り添い、邪魔をしないユーティリティを丁寧に育てています。
          </p>
          <div>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/30"
            >
              アプリ一覧を見る
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">代表的なアプリ</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredApps.map((app) => (
            <div
              key={app.id}
              className="card-surface flex h-full flex-col rounded-2xl border border-transparent p-6 shadow-lg"
            >
              <div className="flex-1 space-y-2">
                <p className="text-xs font-medium uppercase tracking-widest text-white/80">
                  {app.platforms.join(" / ").toUpperCase()}
                </p>
                <h3 className="text-xl font-semibold">{app.name}</h3>
                <p className="text-sm text-white/80">{app.tagline}</p>
                <p className="text-white/80">{app.shortDescription}</p>
              </div>
              <Link
                href={`/apps/${app.id}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                詳しく見る
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-900">最新情報</h2>
          <p className="text-sm text-slate-500">ブログやケーススタディで進捗や導入事例をお届けします。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {infoSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className="card-surface rounded-2xl border border-transparent p-5 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-white" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {section.title}
                  </p>
                </div>
                <p className="mt-3 text-sm text-white/85">{section.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  詳しく見る
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
