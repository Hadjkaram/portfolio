import type { Metadata, Viewport } from "next";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f7f7f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibrahimkaramoko.site"),
  title: "El Hadj Ibrahim V. Karamoko — Consultant e-Santé, Architecte IA & Tech Lead",
  description: "Portfolio d'Ibrahim Karamoko : 10+ ans d'expérience dans l'architecture de solutions critiques, l'IA appliquée (Computer Vision, NLP), et l'e-Santé internationale (UNICEF, PNUD, OMS, AFD, MSHP-CMU, Laboratoire Roche).",
  keywords: [
    "Ibrahim Karamoko",
    "El Hadj Ibrahim Karamoko",
    "Architecte IA",
    "Consultant e-Santé",
    "Lead Tech Fullstack",
    "CISSP",
    "HEC Maroc",
    "Télépathologie IA",
    "Nuria UNICEF",
    "Tila OMS PNUD",
    "Laboratoire Roche IA",
    "Côte d'Ivoire Tech"
  ],
  authors: [{ name: "El Hadj Ibrahim V. Karamoko" }],
  creator: "El Hadj Ibrahim V. Karamoko",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ibrahimkaramoko.site",
    title: "El Hadj Ibrahim V. Karamoko — Architecte IA & Consultant e-Santé",
    description: "Architecte de solutions intelligentes et infrastructures critiques. Déploiements internationaux : UNICEF, PNUD, OMS, AFD, MSHP-CMU, Laboratoire Roche.",
    siteName: "Portfolio Ibrahim Karamoko",
    images: [
      {
        url: "/ibrahim-photo.png",
        width: 800,
        height: 800,
        alt: "El Hadj Ibrahim Karamoko",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Logo_IK.png", type: "image/png" },
    ],
    apple: "/Logo_IK.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-[#f7f7f5] text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
        <LanguageProvider>
          {children}
          <CookieConsentBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}