import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { products } from "@/data/products";

const appBaseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    const body = await request.json().catch(() => null);

    if (!body || typeof body.productId !== "string") {
      return NextResponse.json({ error: "Invalid productId" }, { status: 400 });
    }

    const product = getProduct(body.productId);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const successUrl = `${appBaseUrl}/download?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${appBaseUrl}/buy/${product.id}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: product.stripePriceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        productId: product.id,
      },
      client_reference_id: product.id,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Checkout session missing redirect URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
