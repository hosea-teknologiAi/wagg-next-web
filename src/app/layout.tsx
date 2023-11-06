import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/styles.scss";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

type LayoutType = {
  children?: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Wagginton",
    template: "%s | Wagginton",
  },
  description: "Pet Shop Wagginton",
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
