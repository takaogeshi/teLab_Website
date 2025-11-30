import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

const sections = [
  {
    title: "収集する情報",
    body: [
      "購入時に Stripe が取得するメールアドレス、氏名、決済情報の一部",
      "ライセンス管理に必要なデバイス識別子（導入予定）",
      "お問い合わせフォームから送信された内容",
    ],
  },
  {
    title: "利用目的",
    body: [
      "決済処理およびダウンロードリンクの送付",
      "製品サポートやバグ調査への応答",
      "購入履歴の確認や会計上の記録",
    ],
  },
  {
    title: "データの保管と削除",
    body: [
      "Stripe / Vercel / GitHub など信頼できるサービスで安全に保管",
      "削除依頼は contact ページから受け付け、法的義務がない限り速やかに対応",
      "ログデータは 90 日を目安に自動削除予定",
    ],
  },
  {
    title: "第三者提供",
    body: [
      "決済処理に必要な範囲で Stripe に連携",
      "法令に基づく請求があった場合を除き、その他の第三者には提供しません",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
        <p className="text-slate-600">
          直販サイトで安全に購入いただくため、情報の取り扱い指針をまとめています。正式公開に合わせて最新の条項に更新します。
        </p>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="card-surface space-y-2 rounded-2xl border border-transparent p-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <ul className="list-disc space-y-1 pl-6 text-sm text-white/85">
              {section.body.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
