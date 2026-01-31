import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Cost Calculator - Check Prices for Dental Procedures',
  description: 'Check estimated dental costs for any procedure in your area. Get price ranges for root canals, crowns, fillings, implants and more. Know what you should pay before you go.',
  keywords: ['dental cost calculator', 'dental procedure prices', 'how much is a crown', 'root canal cost', 'dental implant cost', 'filling price', 'dentist prices near me', 'dental costs by region'],
  openGraph: {
    type: 'website',
    url: 'https://dental.guide/cost-estimator',
    title: 'Dental Cost Calculator - Check Prices for Dental Procedures',
    description: 'Check estimated dental costs for any procedure in your area. Get price ranges for root canals, crowns, fillings, implants and more. Know what you should pay before you go.',
    images: [
      {
        url: 'https://dental.guide/og-cost-estimator.png',
        width: 1200,
        height: 630,
        alt: 'Dental Cost Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Cost Calculator - Check Prices for Dental Procedures',
    description: 'Check estimated dental costs for any procedure in your area. Get price ranges for root canals, crowns, fillings, implants and more.',
    images: ['https://dental.guide/og-cost-estimator.png'],
  },
  alternates: {
    canonical: 'https://dental.guide/cost-estimator',
  },
};
