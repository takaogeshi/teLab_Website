import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, type ProductId } from "@/data/products";
import { apps } from "@/data/apps";
import { PurchaseButton } from "@/components/PurchaseButton";

type BuyPageProps = {
  params: {
    productId: ProductId;
  };
};

const priceFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});

export function generateStaticParams() {
  return products.map((product) => ({ productId: product.id }));
}

export function generateMetadata({ params }: BuyPageProps): Metadata {
  const product = products.find((item) => item.id === params.productId);

  if (!product) {
    return {
      title: "購入",
    };
  }

  return {
    title: `${product.name} を購入`,
    description: product.description,
  };
}

export default function BuyPage({ params }: BuyPageProps) {
  const product = products.find((item) => item.id === params.productId);

  if (!product) {
    notFound();
  }

  const relatedApp = apps.find((app) => app.id === product.appId);

  return (
    <div className="space-y-8">
      <section className="band-gradient full-bleed px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Purchase</p>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-white/85">{product.description}</p>
        </div>
      </section>

      <div className="card-surface rounded-2xl border border-transparent p-6 shadow-lg">
        <dl className="space-y-4 text-white/85">
          <div className="flex items-start justify-between">
            <dt className="text-sm">価格</dt>
            <dd className="text-xl font-semibold text-white">
              {priceFormatter.format(product.price)} (税込)
            </dd>
          </div>
          <div className="space-y-1 text-sm">
            <p>このページから Stripe 決済に進みます（実装は後で）。</p>
            <p>決済後、登録メールアドレス宛にダウンロードリンクをお送りします。</p>
          </div>
          <PurchaseButton productId={product.id} productName={product.name} />
        </dl>
      </div>

      {relatedApp && (
        <div className="text-sm text-slate-500">
          <Link href={`/apps/${relatedApp.id}`} className="text-indigo-600">
            {relatedApp.name} の詳細ページに戻る
          </Link>
        </div>
      )}
    </div>
  );
}
