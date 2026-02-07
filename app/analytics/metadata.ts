import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usage Analytics - Dental Guide',
  description: 'Track your usage of Dental Guide tools. Privacy-focused analytics stored locally on your device - no data sent to external servers.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/analytics',
    title: 'Usage Analytics - Dental Guide',
    description: 'Track your usage of Dental Guide tools. Privacy-focused analytics stored locally on your device.',
  },
  twitter: {
    card: 'summary',
    title: 'Usage Analytics - Dental Guide',
    description: 'Track your usage of Dental Guide tools. Privacy-focused analytics stored locally on your device.',
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/analytics',
  },
};
