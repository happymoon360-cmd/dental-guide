'use client';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { ScriptForm } from '@/components/features/script-builder/script-form';
import { ScriptOutput } from '@/components/features/script-builder/script-output';

export default function ScriptBuilderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Script Builder
            </h1>

            <ScriptForm />
            <ScriptOutput />
          </div>
        </Container>
      </main>
    </div>
  );
}
