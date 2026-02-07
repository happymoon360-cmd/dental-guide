import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Dental Guide',
  description: 'How Dental Guide collects, uses, and protects your data. We do not sell, rent, or share your personal information.',
  keywords: ['privacy policy', 'data collection', 'localStorage analytics', 'dental guide privacy'],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/privacy',
    title: 'Privacy Policy - Dental Guide',
    description: 'Privacy Policy for Dental Guide - educational dental resource with local-only analytics.',
    siteName: 'Guerilla Dental Guide',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Dental Guide',
    description: 'Privacy Policy for Dental Guide - educational dental resource with local-only analytics.',
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/privacy',
  },
};
