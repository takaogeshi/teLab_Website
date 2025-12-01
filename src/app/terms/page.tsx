import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

const clauses = [
  {
    title: "ライセンス範囲",
    body: "個人利用を前提とした 1 ユーザー 1 ライセンス制です。複数デバイスでの利用は同一ユーザーに限り認めます。",
  },
  {
    title: "禁止事項",
    body: "プロダクトの再配布、譲渡、リバースエンジニアリング、ライセンス共有行為は禁止します。",
  },
  {
    title: "決済と返金",
    body: "Stripe Checkout での支払い完了後にダウンロードリンクを提供します。不具合が確認された場合は購入から 7 日以内であれば返金相談を受け付けます。",
  },
  {
    title: "法人向け利用",
    body: "5 名以上での利用や再販目的の導入は別途契約が必要です。お問い合わせページからご連絡ください。",
  },
  {
    title: "サポート",
    body: "メールベースでのサポートを提供します。重大な不具合が発見された場合は優先して修正版を配布します。",
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <section className="band-gradient full-bleed px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl space-y-3">
          <h1 className="text-3xl font-semibold">Terms of Service</h1>
          <p className="text-white/80">
            teLab のアプリを安心して利用していただくための仮利用規約です。正式リリース時に法務レビューを経て更新します。
          </p>
        </div>
      </section>

      <div className="space-y-4">
        {clauses.map((clause) => (
          <section key={clause.title} className="card-surface space-y-1 rounded-2xl border border-transparent p-6">
            <h2 className="text-xl font-semibold">{clause.title}</h2>
            <p className="text-sm text-white/85">{clause.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
