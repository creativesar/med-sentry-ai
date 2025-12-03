import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedSentry AI | Safe Medical Triage Assistant",
  description: "World-class medical triage and report analysis powered by Gemini AI. Evidence-based, conservative medical guidance for educational purposes.",
  keywords: ["medical AI", "symptom checker", "medical triage", "health assistant", "medical analysis"],
  authors: [{ name: "MedSentry AI Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  themeColor: "#0ea5e9",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MedSentry AI"
  },
  openGraph: {
    type: "website",
    title: "MedSentry AI | Safe Medical Triage Assistant",
    description: "World-class medical triage and report analysis powered by Gemini AI.",
    siteName: "MedSentry AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "MedSentry AI",
    description: "World-class medical triage and report analysis"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}