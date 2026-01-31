'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import {
  procedureOptions,
  regionOptions,
  estimateCost,
} from '@/lib/data/costs';
import { useStatsStore } from '@/lib/stores/stats-store';
import { Calculator, DollarSign } from 'lucide-react';
import { trackEvent } from '@/lib/utils/analytics';

// Simplified labels
const procedureLabels: Record<string, string> = {
  'exam_cleaning': 'Checkup',
  'filling': 'Filling',
  'root_canal': 'Root Canal',
  'crown': 'Crown',
  'extraction_implant': 'Implant',
  'teeth_whitening': 'Teeth Whitening',
  'dentures_partial': 'Dentures/Partial',
  'bridge': 'Bridge',
  'orthodontics_braces': 'Orthodontics (Braces)',
  'periodontal_treatment': 'Periodontal Treatment',
  'extraction_only': 'Extraction Only',
  'wisdom_tooth_removal': 'Wisdom Tooth Removal',
  'root_canal_therapy': 'Root Canal Therapy',
  'mri_ct_scan': 'MRI/CT Scan',
};

const regionLabels: Record<string, string> = {
  'national_average': 'National Average',
  'Northeast (NY, Boston, DC)': 'Northeast',
  'West Coast (LA, SF, Seattle)': 'West Coast',
  'Midwest (Chicago, Detroit)': 'Midwest',
  'South (Texas, Florida)': 'South',
  'Mountain West (Denver, Phoenix)': 'Mountain West',
};

export default function CostEstimatorPage() {
  const [procedure, setProcedure] = useState<typeof procedureOptions[number]>(
    procedureOptions[0]
  );
  const [region, setRegion] = useState<typeof regionOptions[number]>(
    regionOptions[0]
  );
  const [result, setResult] = useState<string>('');
  const recordCostEstimate = useStatsStore((state) => state.recordCostEstimate);

  const handleEstimate = () => {
    const cost = estimateCost(procedure, region);
    setResult(cost);
    recordCostEstimate(procedure, region);
    trackEvent('cost_estimate', {
      procedure,
      region,
      estimatedCost: cost,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Cost Calculator
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-apple border-gray-200 rounded-3xl">
                <CardContent className="p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Procedure */}
                    <div className="space-y-2">
                      <Label htmlFor="procedure" className="text-base font-medium">Treatment</Label>
                      <Select
                        value={procedure}
                        onValueChange={(value) =>
                          setProcedure(value as typeof procedureOptions[number])
                        }
                      >
                        <SelectTrigger id="procedure" className="h-12 rounded-2xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {procedureOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {procedureLabels[option] || option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Region */}
                    <div className="space-y-2">
                      <Label htmlFor="region" className="text-base font-medium">Location</Label>
                      <Select
                        value={region}
                        onValueChange={(value) =>
                          setRegion(value as typeof regionOptions[number])
                        }
                      >
                        <SelectTrigger id="region" className="h-12 rounded-2xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {regionOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {regionLabels[option] || option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    onClick={handleEstimate}
                    className="w-full h-14 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Check Cost
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="shadow-apple border-blue-200 bg-blue-50 rounded-3xl overflow-hidden">
                  <div className="bg-blue-600 px-6 py-4">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <DollarSign className="mr-2 h-6 w-6" />
                      Estimated Cost
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-base leading-relaxed whitespace-pre-line text-gray-700">
                      {result}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}
