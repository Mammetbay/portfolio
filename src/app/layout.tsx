import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mammetbay | AI Engineer & Full-Stack Architect",
  description:
    "Portfolio of Mammetbay — Machine Learning Engineer and Full-Stack Architect specializing in PyTorch Speech AI, LLMs, Next.js, and mobile systems.",
  keywords: [
    "Mammetbay",
    "AI Engineer",
    "Machine Learning",
    "FastConformer",
    "Speech Recognition",
    "Full-Stack Developer",
    "Next.js",
    "React Native",
    "PyTorch",
    "TypeScript",
  ],
  authors: [{ name: "Mammetbay" }],
  openGraph: {
    title: "Mammetbay | AI Engineer & Full-Stack Architect",
    description:
      "Portfolio of Mammetbay — Machine Learning Engineer and Full-Stack Architect specializing in PyTorch Speech AI, LLMs, Next.js, and mobile systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-[#141414] text-neutral-100 selection:bg-[#E4FD97] selection:text-[#141414] overflow-y-scroll overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
