import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/layout/footer';
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
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.zippopotam.us; frame-ancestors 'none';",
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
