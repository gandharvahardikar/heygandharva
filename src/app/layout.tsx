import { CommandMenu } from "@/components/command-menu";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ScrollProgress from "@/components/magicui/scroll-progress";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const fontMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,

  // 🦇 Add this
  icons: {
    icon: "/batman.png",
    apple: "/batman.png",
    shortcut: "/batman.png",
  },

  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Scroll Progress Bar */}
            <ScrollProgress />
            
            {/* Dot Pattern Background */}
            <DotPattern
              className="fixed inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_-20%,black_40%,transparent_100%)]"
            />
            
            {/* Main Content */}
            <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6 relative z-10">
              {children}
              <Navbar />
            </div>
            
            {/* Command Menu (Cmd+K) */}
            <CommandMenu />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
