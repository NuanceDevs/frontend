import "./globals.css";
import Logo from "./ui/components/Logo/logo";
import NavbarHome from "./ui/components/navbar/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Searchbar from "./ui/components/searchbar/searchbar";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/ui/pages/projects" },
  { name: "Blog", href: '/ui/pages/blog' },
  { name: "About", href: "/ui/pages/about" },
];
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuancée",
  description: "Portfolio of Nuancée",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarHome navigation={navigation}/>
        {children}
      </body>
    </html>
  );
}
