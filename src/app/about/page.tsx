import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

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
          macOS,windows,iOS,Androidアプリを開発・販売しています。
          このサイトでは直販ストアやアップデート情報、開発の舞台裏を発信していきます。
        </p>
      </section>

      <section className="space-y-2 text-muted-foreground">
        <p>Add,138 Muramatsu-cho, Iwakura, Sakyo-ku, Kyoto 606-0034, Japan</p>
        <p>teLab/Takao Geshi</p>
      </section>
    </div>
  );
}
