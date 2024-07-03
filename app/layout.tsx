import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hakeem Clarke - Senior Software Developer",
  description: "Next.js / JavaScript / Full Stack Developer Portfolio",
  keywords:
    "Next.js, React, JavaScript, Typescript, Software Development, Developer Portfolio",
  creator: "Hakeem Clarke",
  robots: "index, follow",
  icons: "https://www.hakeemclarke.com/favicon.jpg",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
