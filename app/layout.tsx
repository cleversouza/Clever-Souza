import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnalyticsBridge } from "./analytics-bridge";
import { MotionLayer } from "./motion-layer";
import { routeSocialImage } from "./social-images";

const siteUrl = "https://www.cleversouza.com";
const faviconUrl = "https://www.cleversouza.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clever Souza | Site oficial",
    template: "%s | Clever Souza",
  },
  description:
    "Site oficial de Clever Souza, identidade de Cleverson Batista de Souza, em Curitiba, com informações, conteúdos e a área de Massoterapia.",
  applicationName: "Clever Souza",
  authors: [{ name: "Cleverson Batista de Souza", url: `${siteUrl}/sobre` }],
  creator: "Cleverson Batista de Souza",
  publisher: "Clever Souza",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Clever Souza",
    title: "Clever Souza | Site oficial",
    description:
      "Site oficial de Clever Souza, identidade de Cleverson Batista de Souza, em Curitiba, com informações, conteúdos e a área de Massoterapia.",
    images: [
      {
        url: routeSocialImage("/"),
        width: 1200,
        height: 630,
        alt: "Clever Souza — site oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clever Souza | Site oficial",
    description:
      "Site oficial de Clever Souza, identidade de Cleverson Batista de Souza, em Curitiba, com informações, conteúdos e a área de Massoterapia.",
    images: [routeSocialImage("/")],
  },
  icons: {
    icon: [
      { url: `${faviconUrl}/favicon.svg`, type: "image/svg+xml" },
      { url: `${faviconUrl}/favicon-48.png`, sizes: "48x48", type: "image/png" },
      { url: `${faviconUrl}/favicon-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${faviconUrl}/favicon-16.png`, sizes: "16x16", type: "image/png" },
    ],
    shortcut: `${faviconUrl}/favicon.ico`,
    apple: `${faviconUrl}/apple-touch-icon.png`,
  },
  manifest: `${faviconUrl}/site.webmanifest`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071A33",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo-principal">
          Ir para o conteúdo principal
        </a>
        {children}
        <MotionLayer />
        <AnalyticsBridge />
      </body>
    </html>
  );
}
