import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "teLab プロダクトのサポート情報のハブページ",
};

const sections = [
  {
    title: "よくある質問",
    description: "ライセンス、インストール、同期についてのよくある質問を整理しています。",
    link: "/contact",
    linkLabel: "お問い合わせページへ",
  },
  {
    title: "トラブルシューティング",
    description: "ログの取得方法や、再インストール前に試してほしいステップをまとめていきます。",
    link: "/support/troubleshooting",
    linkLabel: "ガイド（準備中）",
  },
  {
    title: "アップデート情報",
    description: "直販版の最新バージョンとチェックサム情報を掲載予定です。",
    link: "/blog",
    linkLabel: "Blog を見る",
  },
];

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">Support</h1>
        <p className="text-slate-600">ユーザーサポートの拠点となるページです。準備中のコンテンツも先にルートだけ用意しました。</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="card-surface space-y-3 rounded-2xl border border-transparent p-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-sm text-white/85">{section.description}</p>
            <Link href={section.link} className="text-sm font-semibold text-white">
              {section.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
