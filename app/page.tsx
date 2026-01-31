import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import {
  FileText,
  GraduationCap,
  Calculator,
  Activity,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affordable Dental Care Tools - Free Resources for the Uninsured',
  description: 'Free tools to find affordable dental care, negotiate dental bills, locate free clinics and dental schools near you. Save money on dental work without insurance.',
  keywords: ['affordable dental care', 'free dental clinic', 'dental without insurance', 'negotiate dental bills', 'dental schools near me', 'cheap dentist', 'dental cost help', 'low-income dental'],
  openGraph: {
    type: 'website',
    url: 'https://dental.guide',
    title: 'Affordable Dental Care Tools - Free Resources for the Uninsured',
    description: 'Free tools to find affordable dental care, negotiate dental bills, locate free clinics and dental schools near you. Save money on dental work without insurance.',
    images: [
      {
        url: 'https://dental.guide/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Dental Guide - Affordable Dental Care Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Dental Care Tools - Free Resources for the Uninsured',
    description: 'Free tools to find affordable dental care, negotiate dental bills, locate free clinics and dental schools near you. Save money on dental work without insurance.',
    images: ['https://dental.guide/og-home.png'],
  },
  alternates: {
    canonical: 'https://dental.guide',
  },
};

const tools = [
  {
    icon: FileText,
    title: 'Script Builder',
    description: 'Generate negotiation scripts to talk to dental offices about pricing',
    href: '/script-builder',
    color: 'bg-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'Dental Schools',
    description: 'Find affordable care at 71 US dental schools near you',
    href: '/school-finder',
    color: 'bg-purple-600',
  },
  {
    icon: Calculator,
    title: 'Cost Calculator',
    description: 'Check estimated costs by procedure and location',
    href: '/cost-estimator',
    color: 'bg-green-600',
  },
  {
    icon: Activity,
    title: 'Emergency Guide',
    description: 'Know what to do when you have a dental emergency',
    href: '/emergency-triage',
    color: 'bg-red-600',
  },
];

const benefits = [
  'No insurance? No problem.',
  'Save up to 70% at dental schools',
  'Negotiate with confidence',
  'Available in English & Spanish',
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Dental Care Without Breaking the Bank
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Free tools to help you find affordable dental care, negotiate prices, and understand your options.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-2 text-base text-gray-700"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link href="/script-builder">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Navigate the dental care system with confidence. All tools are free and available in English and Spanish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link key={tool.href} href={tool.href}>
                    <div className="group h-full bg-white rounded-3xl border-2 border-gray-200 p-6 shadow-apple hover:shadow-xl hover:border-blue-300 transition-all hover:-translate-y-1">
                      <div className={`${tool.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {tool.description}
                      </p>
                      <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                        Try it now
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Choose Your Tool
                  </h3>
                  <p className="text-gray-600 text-base">
                    Start with a script to negotiate, find schools, check costs, or get emergency guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Customize Your Options
                  </h3>
                  <p className="text-gray-600 text-base">
                    Select your treatment, location, and situation to get personalized guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Take Action
                  </h3>
                  <p className="text-gray-600 text-base">
                    Use your script to call dental offices, visit a school, or understand your next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-gray-600">
              Start using our free tools today. No sign-up required.
            </p>
            <Link href="/script-builder">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg"
              >
                Start Now - It&apos;s Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
