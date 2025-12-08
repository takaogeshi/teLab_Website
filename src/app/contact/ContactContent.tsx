"use client";

import Link from "next/link";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { AppMeta } from "@/data/apps";
import type { ProductMeta } from "@/data/products";

const reasonOptions = [
  { value: "bug", label: "バグ報告" },
  { value: "feature", label: "機能要望" },
  { value: "consulting", label: "開発相談" },
  { value: "other", label: "その他" },
];

type FormValues = {
  name: string;
  email: string;
  type: string;
  message: string;
};

const initialFormValues: FormValues = {
  name: "",
  email: "",
  type: reasonOptions[0]?.value ?? "bug",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const priceFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

type ContactContentProps = {
  apps: AppMeta[];
  products: ProductMeta[];
};

const supportDetails = [
  {
    title: "対応時間",
    description: "平日 10:00-18:00（JST）を目安に返信しています。状況によって 2 営業日ほどかかる場合があります。",
  },
  {
    title: "お問い合わせ内容",
    description: "購入前の疑問、導入後のトラブル、アップデートでの不具合などお気軽に相談ください。",
  },
  {
    title: "添付資料",
    description: "画面キャプチャやログをお持ちの場合は返信メールで共有いただけると助かります。",
  },
];

export function ContactContent({ apps, products }: ContactContentProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange =
    (field: keyof FormValues) =>
      (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
        setStatus("idle");
      };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formValues.name.trim()) {
      nextErrors.name = "名前を入力してください";
    }
    if (!formValues.email.trim()) {
      nextErrors.email = "メールアドレスを入力してください";
    } else if (!emailPattern.test(formValues.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (!formValues.message.trim()) {
      nextErrors.message = "本文を入力してください";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Send failed');
      }

      setStatus("success");
      setFormValues(initialFormValues);
    } catch (error) {
      console.error('Submit error:', error);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    }
  };

  const macProductsByAppId = new Map(products.map((product) => [product.appId, product]));

  return (
    <div className="space-y-24 pb-24">
      <section className="container-wide pt-20">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h1 className="text-display text-3xl md:text-4xl gradient-text">サポートチームへのお問い合わせ</h1>
          <p className="text-lg text-muted-foreground">
            フォームからのご連絡は 2 営業日以内を目安に返信しています。機能要望や技術的なご相談も歓迎です。
          </p>
        </div>
      </section>

      <section className="container-wide grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <form className="space-y-6 border border-border bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-800">
              名前 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange("name")}
              className="w-full border border-border px-4 py-3 text-base text-slate-900 focus:border-foreground focus:outline-none"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange("email")}
              className="w-full border border-border px-4 py-3 text-base text-slate-900 focus:border-foreground focus:outline-none"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="block text-sm font-semibold text-slate-800">
              種別
            </label>
            <select
              id="type"
              name="type"
              value={formValues.type}
              onChange={handleChange("type")}
              className="w-full border border-border bg-white px-4 py-3 text-base text-slate-900 focus:border-foreground focus:outline-none"
            >
              {reasonOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-800">
              本文 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange("message")}
              className="min-h-[180px] w-full border border-border px-4 py-3 text-base text-slate-900 focus:border-foreground focus:outline-none"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
            >
              <PaperAirplaneIcon className="h-4 w-4" /> 送信する
            </button>
            {status === "success" && (
              <p className="text-sm text-slate-600">送信内容を受け付けました。返信をお待ちください。</p>
            )}
          </div>
        </form>

        <aside className="space-y-4">
          {supportDetails.map((detail) => (
            <div key={detail.title} className="border border-border bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {detail.title}
              </p>
              <p className="mt-2 text-sm text-slate-700">{detail.description}</p>
            </div>
          ))}
        </aside>
      </section>

      <section className="container-wide space-y-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter gradient-text">販売情報</h2>
          <p className="text-sm text-muted-foreground">プロダクトごとの価格と導線をまとめています。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app) => {
            const macProduct = macProductsByAppId.get(app.id);

            return (
              <div
                key={app.id}
                className="flex flex-col justify-between border border-border p-6 shadow-sm transition-colors hover:border-foreground"
              >
                <div>
                  <h3 className="text-2xl font-semibold gradient-text">{app.name}</h3>
                  <p className="text-sm text-muted-foreground">{app.shortDescription}</p>
                </div>
                {app.platforms.includes("ios") && (
                  <div className="mt-4 space-y-1 border border-border bg-muted p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <DevicePhoneMobileIcon className="h-4 w-4" /> iOS 版
                    </p>
                    <p className="text-sm text-muted-foreground">App Store で販売（詳細は iOS ストア側）</p>
                    <Link href={`/apps/${app.id}`} className="inline-flex text-sm font-semibold text-foreground">
                      アプリ詳細を見る
                    </Link>
                  </div>
                )}
                {macProduct && (
                  <div className="mt-4 space-y-1 border border-border bg-muted p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <ComputerDesktopIcon className="h-4 w-4" /> macOS 版
                    </p>
                    <p className="text-sm text-muted-foreground">
                      価格: {priceFormatter.format(macProduct.price)} (税込)
                    </p>
                    <Link href={`/buy/${macProduct.id}`} className="inline-flex text-sm font-semibold text-foreground">
                      購入ページへ
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
