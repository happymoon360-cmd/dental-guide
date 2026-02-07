import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Kit - Dental Guide Media Resources',
  description: 'Access press kit resources for Dental Guide. Find company overview, media contact information, downloadable assets including logos, brand guidelines, and screenshots. Request interviews and coverage.',
  keywords: ['dental guide press kit', 'dental guide media', 'press release dental', 'dental cost news', 'affordable dental care media', 'dental school media kit'],
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/press',
    title: 'Press Kit - Dental Guide Media Resources',
    description: 'Access press kit resources for Dental Guide. Find company overview, media contact information, downloadable assets including logos, brand guidelines, and screenshots.',
    images: [
      {
        url: 'https://dental-guide-eta.vercel.app/og-press.png',
        width: 1200,
        height: 630,
        alt: 'Dental Guide Press Kit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press Kit - Dental Guide Media Resources',
    description: 'Access press kit resources for Dental Guide. Find company overview, media contact information, downloadable assets.',
    images: ['https://dental-guide-eta.vercel.app/og-press.png'],
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/press',
  },
};
