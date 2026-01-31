'use client';

import { motion } from 'framer-motion';
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
import { Checkbox } from '@/components/ui/checkbox';
import { useScriptStore } from '@/lib/stores/script-store';
import {
  procedureOptions,
  paymentOptions,
  urgencyOptions,
  scenarioOptions,
  budgetOptions,
  toneOptions,
  channelOptions,
  languageOptions,
} from '@/lib/utils/scripts';
import { Wand2 } from 'lucide-react';

// Simplified labels
const procedureLabels: Record<string, string> = {
  'Exam/Cleaning': 'Checkup',
  'Filling (Resin/Amalgam)': 'Filling',
  'Root Canal': 'Root Canal',
  'Crown/Restoration': 'Crown',
  'Extraction/Implant': 'Implant',
};

const paymentLabels: Record<string, string> = {
  'Cash Full Payment': 'Cash',
  'Card Same-Day Payment': 'Card',
  'Installment Payment': 'Payments',
};

const scenarioLabels: Record<string, string> = {
  'First Visit': 'First Visit',
  'Follow-up': 'Follow-up',
  'Emergency': 'Emergency',
  'Negotiation': 'Negotiate',
};

const toneLabels: Record<string, string> = {
  'Direct': 'Direct',
  'Polite': 'Polite',
};

const channelLabels: Record<string, string> = {
  'In-Person': 'Visit',
  'Phone': 'Phone',
  'SMS': 'Text',
};

export function ScriptForm() {
  const {
    procedure,
    payment,
    urgency,
    scenario,
    budget,
    tone,
    channel,
    isShort,
    lang,
    setField,
    generateScripts,
  } = useScriptStore();

  return (
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
                onValueChange={(value) => setField('procedure', value as any)}
                aria-label="Select treatment procedure"
              >
                <SelectTrigger id="procedure" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select a procedure" aria-placeholder="Select a procedure" />
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

            {/* Payment */}
            <div className="space-y-2">
              <Label htmlFor="payment" className="text-base font-medium">Payment</Label>
              <Select
                value={payment}
                onValueChange={(value) => setField('payment', value as any)}
                aria-label="Select payment method"
              >
                <SelectTrigger id="payment" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select payment method" aria-placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  {paymentOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {paymentLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency" className="text-base font-medium">Urgency</Label>
              <Select
                value={urgency}
                onValueChange={(value) => setField('urgency', value as any)}
                aria-label="Select urgency level"
              >
                <SelectTrigger id="urgency" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select urgency" aria-placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  {urgencyOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option === 'Urgent' ? '🚨 Urgent' : '📅 Regular'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="scenario" className="text-base font-medium">Visit Type</Label>
              <Select
                value={scenario}
                onValueChange={(value) => setField('scenario', value as any)}
                aria-label="Select visit type"
              >
                <SelectTrigger id="scenario" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select visit type" aria-placeholder="Select visit type" />
                </SelectTrigger>
                <SelectContent>
                  {scenarioOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {scenarioLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone" className="text-base font-medium">Tone</Label>
              <Select
                value={tone}
                onValueChange={(value) => setField('tone', value as any)}
                aria-label="Select tone"
              >
                <SelectTrigger id="tone" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select tone" aria-placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  {toneOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {toneLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="channel" className="text-base font-medium">Contact</Label>
              <Select
                value={channel}
                onValueChange={(value) => setField('channel', value as any)}
                aria-label="Select contact method"
              >
                <SelectTrigger id="channel" className="h-12 rounded-2xl">
                  <SelectValue placeholder="Select contact method" aria-placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  {channelOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {channelLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Urgency */}
            <div className="space-y-2">
              <Label htmlFor="urgency" className="text-base font-medium">Urgency</Label>
              <Select
                value={urgency}
                onValueChange={(value) => setField('urgency', value as any)}
              >
                <SelectTrigger id="urgency" className="h-12 rounded-2xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {urgencyOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option === 'Urgent' ? '🚨 Urgent' : '📅 Regular'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Scenario */}
            <div className="space-y-2">
              <Label htmlFor="scenario" className="text-base font-medium">Visit Type</Label>
              <Select
                value={scenario}
                onValueChange={(value) => setField('scenario', value as any)}
              >
                <SelectTrigger id="scenario" className="h-12 rounded-2xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {scenarioOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {scenarioLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tone */}
            <div className="space-y-2">
              <Label htmlFor="tone" className="text-base font-medium">Tone</Label>
              <Select
                value={tone}
                onValueChange={(value) => setField('tone', value as any)}
              >
                <SelectTrigger id="tone" className="h-12 rounded-2xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {toneOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {toneLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Channel */}
            <div className="space-y-2">
              <Label htmlFor="channel" className="text-base font-medium">Contact</Label>
              <Select
                value={channel}
                onValueChange={(value) => setField('channel', value as any)}
              >
                <SelectTrigger id="channel" className="h-12 rounded-2xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {channelOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {channelLabels[option] || option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <Label htmlFor="language" className="text-base font-medium">Language</Label>
            <Select
              value={lang}
              onValueChange={(value) => setField('lang', value as any)}
              aria-label="Select language"
            >
              <SelectTrigger id="language" className="h-12 rounded-2xl">
                <SelectValue placeholder="Select language" aria-placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Short Version Checkbox */}
          <div className="flex items-center space-x-3 py-2">
            <Checkbox
              id="shortScript"
              checked={isShort}
              onCheckedChange={(checked) => setField('isShort', !!checked)}
              className="h-5 w-5"
              aria-label="Generate short version for text messages"
            />
            <Label htmlFor="shortScript" className="text-base cursor-pointer">
              Short version (for text messages)
            </Label>
          </div>

          {/* Generate Button */}
          <Button
            onClick={generateScripts}
            className="w-full h-14 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <Wand2 className="mr-2 h-5 w-5" />
            Generate Scripts
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
