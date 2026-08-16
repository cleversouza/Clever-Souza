import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticlePage, articles } from "../../site";
import { routeSocialImage } from "../../social-images";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  const canonical = `https://www.cleversouza.com/conteudos/${article.slug}`;
  const socialImage = routeSocialImage(`/conteudos/${article.slug}`);

  return {
    title: article.title,
    description: article.description,
    authors: [
      {
        name: "Cleverson Batista de Souza",
        url: "https://www.cleversouza.com/sobre",
      },
    ],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: canonical,
      siteName: "Clever Souza",
      title: article.title,
      description: article.description,
      publishedTime: "2026-07-30",
      modifiedTime: "2026-07-30",
      authors: ["https://www.cleversouza.com/sobre"],
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [socialImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!articles.some((article) => article.slug === slug)) notFound();
  return <ArticlePage slug={slug} />;
}
