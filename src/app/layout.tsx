import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Move Better. Feel Stronger. Live Higher.`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "physical therapy Denver",
    "occupational health",
    "workplace wellness",
    "strength and conditioning",
    "injury prevention",
    "orthopedic rehab",
    "DJ Keim DPT",
  ],
  authors: [{ name: siteConfig.founder.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Move Better. Feel Stronger. Live Higher.`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/images/hero-poster.webp", width: 1280, height: 720, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/hero-poster.webp"],
  },
  icons: {
    icon: "/logos/upward-submark-teal.svg",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: { "@type": "PostalAddress", addressLocality: "Denver", addressRegion: "CO", addressCountry: "US" },
  medicalSpecialty: "PhysicalTherapy",
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: "Doctor of Physical Therapy",
    honorificSuffix: siteConfig.founder.credentials,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
