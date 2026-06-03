import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LABELDROP – Ihre Identität. Auf jeder Flasche.",
  description: "LabelDrop verwandelt jede Flasche Wasser in ein hochwertiges Markenprodukt. Individuell gebrandete Premium-Wasserflaschen für Unternehmen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600&family=Playfair+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
