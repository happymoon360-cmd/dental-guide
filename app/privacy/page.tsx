import { metadata } from './metadata';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';

export { metadata };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> 2025-02-07
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
            <p className="mb-4">
              Dental Guide is designed to work without collecting personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Stored on Your Device</h2>
            <p className="mb-4">
              Dental Guide stores limited data on your device to keep the site usable and to measure feature usage.
              This data stays on your device.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>Preferences such as language and UI settings</li>
              <li>Anonymous usage events for core tools</li>
              <li>ZIP lookup cache to speed up repeat searches</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data We Do Not Collect</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>Names, email addresses, phone numbers</li>
              <li>Payment details</li>
              <li>Precise location data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Analytics</h2>
            <p className="mb-4">
              We use Plausible Analytics, a privacy-focused analytics tool that does not use cookies and does not collect
              personal data. Plausible Analytics is GDPR compliant and designed to protect user privacy.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>No personal information is collected</li>
              <li>No cookies are used</li>
              <li>Data is aggregated and anonymized</li>
              <li>Analytics data cannot be tied to individual users</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third Party Services</h2>
            <p className="mb-4">
              The School Finder may use public geocoding services to convert ZIP codes into approximate coordinates.
              These requests are made from your browser.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Choices</h2>
            <p className="mb-4">
              You can clear browser storage at any time to remove stored preferences and local analytics.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
            <p className="mb-4">Questions: jun91249@gmail.com</p>
          </div>
        </Container>
      </main>
    </div>
  );
}
