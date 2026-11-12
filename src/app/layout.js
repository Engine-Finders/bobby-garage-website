import { Inter } from "next/font/google";
import Header from "../components/common/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Engine Rebuild & Repair Specialists | Boby Engine Work",
  description: "Engine rebuilding, reconditioning and repair at Boby Engine Work in Billericay. Explore model-specific fitted rebuild guides and request an engine assessment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
