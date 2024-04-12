import type { Metadata } from "next";
import { Roboto, Raleway } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});
export const metadata: Metadata = {
  title: "Lista de carros WS WORK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
