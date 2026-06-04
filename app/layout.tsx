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
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='58 -2 72 102'%3E%3Cpath fill='%231D65AD' d='m94.3 0c1.7 4.6 5.4 12.6 9.9 19.6 5.5 8.4 12.4 15.7 15.7 23-10.3-1.1-19.8 4.1-32.9 5.8-6 0.7-14.4-0.5-19.4-2.9 3.8-9.5 11.2-16.4 17.5-26.1 4.1-6.5 7.5-12.9 9.2-19.4z'/%3E%3Cpath fill='%231D65AD' d='m61.2 46.1c1.7 2.4 5.9 3.4 8.4 4.3 5.3 1.7 11.2 2.7 17.3 2.3 10.8-0.8 19.9-5 28.1-6.2 3.6-0.4 11.7-0.1 12.4 2.6v25.7c-2.3-2.5-8.1-3.1-14-2.4-5.8 0.6-12.3 3.1-22 4.9-4.9 0.9-9 1.4-15.2 0.5-4.1-0.6-7.1-1.2-10.3-2.8-2.1-0.9-4.2-2-4.7-3.8v-25.1z'/%3E%3Cpath fill='%231D65AD' d='m67.4 79.7c2.4 1.2 9 2.4 16 2.4 8 0 15.9-2.2 19.8-3.3 5-1.2 10.6-3.3 19.1-2.3-1.1 4.7-4.2 10.4-7.9 13.7-3.3 3.1-8 7-17.4 8-14.6 1.3-25.6-7-29.6-18.5z'/%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
