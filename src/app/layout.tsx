import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Description from "./components/description";
import { Session } from "inspector";
import UserCard  from "./components/UserCard";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Login", href: "/login" },
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
        <Navbar navigation={navigation} />
        {children}
        <UserCard user={undefined} pagetype={""}></UserCard>
      </body>
    </html>
  );
}
