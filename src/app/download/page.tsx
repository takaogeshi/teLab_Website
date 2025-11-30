import type { Metadata } from "next";
import Link from "next/link";
import { getStripeClient } from "@/lib/stripe";
import { products, type ProductMeta, type ProductId } from "@/data/products";

export const metadata: Metadata = {
  title: "Download",
};

type DownloadPageProps = {
  searchParams: {
    session_id?: string;
  };
};

const downloadPathMap = new Map<ProductId, string>([
  ["puzzle-mac", "/downloads/puzzle-mac-v1.dmg"],
  ["clipslot-mac", "/downloads/clipslot-mac-v1.dmg"],
]);

function resolveProduct(productId?: string): ProductMeta | undefined {
  if (!productId) return undefined;
  return products.find((product) => product.id === productId);
}

export default async function DownloadPage({ searchParams }: DownloadPageProps) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return <ErrorMessage message="セッション情報が見つかりません。" />;
  }

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return <ErrorMessage message="決済が確認できませんでした。" />;
    }

    const productId = (session.metadata?.productId || session.client_reference_id) as
      | ProductId
      | undefined;
    const product = resolveProduct(productId);

    if (!product) {
      return <ErrorMessage message="購入商品の特定に失敗しました。" />;
    }

    const downloadHref = downloadPathMap.get(product.id) ?? "#";

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Download</p>
          <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
          <p className="text-slate-600">
            決済が確認できました。以下のリンクからダウンロードしてください。
          </p>
        </div>

        <div className="card-surface space-y-4 rounded-2xl border border-transparent p-6 shadow-lg">
          <div className="space-y-1 text-sm text-white/85">
            <p>ダウンロードキー: {product.downloadKey}</p>
            <p>ダミーの配布ファイルへのリンクです。後ほど本番ビルドを配置します。</p>
          </div>
          <Link
            href={downloadHref}
            className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/40"
          >
            ダウンロードする
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Download page error", error);
    return <ErrorMessage message="決済情報の確認に失敗しました。" />;
  }
}

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-900">Download</h1>
      <p className="text-slate-600">{message}</p>
      <p className="text-sm text-slate-500">
        お手数ですが、サポートまでご連絡ください。
      </p>
      <Link href="/contact" className="text-sm font-semibold text-indigo-600">
        お問い合わせページへ
      </Link>
    </div>
  );
}
