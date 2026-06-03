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
      <body>{children}</body>
    </html>
  );
}
