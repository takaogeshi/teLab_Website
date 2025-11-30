import Link from "next/link";
import type { Metadata } from "next";
import { apps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "teLab が提供するアプリ一覧",
};

const platformLabels: Record<string, string> = {
  ios: "iOS",
  macos: "macOS",
};

export default function AppsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Apps</h1>
        <p className="text-slate-600">teLab が提供するプロダクトをまとめています。</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {apps.map((app) => (
          <div key={app.id} className="card-surface flex flex-col rounded-2xl border border-transparent p-6 shadow-lg">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">{app.name}</h2>
              <p className="text-sm text-white/85">{app.shortDescription}</p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/70">
                {app.platforms.map((platform) => (
                  <span key={platform} className="rounded-full border border-white/40 px-3 py-1">
                    {platformLabels[platform] ?? platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <Link
                href={`/apps/${app.id}`}
                className="inline-flex items-center rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
