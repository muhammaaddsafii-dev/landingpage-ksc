import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KSC Indonesia - Konsultan Kehutanan, GIS, Survey & Development",
  description: "KSC adalah perusahaan konsultan terpercaya di Indonesia yang bergerak di bidang kehutanan, GIS, survey lahan, dan pengembangan proyek berkelanjutan.",
  keywords: "konsultan kehutanan, GIS Indonesia, survey lahan, pemetaan hutan, analisis spasial, pembangunan berkelanjutan",
  authors: [{ name: "KSC Indonesia" }],
  openGraph: {
    title: "KSC Indonesia - Konsultan Kehutanan, GIS, Survey & Development",
    description: "Mitra terpercaya Anda dalam layanan kehutanan, GIS, survey, dan pengembangan proyek berkelanjutan di Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "KSC Indonesia - Konsultan Kehutanan & GIS",
    description: "Solusi komprehensif untuk kehutanan, GIS, survey, dan pengembangan proyek berkelanjutan.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
