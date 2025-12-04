import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const addressJa = "〒606-0034 京都市左京区岩倉村松町138";
const addressEn = "138 Muramatsu-cho, Iwakura, Sakyo-ku, Kyoto 606-0034, Japan";

export default function AboutPage() {
  return (
    <div className="container-wide space-y-12 py-20">
      <section className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">About us</p>
        <h1 className="text-display text-5xl md:text-6xl gradient-text">teLab / テラボ</h1>
        <p className="text-lg text-muted-foreground">
          teLab は、個人や小さなチームのために「気が散らない道具」をつくる開発スタジオです。
          使い方を覚える手間を減らし、日々の集中の邪魔をしないことを目指しています。
        </p>
        <p className="text-lg text-muted-foreground">
          studi11 として Takao Geshi が中心となり、macOS / iOS アプリを開発・販売しています。
          このサイトでは直販ストアやアップデート情報、開発の舞台裏を発信していきます。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">事業者情報</h2>
        <div className="space-y-2 text-slate-700">
          <p>{addressJa}</p>
          <p>{addressEn}</p>
          <p>事業名義: teLab / studi11</p>
          <p>代表: Takao Geshi</p>
        </div>
      </section>
    </div>
  );
}
