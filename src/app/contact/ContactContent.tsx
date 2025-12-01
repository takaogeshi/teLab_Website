"use client";

import Link from "next/link";
import { DevicePhoneMobileIcon, ComputerDesktopIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
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

export function ContactContent({ apps, products }: ContactContentProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (field: keyof FormValues) =>
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    console.log("Contact form (dummy)", formValues);
    // 未実装: 送信処理は後で追加
    setStatus("success");
    setFormValues(initialFormValues);
  };

  const macProductsByAppId = new Map(products.map((product) => [product.appId, product]));

  return (
    <div className="space-y-12">
      <section className="band-gradient full-bleed px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="text-white/80">
            お問い合わせは以下のフォームをご利用ください。2 営業日以内を目安にご返信いたします。
          </p>
        </div>
      </section>

      <section className="card-surface rounded-2xl border border-transparent p-6 shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
              名前 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange("name")}
              className="w-full rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-white focus:border-white focus:outline-none"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-sm text-red-300">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange("email")}
              className="w-full rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-white focus:border-white focus:outline-none"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-sm text-red-300">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="block text-sm font-semibold text-slate-700">
              種別
            </label>
            <select
              id="type"
              name="type"
              value={formValues.type}
              onChange={handleChange("type")}
              className="w-full rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-white focus:border-white focus:outline-none"
            >
              {reasonOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
              本文 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange("message")}
              className="min-h-[160px] w-full rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-white focus:border-white focus:outline-none"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="text-sm text-red-300">{errors.message}</p>}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              <PaperAirplaneIcon className="h-4 w-4" /> 送信する
            </button>
            {status === "success" && (
              <p className="text-sm text-white/80">送信内容を受け付けました（ダミー）</p>
            )}
          </div>
        </form>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">販売情報</h2>
          <p className="text-sm text-slate-500">アプリごとの価格と導線をまとめています。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app) => {
            const macProduct = macProductsByAppId.get(app.id);

            return (
              <div key={app.id} className="card-surface space-y-4 rounded-2xl border border-transparent p-6 shadow-lg">
                <div>
                  <h3 className="text-xl font-semibold">{app.name}</h3>
                  <p className="text-sm text-white/85">{app.shortDescription}</p>
                </div>
                {app.platforms.includes("ios") && (
                  <div className="space-y-1 rounded-xl border border-white/30 bg-white/10 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <DevicePhoneMobileIcon className="h-4 w-4" /> iOS 版
                    </p>
                    <p className="text-sm text-white/85">App Store で販売（詳細は iOS ストア側）</p>
                    <Link
                      href={`/apps/${app.id}`}
                      className="inline-flex text-sm font-semibold text-white"
                    >
                      アプリ詳細を見る
                    </Link>
                  </div>
                )}
                {macProduct && (
                  <div className="space-y-1 rounded-xl border border-white/30 bg-white/10 p-4">
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <ComputerDesktopIcon className="h-4 w-4" /> macOS 版
                    </p>
                    <p className="text-sm text-white/85">
                      価格: {priceFormatter.format(macProduct.price)} (税込)
                    </p>
                    <Link
                      href={`/buy/${macProduct.id}`}
                      className="inline-flex text-sm font-semibold text-white"
                    >
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
