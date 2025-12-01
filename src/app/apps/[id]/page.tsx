import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircleIcon, CommandLineIcon, QuestionMarkCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { apps, type AppMeta } from "@/data/apps";

const platformLabels: Record<string, string> = {
  ios: "iOS",
  macos: "macOS",
};

type AppExtraContent = {
  highlights: string[];
  workflows: string[];
  faqs: { question: string; answer: string }[];
};

const defaultExtraContent: AppExtraContent = {
  highlights: [
    "シンプルな UI で誰でもすぐに使い始められます",
    "macOS と iOS で同じ思想の操作体系",
    "アップデートで機能を少しずつ拡張予定",
  ],
  workflows: [
    "朝一番にアプリを整えて、集中状態をつくる",
    "よく使う機能をショートカットに割り当ててワンアクションで起動",
    "必要に応じてアプリごとにカスタマイズ",
  ],
  faqs: [
    {
      question: "ライセンスは複数デバイスで共有できますか？",
      answer: "同一ユーザーであれば macOS / iOS の複数台にインストール可能です。",
    },
  ],
};

const appExtraContent: Partial<Record<AppMeta["id"], AppExtraContent>> = {
  puzzle: {
    highlights: [
      "複数のレイアウトプリセットをワンクリックで切り替え",
      "マルチディスプレイ構成を自動で判定し最適な配置を提案",
      "ショートカットから即時にスナップ動作を発火",
    ],
    workflows: [
      "メニューバー常駐で、作業を中断せず素早く整列",
      "ドラッグ＆ドロップで自分好みのレイアウトをカスタマイズ",
      "アプリごとに優先順位を設定し、開いた瞬間に自動配置",
    ],
    faqs: [
      {
        question: "ウィンドウの位置は記憶されますか？",
        answer:
          "はい。ウィンドウサイズや位置をプロファイルとして保存し、ショートカットで呼び出せます。",
      },
      {
        question: "外部ディスプレイでも使えますか？",
        answer: "接続状況を検知して自動で最適化します。複数構成でも安心してお使いください。",
      },
    ],
  },
  clipslot: {
    highlights: [
      "よく使うテキストを 6 スロットに固定",
      "スロットごとにタイトルやショートカットを設定",
      "iCloud 経由で iOS / macOS 間をシームレス同期",
    ],
    workflows: [
      "コピーした内容を自動で履歴化し、必要なものだけピン留め",
      "Markdown やコードスニペットも崩さず保存",
      "Spotlight 風のパレットから呼び出し、Enter で貼り付け",
    ],
    faqs: [
      {
        question: "画像にも対応していますか？",
        answer: "現時点ではテキストのみ対応です。要望に応じて拡張予定です。",
      },
      {
        question: "暗号化はされていますか？",
        answer: "ローカルのみでデータを保持し、同期時は Apple の仕組みで暗号化されます。",
      },
    ],
  },
};

type AppDetailPageProps = {
  params: Promise<{
    id: AppMeta["id"];
  }>;
};

export function generateStaticParams() {
  return apps.map((app) => ({ id: app.id }));
}

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const app = apps.find((item) => item.id === id);

  if (!app) {
    return {
      title: "Apps",
    };
  }

  return {
    title: app.name,
    description: app.tagline,
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { id } = await params;
  const app = apps.find((item) => item.id === id);

  if (!app) {
    notFound();
  }

  const extra = appExtraContent[app.id] ?? defaultExtraContent;

  return (
    <div className="space-y-12">
      <section className="band-gradient full-bleed px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            App Detail
          </p>
          <h1 className="text-4xl font-semibold">{app.name}</h1>
          <p className="text-lg text-white/85">{app.tagline}</p>
          <p className="text-white/80">{app.shortDescription}</p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-white/70">
            {app.platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-white/40 px-3 py-1">
                {platformLabels[platform] ?? platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-12">
        <div className="grid gap-6 md:grid-cols-3">
          {extra.highlights.map((item) => (
            <div key={item} className="card-surface flex items-start gap-3 rounded-2xl border border-transparent p-4 text-sm text-white/85">
              <CheckCircleIcon className="h-5 w-5 text-white" />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">ワークフローの例</h2>
            <p className="text-sm text-slate-500">普段の作業にどう溶け込むかをイメージできます。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {extra.workflows.map((flow) => (
              <div key={flow} className="card-surface flex items-start gap-3 rounded-2xl border border-transparent p-5 text-sm text-white/85">
                <CommandLineIcon className="h-5 w-5 text-white" />
                <p>{flow}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">スクリーンショット（仮）</h2>
            <p className="text-sm text-slate-500">本番では実際の UI を掲載します。今はダミーのレイアウトです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {["レイアウトプリセット", "ショートカットパレット"].map((label) => (
              <div key={label} className="card-surface space-y-3 rounded-3xl border border-transparent p-4">
                <div className="flex items-center gap-2 text-white">
                  <PhotoIcon className="h-5 w-5" />
                  <p className="text-sm font-medium">{label}</p>
                </div>
                <div className="aspect-video rounded-2xl border border-dashed border-white/50 bg-white/10" />
                <p className="text-sm text-white/90">後で実機キャプチャに差し替え予定です。</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
            <p className="text-sm text-slate-500">導入前によくいただく質問をまとめました。</p>
          </div>
          <div className="space-y-4">
            {extra.faqs.map((faq) => (
              <div key={faq.question} className="card-surface flex gap-3 rounded-2xl border border-transparent p-4">
                <QuestionMarkCircleIcon className="mt-1 h-5 w-5 text-white" />
                <div>
                  <p className="text-sm font-semibold">{faq.question}</p>
                  <p className="text-sm text-white/85">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          {app.iosAppStoreUrl && (
            <a
              href={app.iosAppStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-indigo-200 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              iOS 版を App Store で見る
            </a>
          )}
          {app.macBuyProductId && (
            <Link
              href={`/buy/${app.macBuyProductId}`}
              className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600"
            >
              macOS 版を購入する
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
