import Link from "next/link";
import { apps } from "@/data/apps";

const featuredApps = apps.slice(0, 2);

const infoSections = [
  {
    title: "Blog",
    description: "開発ロードマップやリリースノートを随時更新しています。",
    href: "/blog",
  },
  {
    title: "Case Studies",
    description: "導入チームの声や、活用しているワークフローを紹介します。",
    href: "/case-studies",
  },
  {
    title: "Support",
    description: "FAQ・トラブルシューティング・アップデート情報のハブです。",
    href: "/support",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          DIGITAL TOOL STUDIO
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
            className="inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600"
          >
            アプリ一覧を見る
          </Link>
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
                className="mt-4 inline-flex items-center text-sm font-semibold text-white"
              >
                詳しく見る →
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
          {infoSections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="card-surface rounded-2xl border border-transparent p-5 shadow-lg transition hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {section.title}
              </p>
              <p className="mt-3 text-sm text-white/85">{section.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-white">
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
