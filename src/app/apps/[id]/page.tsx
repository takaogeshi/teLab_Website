import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, type AppMeta } from "@/data/apps";
import { AppDetailContent } from "@/components/AppDetailContent";

type AppDetailPageProps = {
  params: Promise<{
    id: AppMeta["id"];
  }>;
};

export function generateStaticParams() {
  return apps.map((app) => ({ id: app.id }));
}

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const app = apps.find((item) => item.id === id);

  if (!app) {
    return {
      title: "Apps",
    };
  }

  return {
    title: app.name,
    description: app.tagline,
  };
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { id } = await params;
  const app = apps.find((item) => item.id === id);

  if (!app) {
    notFound();
  }

  return <AppDetailContent app={app} />;
}
