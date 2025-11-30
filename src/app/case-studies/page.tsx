import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "teLab のツールを取り入れているチームの事例紹介",
};

const cases = [
  {
    company: "Minimal Apps",
    description: "少数精鋭の macOS アプリ開発チーム。Puzzle を使ってレビュー作業のウィンドウ整理を自動化。",
    impact: "画面録画や QA 作業のセットアップ時間を 30% 削減。",
  },
  {
    company: "Design Partner Studio",
    description: "リモートデザインファーム。ClipSlot でよく使うコピーを共有し、フィードバックサイクルを高速化。",
    impact: "クライアント向けレビューコメントのテンプレート管理に成功。",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Case Studies</h1>
        <p className="text-slate-600">正式な取材記事は準備中です。先行して概要だけ共有しています。</p>
      </header>

      <div className="space-y-6">
        {cases.map((item) => (
          <section key={item.company} className="card-surface space-y-3 rounded-2xl border border-transparent p-6">
            <h2 className="text-xl font-semibold">{item.company}</h2>
            <p className="text-sm text-white/85">{item.description}</p>
            <p className="text-sm font-semibold">効果: {item.impact}</p>
            <p className="text-xs text-white/70">詳細ヒアリング後に追記予定です。</p>
          </section>
        ))}
      </div>
    </div>
  );
}
