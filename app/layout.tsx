import type { Metadata } from "next";
import { Poppins, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ToasterProvider from "@/components/UI/ToasterProvider/Toaster";
import Footer from "@/components/Layout/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alisapagan.dev"),
  title: {
    default: "Alisa Pagan | Junior Full-Stack Developer & UX Designer",
    template: "%s | Alisa Pagan",
  },
  description:
    "Portfolio of Alisa Pagan, a junior full-stack developer and UX designer building responsive web applications with React, Next.js, TypeScript, Node.js, and modern UI/UX practices.",
  openGraph: {
    title: "Alisa Pagan | Junior Full-Stack Developer & UX Designer",
    description:
      "Portfolio of Alisa Pagan, featuring full-stack development, UX/UI design, and responsive web application projects.",
    url: "https://alisapagan.dev",
    siteName: "Alisa Pagan Portfolio",
    images: [
      {
        // TODO: Replace with /og-image.webp after creating a dedicated 1200x630 social preview.
        url: "/Alisa_Pagan.webp",
        width: 1200,
        height: 630,
        alt: "Alisa Pagan portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alisa Pagan | Junior Full-Stack Developer & UX Designer",
    description:
      "Portfolio featuring full-stack development, UX/UI design, and responsive web application projects.",
    images: ["/Alisa_Pagan.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${robotoMono.variable}`}
    >
      <body>
        <ToasterProvider />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
