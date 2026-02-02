import type { Metadata } from "next";
import "./globals.css";
import { meta, site } from "@/content/content";
import RootProviders from "@/components/RootProviders";
import CommandPaletteRoot from "@/components/CommandPaletteRoot";
import Footer from "@/components/Footer";
import AnalyticsPlaceholder from "@/components/AnalyticsPlaceholder";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: site.baseUrl,
    siteName: site.name,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Manobhi Ram Pabbathi portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <RootProviders>
          <CommandPaletteRoot>
            <TransitionProvider>
              <main className="min-h-screen text-white">{children}</main>
              <Footer />
            </TransitionProvider>
          </CommandPaletteRoot>
        </RootProviders>
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
