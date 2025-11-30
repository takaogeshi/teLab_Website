import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-slate-900">About teLab</h1>
      <p className="text-slate-600">
        teLab は、個人や小さなチームのために「気が散らない道具」をつくる開発スタジオです。
        使い方を覚える手間を減らし、日々の集中の邪魔をしないことを目指しています。
      </p>
      <p className="text-slate-600">
        このサイトでは、macOS / iOS アプリの直販やアップデート情報、開発にまつわるニュースを発信していきます。
      </p>
    </div>
  );
}
