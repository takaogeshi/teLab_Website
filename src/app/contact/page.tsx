import type { Metadata } from "next";
import { apps } from "@/data/apps";
import { products } from "@/data/products";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <ContactContent apps={apps} products={products} />;
}
