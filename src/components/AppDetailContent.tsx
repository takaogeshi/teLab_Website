"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon, CommandLineIcon, QuestionMarkCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { type AppMeta } from "@/data/apps";
import { useLanguage } from "@/lib/LanguageContext";

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

export function AppDetailContent({ app }: { app: AppMeta }) {
    const { t, language } = useLanguage();
    const extra = appExtraContent[app.id] ?? defaultExtraContent;

    return (
        <div className="space-y-24 pb-24">
            {/* Hero */}
            <section className="container-wide pt-20">
                <div className="max-w-4xl space-y-8">
                    <div className="space-y-4">
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                            {t.appDetail.label}
                        </p>
                        <h1 className="text-display text-6xl md:text-8xl gradient-text">{app.name}</h1>
                    </div>
                    <p className="text-2xl font-medium text-foreground">
                        {language === "en" ? app.tagline_en : app.tagline}
                    </p>
                    <p className="text-xl text-muted-foreground">
                        {language === "en" ? app.shortDescription_en : app.shortDescription}
                    </p>

                    {/* Version Info */}
                    {app.versions && (
                        <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                            {app.versions.map((version) => (
                                <div key={version.name} className="flex items-center justify-between p-4 border border-border bg-muted/30">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={version.iconUrl}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="h-10 w-10"
                                        />
                                        <div>
                                            <p className="font-bold">{version.name}</p>
                                            <p className="text-sm text-muted-foreground">{version.price}</p>
                                        </div>
                                    </div>
                                    {version.storeUrl && (
                                        <a href={version.storeUrl} className="text-sm font-bold text-primary hover:underline">
                                            Get
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground pt-4">
                        {app.platforms.map((platform) => (
                            <span key={platform} className="border border-border px-3 py-1">
                                {platformLabels[platform] ?? platform}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container-wide space-y-24">
                {/* Highlights */}
                <div className="grid gap-8 md:grid-cols-3">
                    {extra.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-4 p-4 border-l-2 border-foreground">
                            <CheckCircleIcon className="h-6 w-6 text-foreground shrink-0" />
                            <p className="text-lg font-medium">{item}</p>
                        </div>
                    ))}
                </div>

                {/* Workflows */}
                <section className="space-y-12">
                    <div className="border-b border-border pb-6">
                        <h2 className="text-4xl font-bold tracking-tighter gradient-text">{t.appDetail.workflows}</h2>
                        <p className="text-muted-foreground mt-2">{t.appDetail.workflowsDesc}</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {extra.workflows.map((flow) => (
                            <div key={flow} className="card group">
                                <CommandLineIcon className="h-8 w-8 text-muted-foreground mb-4 group-hover:text-foreground transition-colors" />
                                <p className="text-lg font-medium">{flow}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Screenshots */}
                <section className="space-y-12">
                    <div className="border-b border-border pb-6">
                        <h2 className="text-4xl font-bold tracking-tighter gradient-text">{t.appDetail.screenshots}</h2>
                        <p className="text-muted-foreground mt-2">{t.appDetail.screenshotsDesc}</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2">
                        {["Layout Presets", "Shortcut Palette"].map((label) => (
                            <div key={label} className="space-y-4">
                                <div className="aspect-video bg-muted border border-border flex items-center justify-center">
                                    <PhotoIcon className="h-12 w-12 text-muted-foreground/50" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="font-bold gradient-text">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="space-y-12">
                    <div className="border-b border-border pb-6">
                        <h2 className="text-4xl font-bold tracking-tighter gradient-text">{t.appDetail.faq}</h2>
                        <p className="text-muted-foreground mt-2">{t.appDetail.faqDesc}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {extra.faqs.map((faq) => (
                            <div key={faq.question} className="card space-y-4">
                                <div className="flex items-start gap-3">
                                    <QuestionMarkCircleIcon className="h-6 w-6 text-foreground shrink-0" />
                                    <p className="font-bold gradient-text">{faq.question}</p>
                                </div>
                                <p className="text-muted-foreground pl-9">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-12 border-t border-border">
                    {app.macBuyProductId && (
                        <Link
                            href={`/buy/${app.macBuyProductId}`}
                            className="btn-primary"
                        >
                            {t.common.purchase}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
