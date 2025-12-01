import type { Metadata } from "next";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Blog",
  description: "teLab の開発ログやリリースノートを共有するブログ",
};

const posts = [
  {
    title: "Puzzle の新レイアウトエンジン開発記",
    date: "2025-02-03",
    summary: "内部アーキテクチャの見直しやウィンドウ管理の工夫についてのメモ。",
  },
  {
    title: "ClipSlot 1.2 ベータテスト開始",
    date: "2025-01-15",
    summary: "固定スロット数を拡張するアップデートのベータ募集案内。",
  },
  {
    title: "teLab の制作体制と今後のロードマップ",
    date: "2024-12-10",
    summary: "少人数での開発プロセスや、直販サイト開設の背景を紹介。",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <section className="band-gradient full-bleed px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl space-y-2">
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="text-white/80">開発の裏側や最新情報を記録するためのブログです。</p>
        </div>
      </section>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="card-surface space-y-3 rounded-2xl border border-transparent p-6">
            <div className="flex items-center gap-3 text-white/70">
              <DocumentTextIcon className="h-6 w-6" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                {post.date}
              </p>
            </div>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-white/85">{post.summary}</p>
            <p className="text-sm text-white">記事の全文は後ほど公開します。</p>
          </article>
        ))}
      </div>
    </div>
  );
}
