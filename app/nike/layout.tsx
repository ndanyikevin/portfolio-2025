import type { Metadata } from "next";

import "./nike.css";


export const metadata: Metadata = {
  title: "ndanyikevin || nike clone",
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
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
