import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dental Schools Near Me - Affordable Care at 75 US Dental Schools',
  description: 'Find affordable dental care at accredited dental schools near you. Our free tool lists 75 dental schools across the US where supervised students perform procedures at 50-70% lower prices. Services include cleanings, fillings, root canals, crowns, dentures, implants, and orthodontics. Perfect for uninsured or underinsured patients seeking quality care on a budget. Compare prices, check services offered, and contact information for schools in your area.',
  keywords: ['dental schools near me', 'cheap dental school', 'affordable dental care', 'low-cost dental clinic', 'dental school prices', 'dental hygiene schools', 'free dental clinics near me', 'dental schools accepting patients', 'dental school root canal cost', 'dental school crown cost', 'student dentist prices'],
  openGraph: {
    type: 'website',
    url: 'https://dental-guide-eta.vercel.app/school-finder',
    title: 'Dental Schools Near Me - Affordable Care at 75 US Dental Schools',
    description: 'Find affordable dental care at accredited dental schools near you. Save 50-70% on dental work from supervised students.',
    images: [
      {
        url: 'https://dental-guide-eta.vercel.app/og-school-finder.png',
        width: 1200,
        height: 630,
        alt: 'Dental School Finder - Affordable Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Schools Near Me - Affordable Care at 75 US Dental Schools',
    description: 'Find affordable dental care at accredited dental schools near you. Save 50-70% on dental work from supervised students.',
    images: ['https://dental-guide-eta.vercel.app/og-school-finder.png'],
  },
  alternates: {
    canonical: 'https://dental-guide-eta.vercel.app/school-finder',
  },
};
