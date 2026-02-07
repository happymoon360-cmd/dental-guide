import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Dental Guide',
  description: 'Terms of use for Dental Guide website - educational dental resource for finding affordable care.',
  keywords: ['terms of service', 'legal', 'user agreement', 'dental guide terms'],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/terms',
    title: 'Terms of Service - Dental Guide',
    description: 'Terms of Service for Dental Guide website - educational dental resource.',
    siteName: 'Guerilla Dental Guide',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - Dental Guide',
    description: 'Terms of Service for Dental Guide website - educational dental resource.',
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/terms',
  },
};
