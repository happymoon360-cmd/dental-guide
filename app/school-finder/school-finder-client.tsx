'use client';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { SchoolSearchForm } from '@/components/features/school-finder/school-search-form';
import { SchoolList } from '@/components/features/school-finder/school-list';

export default function SchoolFinderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Dental Schools
            </h1>

            <SchoolSearchForm />
            <SchoolList />
          </div>
        </Container>
      </main>
    </div>
  );
}
