'use client';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { ScriptForm } from '@/components/features/script-builder/script-form';
import { ScriptOutput } from '@/components/features/script-builder/script-output';
import { DisclaimerBanner } from '@/components/ui/disclaimer-banner';
import { FeedbackPrompt } from '@/components/ui/feedback-prompt';
import { useScriptStore } from '@/lib/stores/script-store';

export default function ScriptBuilderPage() {
  const generatedScripts = useScriptStore((state) => state.generatedScripts);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Script Builder
            </h1>

            <DisclaimerBanner variant="informational" />

            <ScriptForm />
            <ScriptOutput />
            <FeedbackPrompt
              toolName="script_builder"
              shouldShow={!!generatedScripts}
            />
          </div>
        </Container>
      </main>
    </div>
  );
}
