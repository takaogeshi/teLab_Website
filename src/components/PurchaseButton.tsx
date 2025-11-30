"use client";

import { useState } from "react";
import type { ProductId } from "@/data/products";

type PurchaseButtonProps = {
  productId: ProductId;
  productName: string;
};

export function PurchaseButton({ productId, productName }: PurchaseButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        throw new Error("Failed to start checkout");
      }

      const data = (await response.json()) as { url?: string };

      if (!data.url) {
        throw new Error("Checkout URL was not returned");
      }

      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout start failed", err);
      setError("決済ページを開けませんでした。少し経ってから再度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        className="inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-300"
      >
        {isLoading ? "処理中..." : `${productName} を購入する`}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
