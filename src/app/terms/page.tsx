import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

const clauses = [
  {
    title: "ライセンス範囲",
    body: "購入者本人による利用を前提とした 1ユーザーライセンスです。同一アカウントであれば複数デバイスにインストールいただけます。",
  },
  {
    title: "禁止事項",
    body: "再配布・譲渡・リバースエンジニアリング、ライセンスキーの共有行為は禁止しています。",
  },
  {
    title: "決済と返金",
    body: "Stripe Checkout で決済完了後にダウンロードリンクを発行します。動作不良が確認された場合は 7 日以内のご連絡で返金を検討します。",
  },
  {
    title: "法人での利用",
    body: "5 名以上での利用や再販を伴うケースは個別契約となります。Contact ページからご相談ください。",
  },
  {
    title: "サポート体制",
    body: "メールベースでのサポートを提供し、重大な不具合が判明した場合は優先的に修正版を配布します。",
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-16 pb-24">
      <section className="container-wide pt-24">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Terms of Service</p>
          <h1 className="text-display text-5xl md:text-6xl gradient-text">利用規約（暫定版）</h1>
          <p className="text-lg text-muted-foreground">
            teLab のアプリを安心してご利用いただくための基本的なルールを記載しています。正式リリース時に法務レビューを経て更新される予定です。
          </p>
        </div>
      </section>

      <section className="container-wide space-y-6">
        {clauses.map((clause) => (
          <article key={clause.title} className="border border-border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight gradient-text">{clause.title}</h2>
            <p className="mt-3 text-muted-foreground">{clause.body}</p>
          </article>
        ))}
      </section>

      <section className="container-wide border-t border-border pt-12">
        <h3 className="text-xl font-semibold gradient-text">改訂について</h3>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          規約はサービスの改善や法改正に合わせて随時更新されます。重大な変更がある場合はブログおよび購入ページで事前にお知らせします。
        </p>
      </section>
    </div>
  );
}
