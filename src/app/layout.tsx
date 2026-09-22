import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ibrahimkaramoko.site"),
  title: "El Hadj Ibrahim V. Karamoko | Consultant e-Santé, Architecte IA & Lead Fullstack",
  description: "Portfolio officiel d'Ibrahim Karamoko : 10+ ans d'expérience dans l'architecture de solutions critiques, l'IA appliquée (Computer Vision, NLP), et l'e-Santé nationale (UNICEF, MSHP-CMU, SiPath).",
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
    "Côte d'Ivoire Tech"
  ],
  authors: [{ name: "El Hadj Ibrahim V. Karamoko" }],
  creator: "El Hadj Ibrahim V. Karamoko",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ibrahimkaramoko.site",
    title: "El Hadj Ibrahim V. Karamoko | Architecte IA & Consultant e-Santé",
    description: "Architecte de solutions intelligentes et infrastructures critiques. Validé UNICEF, MSHP-CMU, SiPath.",
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
    icon: "/Logo_IK.png",
    apple: "/Logo_IK.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}