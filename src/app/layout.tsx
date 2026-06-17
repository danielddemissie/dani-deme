import type { Metadata } from "next";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { ViewTransitions } from "next-view-transitions";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/custom/navigation";
import "./globals.css";
import Script from "next/script";

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
  title: "Daniel Demelash — Edge & Security Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in Cloudflare edge/serverless (Workers, D1, tRPC) and applied security — anti-phishing & fraud prevention. Remote, TypeScript end to end.",
  keywords: [
    "Daniel Demelash",
    "Daniel Demissie",
    "Software Engineer",
    "Full-Stack Developer",
    "Cloudflare Workers",
    "Cloudflare D1",
    "Edge Computing",
    "Serverless",
    "Cybersecurity",
    "Anti-phishing",
    "tRPC",
    "React",
    "Next.js",
    "TypeScript",
    "Remote",
  ],
  authors: [{ name: "Daniel Demelash" }],
  creator: "Daniel Demelash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danideme.com",
    title: "Daniel Demelash — Edge & Security Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in Cloudflare edge/serverless and applied security. 3+ years shipping cybersecurity infrastructure at the edge.",
    siteName: "Daniel Demelash Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Demelash — Edge & Security Full-Stack Engineer",
    description:
      "Full-stack engineer specializing in Cloudflare edge/serverless and applied security.",
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
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#18181b" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        </head>
        <body className="bg-background text-foreground flex-col items-center min-h-screen lg:mx-auto lg:w-5xl">
          <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
            <Navigation />
            <div className="mx-auto w-[98%]">{children}</div>
          </ThemeProvider>
          <Script id="service-worker-register" strategy="afterInteractive">
            {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js');
                });
              }
            `}
          </Script>
        </body>
      </html>
    </ViewTransitions>
  );
}
