import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/navBar";
import { sora } from "./fonts/fonts";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Binit Shrestha | Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Binit Shrestha, a full-stack developer with expertise in building modern, scalable web applications. Specializing in front-end and back-end development using React, Node.js, Next.js, JavaScript, and more.",
  keywords:
    "Binit Shrestha, full-stack developer, web developer, portfolio, front-end development, back-end development, React, Node.js, JavaScript, Next.js, web applications, REST APIs, database management, UI/UX design",
  authors: [
    {
      name: "Binit Shrestha",
      url: "https://binitshrestha7.com.np",
    },
  ],
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
