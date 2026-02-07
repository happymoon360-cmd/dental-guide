import { metadata } from './metadata';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';

export { metadata };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">
              <strong>Last Updated:</strong> 2026-02-01
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance</h2>
            <p className="mb-4">By using this website, you agree to these terms.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informational Only</h2>
            <p className="mb-4">
              Dental Guide is for informational purposes only. It does not provide dental services or medical advice.
              Always consult a qualified dental professional for diagnosis and treatment.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Guarantee</h2>
            <p className="mb-4">
              We do not guarantee the accuracy, completeness, or availability of information on this site.
              Pricing, services, and eligibility can change. Contact providers directly to verify.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
              <li>Verify pricing, hours, and services with the provider before you go.</li>
              <li>Seek professional care for urgent symptoms.</li>
              <li>Do not rely on this site for emergency decisions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. External Links</h2>
            <p className="mb-4">This site may link to third party websites. We are not responsible for their content or policies.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Dental Guide and its contributors are not liable for damages arising from use of this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes</h2>
            <p className="mb-4">We may update these terms at any time. Continued use means you accept updated terms.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <p className="mb-4">Questions: jun91249@gmail.com</p>
          </div>
        </Container>
      </main>
    </div>
  );
}
