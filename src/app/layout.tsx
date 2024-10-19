import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/navBar";
import { sora } from "./fonts/font";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Binit shrestha's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className + `antialiased px-32`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
