'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DisclaimerBanner } from '@/components/ui/disclaimer-banner';
import { FeedbackPrompt } from '@/components/ui/feedback-prompt';
import {
  costLastReviewed,
  costMethodology,
  costSources,
  estimateCost,
  getCostContext,
  procedureOptions,
  regionOptions,
} from '@/lib/data/costs';
import { useStatsStore } from '@/lib/stores/stats-store';
import { trackEvent } from '@/lib/utils/analytics';

const procedureLabels: Record<string, string> = {
  exam_cleaning: 'Checkup',
  filling: 'Filling',
  root_canal: 'Root Canal',
  crown: 'Crown',
  extraction_implant: 'Implant',
  teeth_whitening: 'Teeth Whitening',
  dentures_partial: 'Dentures/Partial',
  bridge: 'Bridge',
  orthodontics_braces: 'Orthodontics (Braces)',
  periodontal_treatment: 'Periodontal Treatment',
  extraction_only: 'Extraction Only',
  wisdom_tooth_removal: 'Wisdom Tooth Removal',
  root_canal_therapy: 'Root Canal Therapy',
  mri_ct_scan: 'MRI/CT Scan',
};

const regionLabels: Record<string, string> = {
  national_average: 'National Average',
  'Northeast (NY, Boston, DC)': 'Northeast',
  'West Coast (LA, SF, Seattle)': 'West Coast',
  'Midwest (Chicago, Detroit)': 'Midwest',
  'South (Texas, Florida)': 'South',
  'Mountain West (Denver, Phoenix)': 'Mountain West',
};

export default function CostEstimatorPage() {
  const [procedure, setProcedure] = useState<typeof procedureOptions[number]>(procedureOptions[0]);
  const [region, setRegion] = useState<typeof regionOptions[number]>(regionOptions[0]);
  const [result, setResult] = useState('');
  const recordCostEstimate = useStatsStore((state) => state.recordCostEstimate);

  const handleEstimate = () => {
    const cost = estimateCost(procedure, region);
    setResult(cost);
    recordCostEstimate(procedure, region);
    trackEvent('cost_estimate', { procedure, region });
  };

  const costContext = result ? getCostContext(procedure, region) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            <h1 className="text-center text-3xl font-bold text-gray-900">Cost Calculator</h1>

            <DisclaimerBanner variant="informational" />

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card className="rounded-3xl border-gray-200 shadow-apple">
                <CardContent className="space-y-5 p-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="procedure" className="text-base font-medium">Treatment</Label>
                      <Select value={procedure} onValueChange={(value) => setProcedure(value as typeof procedureOptions[number])}>
                        <SelectTrigger id="procedure" className="h-12 rounded-2xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {procedureOptions.map((option) => (
                            <SelectItem key={option} value={option}>{procedureLabels[option] || option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-base font-medium">Location</Label>
                      <Select value={region} onValueChange={(value) => setRegion(value as typeof regionOptions[number])}>
                        <SelectTrigger id="region" className="h-12 rounded-2xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {regionOptions.map((option) => (
                            <SelectItem key={option} value={option}>{regionLabels[option] || option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleEstimate} className="h-14 w-full rounded-2xl bg-blue-600 text-lg hover:bg-blue-700" size="lg">
                    <Calculator className="mr-2 h-5 w-5" />
                    Check Cost
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {result && (
              <>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                  <Card className="rounded-3xl border-blue-200 bg-blue-50 shadow-apple overflow-hidden">
                    <div className="bg-blue-600 px-6 py-4">
                      <h3 className="flex items-center text-xl font-bold text-white">
                        <DollarSign className="mr-2 h-6 w-6" />
                        Estimated Cost
                      </h3>
                    </div>
                    <CardContent className="p-6">
                      <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">{result}</p>
                    </CardContent>
                  </Card>
                </motion.div>

                {costContext && (
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                      <p className="font-semibold">What affects the price?</p>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                        {costContext.priceFactors.map((factor) => (
                          <li key={factor}>{factor}</li>
                        ))}
                      </ul>
                      <p className="mt-3 text-gray-600"><strong>Regional variation:</strong> {costContext.regionalMultiplier}</p>
                      <p className="mt-2 text-gray-600">{costContext.generalNote}</p>
                    </div>

                    <details className="rounded-2xl border-2 border-gray-200 bg-white p-4">
                      <summary className="cursor-pointer select-none text-base font-medium text-gray-600 hover:text-gray-900">
                        Data Sources & Methodology
                      </summary>
                      <div className="mt-4 space-y-4 text-sm">
                        <div>
                          <strong className="mb-2 block text-gray-900">Sources:</strong>
                          <ul className="list-inside list-disc space-y-2 text-gray-600">
                            {costSources.map((source) => (
                              <li key={source.url}>
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                  {source.name} ({source.year})
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <strong className="mb-2 block text-gray-900">Last Reviewed:</strong>
                          <span className="text-gray-600">{costLastReviewed}</span>
                        </div>
                        <div>
                          <strong className="mb-2 block text-gray-900">Methodology:</strong>
                          <p className="leading-relaxed text-gray-600">{costMethodology}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                )}
              </>
            )}

            <FeedbackPrompt toolName="cost_estimator" shouldShow={Boolean(result)} />
          </div>
        </Container>
      </main>
    </div>
  );
}
