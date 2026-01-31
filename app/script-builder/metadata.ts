import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Negotiation Script Generator - Talk Down Dental Costs',
  description: 'Generate customized scripts to negotiate dental bills and prices. Learn exactly what to say to dental offices to get discounts on crowns, root canals, and more.',
  keywords: ['negotiate dental bills', 'dental negotiation script', 'talk down dentist prices', 'dental cost negotiation', 'dental discount script', 'how to negotiate dental work'],
  openGraph: {
    type: 'website',
    url: 'https://dental.guide/script-builder',
    title: 'Dental Negotiation Script Generator - Talk Down Dental Costs',
    description: 'Generate customized scripts to negotiate dental bills and prices. Learn exactly what to say to dental offices to get discounts on crowns, root canals, and more.',
    images: [
      {
        url: 'https://dental.guide/og-script-builder.png',
        width: 1200,
        height: 630,
        alt: 'Dental Negotiation Script Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Negotiation Script Generator - Talk Down Dental Costs',
    description: 'Generate customized scripts to negotiate dental bills and prices. Learn exactly what to say to dental offices to get discounts.',
    images: ['https://dental.guide/og-script-builder.png'],
  },
  alternates: {
    canonical: 'https://dental.guide/script-builder',
  },
};
