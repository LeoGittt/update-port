import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow zooming for accessibility
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Leonel González | Desarrollador Frontend",
  description: "Portfolio de Leonel González, desarrollador frontend especializado en React, Next.js y TypeScript. Creando experiencias digitales de alto impacto.",
  keywords: ["desarrollador frontend", "React", "Next.js", "TypeScript", "portfolio", "Leonel González"],
  authors: [{ name: "Leonel González" }],
  creator: "Leonel González",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://leonelgonzalez.dev", // Update with real URL if possible
    title: "Leonel González | Desarrollador Frontend",
    description: "Desarrollador frontend especializado en crear interfaces modernas y eficientes.",
    siteName: "Portfolio de Leonel González",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonel González | Desarrollador Frontend",
    description: "Desarrollador frontend especializado en React y Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
}; 