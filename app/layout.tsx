import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Articles Study Shell",
  description: "Local proof-of-concept study shell for article-based ordination prep."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}