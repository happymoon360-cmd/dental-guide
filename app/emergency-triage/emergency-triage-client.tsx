'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DisclaimerBanner, EmergencyWarningBanner } from '@/components/ui/disclaimer-banner';
import { FeedbackPrompt } from '@/components/ui/feedback-prompt';
import { getUrgencyGuide, symptomOptions, urgencyLastReviewed, urgencySources } from '@/lib/data/urgency';
import { trackEvent } from '@/lib/utils/analytics';

const symptomLabels: Record<string, string> = {
  severe_pain: 'Severe Pain',
  facial_swelling: 'Face Swollen',
  persistent_bleeding: 'Bleeding Won\'t Stop',
  broken_tooth: 'Broken Tooth',
  gum_swelling: 'Gum Swollen',
  pain_with_fever: 'Pain + Fever',
  lost_crown_filling: 'Lost Crown/Filling',
  tooth_knocked_out: 'Tooth Knocked Out',
  broken_braces_wire: 'Broken Braces Wire',
  object_stuck_teeth: 'Object Stuck Between Teeth',
  jaw_pain_cant_open: 'Jaw Pain/Can\'t Open Mouth',
  gum_abscess: 'Abscess/Pimple on Gum',
  cold_sensitivity: 'Cold Sensitivity',
  hot_sensitivity: 'Hot Sensitivity',
  bad_taste_smell: 'Bad Taste/Smell from Tooth',
};

const emergencySymptoms = new Set(['severe_pain', 'facial_swelling', 'persistent_bleeding', 'pain_with_fever', 'tooth_knocked_out']);

export default function EmergencyTriagePage() {
  const [symptom, setSymptom] = useState<typeof symptomOptions[number]>(symptomOptions[0]);
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const guide = getUrgencyGuide(symptom);
    setResult(guide);
    trackEvent('emergency_triage_viewed', { symptom });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h1 className="text-center text-3xl font-bold text-gray-900">Emergency Guide</h1>
            <DisclaimerBanner variant="medical" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card className="rounded-3xl border-gray-200 shadow-apple">
                <CardContent className="space-y-5 p-6">
                  <div className="space-y-2">
                    <Label htmlFor="symptom" className="text-base font-medium">What&apos;s wrong?</Label>
                    <Select value={symptom} onValueChange={(value) => setSymptom(value as typeof symptomOptions[number])}>
                      <SelectTrigger id="symptom" className="h-12 rounded-2xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {symptomOptions.map((option) => (
                          <SelectItem key={option} value={option}>{symptomLabels[option] || option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleCheck} className="h-14 w-full rounded-2xl bg-red-600 text-lg hover:bg-red-700" size="lg">
                    <Activity className="mr-2 h-5 w-5" />
                    Check What To Do
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {result && emergencySymptoms.has(symptom) && <EmergencyWarningBanner />}

            {result && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <Card className="rounded-3xl border-orange-300 bg-orange-50 shadow-apple overflow-hidden">
                  <div className="bg-red-600 px-6 py-4">
                    <h3 className="flex items-center text-xl font-bold text-white">
                      <AlertTriangle className="mr-2 h-6 w-6" />
                      What To Do
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">{result}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <details className="rounded-2xl border-2 border-gray-200 bg-white p-4">
              <summary className="cursor-pointer select-none text-base font-medium text-gray-600 hover:text-gray-900">
                Data Sources & Methodology
              </summary>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <strong className="mb-2 block text-gray-900">Sources:</strong>
                  <ul className="list-inside list-disc space-y-2 text-gray-600">
                    {urgencySources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                          {source.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="mb-2 block text-gray-900">Last Reviewed:</strong>
                  <span className="text-gray-600">{urgencyLastReviewed}</span>
                </div>
                <div>
                  <strong className="mb-2 block text-gray-900">Methodology:</strong>
                  <p className="leading-relaxed text-gray-600">
                    Guidance is based on public dental emergency references and is for informational use only.
                  </p>
                </div>
              </div>
            </details>

            <FeedbackPrompt toolName="emergency_triage" shouldShow={Boolean(result) && !emergencySymptoms.has(symptom)} />
          </div>
        </Container>
      </main>
    </div>
  );
}
