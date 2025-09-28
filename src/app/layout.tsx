import type { Metadata } from "next";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { ViewTransitions } from "next-view-transitions";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/custom/navigation";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Demissie - Fullstack Software Engineer",
  description:
    "Fullstack software engineer passionate about building exceptional web experiences. Currently working at Phishfort.",
  keywords: [
    "Daniel Demissie",
    "Software Engineer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Daniel Demissie" }],
  creator: "Daniel Demissie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danideme.com",
    title: "Daniel Demissie - Fullstack Software Engineer",
    description:
      "Fullstack software engineer passionate about building exceptional web experiences.",
    siteName: "Daniel Demissie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Demissie - Fullstack Software Engineer",
    description:
      "Fullstack software engineer passionate about building exceptional web experiences.",
    creator: "@danideme",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <body className="bg-background text-foreground font-sans">
          <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
            <Navigation />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
