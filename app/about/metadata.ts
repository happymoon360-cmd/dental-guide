import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dental Guide - Helping Americans Access Affordable Dental Care',
  description: 'Dental Guide provides free tools to help uninsured and underinsured Americans access quality, affordable dental care. Save hundreds on dental bills with our school finder, cost estimator, and negotiation scripts.',
  keywords: ['about dental guide', 'affordable dental care', 'dental cost savings', 'uninsured dental care', 'dental school finder', 'dental cost estimator', 'negotiate dental bills'],
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/about',
    title: 'About Dental Guide - Helping Americans Access Affordable Dental Care',
    description: 'Dental Guide provides free tools to help uninsured and underinsured Americans access quality, affordable dental care. Save hundreds on dental bills with our school finder, cost estimator, and negotiation scripts.',
    images: [
      {
        url: 'https://dental-guide-eta.vercel.app/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Dental Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dental Guide - Helping Americans Access Affordable Dental Care',
    description: 'Dental Guide provides free tools to help uninsured and underinsured Americans access quality, affordable dental care. Save hundreds on dental bills.',
    images: ['https://dental-guide-eta.vercel.app/og-about.png'],
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/about',
  },
};
