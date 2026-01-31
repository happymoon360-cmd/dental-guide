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
import { symptomOptions, getUrgencyGuide } from '@/lib/data/urgency';
import { Activity, AlertTriangle } from 'lucide-react';

// Simplified labels
const symptomLabels: Record<string, string> = {
  'severe_pain': 'Severe Pain',
  'facial_swelling': 'Face Swollen',
  'persistent_bleeding': 'Bleeding Won\'t Stop',
  'broken_tooth': 'Broken Tooth',
  'gum_swelling': 'Gum Swollen',
  'pain_with_fever': 'Pain + Fever',
  'lost_crown_filling': 'Lost Crown/Filling',
  'tooth_knocked_out': 'Tooth Knocked Out',
  'broken_braces_wire': 'Broken Braces Wire',
  'object_stuck_teeth': 'Object Stuck Between Teeth',
  'jaw_pain_cant_open': 'Jaw Pain/Can\'t Open Mouth',
  'gum_abscess': 'Abscess/Pimple on Gum',
  'cold_sensitivity': 'Cold Sensitivity',
  'hot_sensitivity': 'Hot Sensitivity',
  'bad_taste_smell': 'Bad Taste/Smell from Tooth',
};

export default function EmergencyTriagePage() {
  const [symptom, setSymptom] = useState<typeof symptomOptions[number]>(
    symptomOptions[0]
  );
  const [result, setResult] = useState<string>('');

  const handleCheck = () => {
    const guide = getUrgencyGuide(symptom);
    setResult(guide);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-900">
              Emergency Guide
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-apple border-gray-200 rounded-3xl">
                <CardContent className="p-6 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="symptom" className="text-base font-medium">What&apos;s wrong?</Label>
                    <Select
                      value={symptom}
                      onValueChange={(value) =>
                        setSymptom(value as typeof symptomOptions[number])
                      }
                    >
                      <SelectTrigger id="symptom" className="h-12 rounded-2xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {symptomOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {symptomLabels[option] || option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={handleCheck}
                    className="w-full h-14 text-lg rounded-2xl bg-red-600 hover:bg-red-700"
                    size="lg"
                  >
                    <Activity className="mr-2 h-5 w-5" />
                    Check What To Do
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
                <Card className="shadow-apple border-orange-300 bg-orange-50 rounded-3xl overflow-hidden">
                  <div className="bg-red-600 px-6 py-4">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <AlertTriangle className="mr-2 h-6 w-6" />
                      What To Do
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
