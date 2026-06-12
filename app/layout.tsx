import type { Metadata } from "next";
import { Poppins, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
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
    default: "Alisa Pagan | Junior Front-End Developer & UX/UI Designer",
    template: "%s | Alisa Pagan",
  },
  description:
    "Portfolio of Alisa Pagan, a junior front-end developer and UX/UI designer building responsive web applications with React, Next.js, TypeScript, Node.js, and modern UI/UX practices.",
  openGraph: {
    title: "Alisa Pagan | Junior Front-End Developer & UX/UI Designer",
    description:
      "Portfolio featuring front-end development, UX/UI design, and full-stack project work.",
    url: "https://alisapagan.dev",
    siteName: "Alisa Pagan Portfolio",
    images: [
      {
        url: "/Alisa_Pagan_OG_image.webp",
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
    title: "Alisa Pagan | Junior Front-End Developer & UX/UI Designer",
    description:
      "Portfolio featuring front-end development, UX/UI design, and full-stack project work.",
    images: ["/Alisa_Pagan_OG_image.webp"],
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
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
