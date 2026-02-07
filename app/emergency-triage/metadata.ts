import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Emergency Triage - Assess Urgency & Find Care for Dental Emergencies',
  description: 'Free dental emergency assessment tool. Answer questions about your symptoms to determine if you need immediate care (emergency room or urgent dental clinic), can wait for a regular appointment, or can treat at home. Covers tooth pain, swelling, bleeding, broken teeth, lost fillings, and more. Helps uninsured patients understand severity and find appropriate care options. Provides guidance on when to call 911 and what to do while waiting.',
  keywords: [
    'dental emergency',
    'tooth pain emergency',
    'urgent dental care',
    'emergency dentist',
    'dental triage',
    'toothache relief',
    'dental emergency no insurance',
    'emergency room dental',
    'dental pain assessment',
    'broken tooth emergency',
    'swollen gums emergency',
    'dental abscess symptoms',
    'tooth knocked out',
    'severe tooth pain what to do',
  ],
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/emergency-triage',
    title: 'Dental Emergency Triage - Assess Urgency & Find Care for Dental Emergencies',
    description: 'Free dental emergency assessment tool. Determine if you need immediate care, can wait, or treat at home.',
    images: [
      {
        url: 'https://dental-guide-eta.vercel.app/og-emergency-triage.png',
        width: 1200,
        height: 630,
        alt: 'Dental Emergency Triage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Emergency Triage - Assess Urgency & Find Care',
    description: 'Free dental emergency assessment tool. Determine if you need immediate care, can wait, or treat at home.',
    images: ['https://dental-guide-eta.vercel.app/og-emergency-triage.png'],
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/emergency-triage',
  },
};
