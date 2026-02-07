import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/layout/footer';
import { SchemaMarkup } from '@/components/seo/schema-markup';
import { CanonicalUrl } from '@/lib/seo/canonical-url';
import { cn } from '@/lib/utils/cn';

const inter = Inter({ subsets: ['latin'], variable: '--font-pretendard' });

export const metadata: Metadata = {
  metadataBase: new URL('https://dental.guide'),
  title: {
    default: 'Guerilla Dental Guide - Dental Survival Tools for the Uninsured',
    template: '%s | Guerilla Dental Guide',
  },
  description: 'Dental negotiation script generator, dental school finder, and cost estimator for uninsured and low-income individuals',
  keywords: ['dental cost', 'free dental', 'dental school', 'dental negotiation', 'affordable dental care'],
  authors: [{ name: 'Guerilla Dental Guide' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://dental.guide',
    title: 'Guerilla Dental Guide',
    description: 'Dental survival tools for the uninsured - negotiation scripts, school finder, cost estimator',
    siteName: 'Guerilla Dental Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guerilla Dental Guide',
    description: 'Dental survival tools for the uninsured',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.zippopotam.us https://nominatim.openstreetmap.org https://plausible.io; frame-ancestors 'none';",
  },
  alternates: {
    canonical: 'https://dental.guide',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <CanonicalUrl url="https://dental.guide" />
        <SchemaMarkup />
        <link rel="alternate" type="application/rss+xml" title="Guerilla Dental Guide RSS Feed" href="https://dental.guide/rss.xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2b6cb0" />
        <meta name="msapplication-TileColor" content="#2b6cb0" />
        <meta name="theme-color" content="#2b6cb0" />
        {process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={cn(inter.variable, 'min-h-screen antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="flex flex-col min-h-screen">
            <div id="main-content" className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
