import type { Metadata } from "next";
import Link from "next/link";
import {
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Support",
  description: "teLab プロダクトのサポート情報のハブページ",
};

const quickLinks = [
  {
    title: "FAQ / ライセンス",
    description: "購入やライセンスキーの再送、複数デバイスでの利用について。",
    href: "#faq",
    icon: QuestionMarkCircleIcon,
  },
  {
    title: "トラブルシューティング",
    description: "起動しない時や同期が止まった時に試してほしい手順。",
    href: "#troubleshooting",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "アップデート情報",
    description: "直販版の最新ビルドとチェックサム / 既知の不具合。",
    href: "#updates",
    icon: ArrowPathIcon,
  },
  {
    title: "サポートへの連絡",
    description: "メールフォームから 2 営業日以内に返信します。",
    href: "/contact",
    icon: LifebuoyIcon,
  },
];

const faqs = [
  {
    question: "ライセンスキーを紛失しました",
    answer:
      "購入時のメールアドレス宛に再送できます。Contact ページから「ライセンス再送」を選び、購入時の情報をお知らせください。",
  },
  {
    question: "複数台の Mac で使えますか？",
    answer:
      "個人利用であれば同一ユーザーの複数デバイスにインストール可能です。社内での共有利用は台数分のライセンスをご購入ください。",
  },
  {
    question: "iOS 版と macOS 版の機能差はありますか？",
    answer:
      "同期対象やショートカットの一部に違いがあります。詳細は各アプリのページをご確認ください。",
  },
  {
    question: "ベータ版への参加方法は？",
    answer:
      "Blog で募集告知を行います。テスター向け TestFlight / TestBuild の招待リンクをメールで送付します。",
  },
];

const troubleshootingSteps = [
  {
    title: "起動しない / クラッシュする",
    items: [
      "最新バージョンへアップデート",
      "macOS のセキュリティ設定で許可されているか確認",
      "/Applications 直下へ移動してから再起動",
    ],
  },
  {
    title: "iCloud 同期が止まった",
    items: [
      "システム設定 > Apple ID で iCloud Drive をオンに",
      "[Puzzle] > 設定 > 同期ステータスを一度オフにして再度オン",
      "それでも同期しない場合は Contact からログ送信",
    ],
  },
];

const updates = [
  {
    product: "Puzzle",
    version: "1.2.0 (build 58)",
    date: "2025-01-30",
    notes: "レイアウトプリセットの共有 / メニューバーアイコン刷新",
  },
  {
    product: "ClipSlot",
    version: "0.9.5 beta",
    date: "2025-01-15",
    notes: "固定スロットのショートカット登録機能を追加",
  },
];

export default function SupportPage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="container-wide pt-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Support</p>
          <h1 className="text-display text-5xl md:text-6xl gradient-text">サポートガイド</h1>
          <p className="text-lg text-muted-foreground">
            よくある質問、セルフチェックの手順、最新アップデート情報をまとめています。解決しない場合は Contact からお気軽にご連絡ください。
          </p>
        </div>
      </section>

      <section className="container-wide grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex h-full flex-col justify-between border border-border p-6 shadow-sm transition hover:-translate-y-1"
            >
              <div className="space-y-2">
                <Icon className="h-6 w-6 text-muted-foreground" />
                <h2 className="text-lg font-semibold gradient-text">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <span className="mt-4 text-sm font-semibold text-foreground">詳しく見る →</span>
            </Link>
          );
        })}
      </section>

      <section id="faq" className="container-wide space-y-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter gradient-text">FAQ</h2>
          <p className="text-sm text-muted-foreground">ライセンスや導入に関する質問をまとめています。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-muted-foreground">Q.</p>
              <h3 className="text-xl font-bold tracking-tight">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="troubleshooting" className="container-wide space-y-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter gradient-text">セルフチェック</h2>
          <p className="text-sm text-muted-foreground">問題切り分けのためにまず試してほしい手順を掲載しています。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {troubleshootingSteps.map((step) => (
            <article key={step.title} className="border border-border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          上記で解消しない場合は、ログファイルを添えて <Link href="/contact" className="underline">Contact</Link> からご連絡ください。
        </p>
      </section>

      <section id="updates" className="container-wide space-y-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter gradient-text">アップデート情報</h2>
          <p className="text-sm text-muted-foreground">直販版の最新ビルドと主な変更点。</p>
        </div>
        <div className="overflow-hidden border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-slate-600">
              <tr>
                <th className="px-4 py-2">製品</th>
                <th className="px-4 py-2">バージョン</th>
                <th className="px-4 py-2">公開日</th>
                <th className="px-4 py-2">主な変更</th>
              </tr>
            </thead>
            <tbody>
              {updates.map((update) => (
                <tr key={update.product} className="border-t border-border">
                  <td className="px-4 py-3 font-semibold">{update.product}</td>
                  <td className="px-4 py-3">{update.version}</td>
                  <td className="px-4 py-3">{update.date}</td>
                  <td className="px-4 py-3 text-slate-700">{update.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
