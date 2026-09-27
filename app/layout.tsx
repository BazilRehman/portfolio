import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazil Rehman | SOC & Junior Penetration Tester",
  description:
    "Cybersecurity portfolio of Bazil Rehman — M.Sc. Cybersecurity postgraduate, TryHackMe top 5% globally, seeking entry-level SOC analyst and junior penetration testing roles.",
  openGraph: {
    title: "Bazil Rehman | SOC & Junior Penetration Tester",
    description:
      "M.Sc. Cybersecurity postgraduate with hands-on TryHackMe/HTB experience and security engineering projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 mx-auto max-w-5xl w-full px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
