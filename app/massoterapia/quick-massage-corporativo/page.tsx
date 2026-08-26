import type { Metadata } from "next";
import { JsonLd, PageShell } from "../../site";
import { QuickMassageCorporateLanding } from "./quick-massage-corporativo";

const pageUrl =
  "https://www.cleversouza.com/massoterapia/quick-massage-corporativo";
const socialImage =
  "https://www.cleversouza.com/social/quick-massage-corporativo-og-v3.png";
const title = "Quick Massage corporativa em Curitiba";
const description =
  "Quick Massage para empresas em Curitiba. Organize um briefing inicial e solicite um orçamento conforme equipe, frequência e formato da ação.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Quick Massage para empresas",
    "Quick Massage corporativa",
    "massagem em empresas",
    "bem-estar corporativo Curitiba",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: "Clever Souza",
    title,
    description,
    images: [
      {
        url: socialImage,
        secureUrl: socialImage,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Quick Massage corporativa em Curitiba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: socialImage,
        secureUrl: socialImage,
        alt: "Quick Massage corporativa em Curitiba",
      },
    ],
  },
  other: {
    "og:image:url": socialImage,
    "og:image:secure_url": socialImage,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quick Massage corporativa em Curitiba",
  url: "https://www.cleversouza.com/massoterapia/quick-massage-corporativo",
  description:
    "Página para solicitar orçamento de Quick Massage corporativa com Clever Souza em Curitiba.",
  inLanguage: "pt-BR",
  isPartOf: {
    "@type": "WebSite",
    name: "Clever Souza",
    url: "https://www.cleversouza.com/",
  },
  about: {
    "@type": "Service",
    name: "Quick Massage corporativa",
    areaServed: {
      "@type": "City",
      name: "Curitiba",
    },
  },
};

export default function Page() {
  return (
    <PageShell
      active="/massoterapia"
      breadcrumb={[
        { label: "Início", href: "/" },
        { label: "Massoterapia", href: "/massoterapia" },
        { label: "Quick Massage corporativa" },
      ]}
    >
      <JsonLd value={pageSchema} />
      <QuickMassageCorporateLanding />
    </PageShell>
  );
}
