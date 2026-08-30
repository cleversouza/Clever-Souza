import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MassotherapyArticlePage } from "../../editorial";
import {
  getTechniqueArticle,
  techniqueArticles,
} from "../../article-data";
import { socialImageUrl, techniqueSocialImage } from "../../../social-images";

const SITE_URL = "https://www.cleversouza.com";

export function generateStaticParams() {
  return techniqueArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getTechniqueArticle(slug);
  if (!article) return {};

  const canonical = `${SITE_URL}/massoterapia/conteudo/${article.slug}`;
  const image = article.socialImageName
    ? socialImageUrl(article.socialImageName)
    : techniqueSocialImage(article.imageStem);

  return {
    title: { absolute: article.metaTitle },
    description: article.metaDescription,
    authors: [
      { name: "Cleverson Batista de Souza", url: `${SITE_URL}/sobre` },
    ],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: canonical,
      siteName: "Clever Souza",
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.publishedIso,
      modifiedTime: article.modifiedIso,
      authors: [`${SITE_URL}/sobre`],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getTechniqueArticle(slug)) notFound();
  return <MassotherapyArticlePage slug={slug} />;
}
