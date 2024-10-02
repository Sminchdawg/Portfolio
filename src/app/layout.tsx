import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "../assets/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mitchell Genova Portfolio",
  description: "Portfolio describing skills and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.roboto.className} bg-primary px-5 mt-4`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
