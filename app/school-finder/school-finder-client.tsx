'use client';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { SchoolSearchForm } from '@/components/features/school-finder/school-search-form';
import { SchoolList } from '@/components/features/school-finder/school-list';
import { DisclaimerBanner } from '@/components/ui/disclaimer-banner';
import { FeedbackPrompt } from '@/components/ui/feedback-prompt';
import { useSchoolStore } from '@/lib/stores/school-store';

export default function SchoolFinderPage() {
  const { results } = useSchoolStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Dental Schools
            </h1>

            <DisclaimerBanner variant="informational" />

            <SchoolSearchForm />
            <SchoolList />
            <FeedbackPrompt
              toolName="school_finder"
              shouldShow={results.length > 0}
            />
          </div>
        </Container>
      </main>
    </div>
  );
}
