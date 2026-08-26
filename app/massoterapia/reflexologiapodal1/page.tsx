import type { Metadata } from "next";
import { ReflexologiaLanding } from "./reflexologia-landing";

const pageUrl =
  "https://www.cleversouza.com/massoterapia/reflexologiapodal1";
const socialImage =
  "https://www.cleversouza.com/social/reflexologia-podal-whatsapp-v3.png";
const title = "Reflexologia Podal | Clever Souza";
const description =
  "Uma experiência de Reflexologia Podal criada para oferecer pausa, atenção e conforto aos pés, com pressão ajustada às suas preferências.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  robots: { index: false, follow: false },
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
        alt: "Seu dia passa inteiro pelos seus pés — Reflexologia Podal com Clever Souza",
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
        alt: "Seu dia passa inteiro pelos seus pés — Reflexologia Podal com Clever Souza",
      },
    ],
  },
  other: {
    "og:image:url": socialImage,
    "og:image:secure_url": socialImage,
  },
};

export default function Page() {
  return <ReflexologiaLanding />;
}
