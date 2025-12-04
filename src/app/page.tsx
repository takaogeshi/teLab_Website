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
      <section className="hero-gradient flex items-center rounded-3xl border border-slate-200 px-6 py-12 shadow-sm md:px-10">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-500">
            <SparklesIcon className="h-5 w-5 text-slate-500" /> DIGITAL TOOL STUDIO
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            シンプルなツールで、集中できるワークフローを。
          </h1>
          <p className="max-w-3xl text-lg text-slate-600">
            teLab は、Mac と iOS にフォーカスしたソフトウェアスタジオです。
            毎日の作業に寄り添い、邪魔をしないユーティリティを丁寧に育てています。
          </p>
          <div>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
            >
              アプリ一覧を見る
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200 md:p-8">
        <h2 className="text-2xl font-semibold">Recommends</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredApps.map((app) => (
            <div
              key={app.id}
              className="card-surface flex h-full flex-col rounded-2xl border border-transparent p-6 shadow-lg"
            >
              <div className="flex-1 space-y-2">
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  {app.platforms.join(" / ").toUpperCase()}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">{app.name}</h3>
                <p className="text-sm text-slate-500">{app.tagline}</p>
                <p className="text-slate-600">{app.shortDescription}</p>
              </div>
              <Link
                href={`/apps/${app.id}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                詳しく見る
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl bg-white p-6 text-slate-900 shadow-sm ring-1 ring-slate-200 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">最新情報</h2>
          <p className="text-sm text-slate-500">ブログやケーススタディで進捗や導入事例をお届けします。</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {infoSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.title}
                href={section.href}
                className="card-surface rounded-2xl border border-transparent p-5 shadow-sm transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-slate-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {section.title}
                  </p>
                </div>
                <p className="mt-3 text-sm text-slate-600">{section.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
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
