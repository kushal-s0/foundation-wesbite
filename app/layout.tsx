import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nayepankh-foundation.vercel.app"),
  title: {
    default: "Nayepankh Foundation | Empowering Lives, Creating Opportunities",
    template: "%s | Nayepankh Foundation"
  },
  description:
    "Nayepankh Foundation uplifts communities through education, empowerment, social welfare, and community development initiatives.",
  keywords: ["Nayepankh Foundation", "NGO", "education", "women empowerment", "volunteer", "social welfare"],
  openGraph: {
    title: "Nayepankh Foundation",
    description:
      "Empowering communities through education, skill development, and social initiatives.",
    url: "https://nayepankh-foundation.vercel.app",
    siteName: "Nayepankh Foundation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Community education initiative"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayepankh Foundation",
    description: "Empowering Lives, Creating Opportunities",
    images: ["https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
