import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const champagne = localFont({
  src: "./fonts/ChampagneLimousines.ttf",
  variable: "--font-champagne",
  display: "swap",
});

const futura = localFont({
  src: [
    {
      path: "./fonts/FuturaStdLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/FuturaStdMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FuturaStdHeavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igualdadconsultora.com"),
  title: "Igualdad Consultora | Prevención y Abordaje de la Violencia Laboral",
  description:
    "Consultoría técnica e institucional para empresas, sindicatos y organismos públicos. Sistema Integral de Prevención, aplicación del Convenio 190 OIT, protocolos y capacitación especializada con la dirección de Belén Scalesa.",
  keywords: [
    "violencia laboral",
    "acoso laboral",
    "Convenio 190 OIT",
    "protocolos de género",
    "Belén Scalesa",
    "consultoría laboral",
    "capacitación institucional",
    "Ley Micaela",
    "comisión tripartita",
    "clima laboral",
  ],
  authors: [{ name: "Belén Scalesa", url: "https://igualdadconsultora.com" }],
  creator: "Igualdad Consultora",
  publisher: "Igualdad Consultora",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo-symbol.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://igualdadconsultora.com",
    siteName: "Igualdad Consultora",
    title: "Igualdad Consultora | Prevención y Abordaje de la Violencia Laboral",
    description:
      "Transformamos marcos normativos en protocolos aplicables para empresas, sindicatos y organismos públicos. Sistema Integral de 4 fases.",
    images: [
      {
        url: "/images/logo-full.png",
        width: 974,
        height: 873,
        alt: "Isotipo y marca institucional de Igualdad Consultora",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#544f82",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${champagne.variable} ${futura.variable}`}>
      <body className="min-h-screen bg-[#faf9fd] text-[#3c3a4a] font-sans antialiased selection:bg-[#dedbea] selection:text-[#544f82]">
        {children}
      </body>
    </html>
  );
}
