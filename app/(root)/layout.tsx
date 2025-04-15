import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400",]
});

export const metadata: Metadata = {
  title: "ndanyikevin | portfolio",
  description: "portfolio website for ndanyikevin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased ${ovo.className} leading-6 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
