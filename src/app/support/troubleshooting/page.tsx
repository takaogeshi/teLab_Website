import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Troubleshooting",
};

const steps = [
  "アプリを一度終了し、最新版にアップデートして再度お試しください",
  "macOS のアクセス権限（アクセシビリティ、クリップボード）の付与状況を確認",
  "再現手順とスクリーンショットを添えて contact ページからご連絡ください",
];

export default function TroubleshootingPage() {
  return (
    <div className="space-y-6">
      <section className="band-gradient full-bleed px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl space-y-3">
          <h1 className="text-3xl font-semibold">Troubleshooting</h1>
          <p className="text-white/80">
            代表的な解決ステップと、サポートに連絡いただく際のチェックリストをまとめています。
          </p>
        </div>
      </section>
      <ol className="list-decimal space-y-2 pl-6 text-sm text-slate-600">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="text-sm text-slate-500">
        詳細なログの採取方法などは今後アップデート予定です。
      </p>
    </div>
  );
}
