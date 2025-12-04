import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

const sections = [
  {
    title: "収集する情報",
    body: [
      "決済プラットフォーム（Stripe）が取得するメールアドレス・支払いに必要な最低限の情報",
      "製品のライセンス管理やアクティベーションに必要なデバイス識別子",
      "お問い合わせフォームにご入力いただいた内容",
    ],
  },
  {
    title: "利用目的",
    body: [
      "購入完了後のダウンロードリンク送付とレシート発行",
      "不具合の調査やサポート返信、重要なお知らせの配信",
      "税務・会計処理に必要な記録としての保管",
    ],
  },
  {
    title: "保管と削除",
    body: [
      "Stripe / Vercel / GitHub などの信頼できるインフラ上で暗号化された状態で管理",
      "不必要になったデータは 90 日を目安に匿名化または削除",
      "削除依頼をいただいた場合は法的義務を満たしたうえで速やかに対応",
    ],
  },
  {
    title: "第三者提供",
    body: [
      "決済処理に必要な範囲で Stripe に共有し、その他の第三者には提供しません",
      "法的な請求があった場合に限り、必要最小限の情報を開示します",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container-wide pt-24">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Privacy Policy</p>
          <h1 className="text-display text-5xl md:text-6xl gradient-text">個人情報の取り扱いについて</h1>
          <p className="text-lg text-muted-foreground">
            直販サイトで安心して購入いただけるよう、データの扱い方針と保護体制をまとめています。正式リリース時には最新の法令に合わせて更新します。
          </p>
        </div>
      </section>

      <section className="container-wide grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="border border-border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight gradient-text">{section.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {section.body.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="container-wide border-t border-border pt-12">
        <h3 className="text-xl font-semibold gradient-text">お問い合わせ</h3>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          プライバシーに関するご質問や削除依頼は、Contact ページのフォームからご連絡ください。48 時間以内を目安にサポートチームより返答いたします。
        </p>
      </section>
    </div>
  );
}
