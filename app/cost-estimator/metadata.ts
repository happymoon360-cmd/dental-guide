import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Cost Calculator - Check Prices for 14 Dental Procedures by Region',
  description: 'Our free dental cost calculator provides estimated prices for 14 procedures in your area. Get accurate price ranges for root canals, crowns, fillings, implants, dentures, and more. Compare private practice prices vs. dental school costs. Know what you should pay before your appointment. Helps uninsured and underinsured patients budget for dental care and negotiate fair prices. Includes regional pricing data for Northeast, Midwest, South, and West.',
  keywords: ['dental cost calculator', 'dental procedure prices', 'how much is a crown', 'root canal cost', 'dental implant cost', 'filling price', 'dentist prices near me', 'dental costs by region', 'dental prices northeast', 'dental prices south', 'dental prices midwest', 'dental prices west', 'dental insurance prices', 'compare dental prices'],
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/cost-estimator',
    title: 'Dental Cost Calculator - Check Prices for 14 Dental Procedures',
    description: 'Our free dental cost calculator provides estimated prices for 14 procedures in your area. Compare private vs. dental school costs.',
    images: [
      {
        url: 'https://dental-guide-eta.vercel.app/og-cost-estimator.png',
        width: 1200,
        height: 630,
        alt: 'Dental Cost Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Cost Calculator - Check Prices for 14 Dental Procedures',
    description: 'Our free dental cost calculator provides estimated prices for 14 procedures in your area. Compare private vs. dental school costs.',
    images: ['https://dental-guide-eta.vercel.app/og-cost-estimator.png'],
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/cost-estimator',
  },
};
