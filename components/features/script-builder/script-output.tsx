'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Printer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScriptStore } from '@/lib/stores/script-store';
import { trackEvent } from '@/lib/utils/analytics';

export function ScriptOutput() {
  const generatedScripts = useScriptStore((state) => state.generatedScripts);
  const [copiedScript, setCopiedScript] = useState<'A' | 'B' | null>(null);

  if (!generatedScripts) {
    return null;
  }

  const handleCopy = async (script: string, label: 'A' | 'B') => {
    try {
      await navigator.clipboard.writeText(script);
      setCopiedScript(label);
      trackEvent('copy_script', { option: label });
      setTimeout(() => setCopiedScript(null), 2000);
    } catch {
      alert(`Failed to copy ${label === 'A' ? 'Option A' : 'Option B'} script. Please copy manually.`);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="space-y-4 script-output"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-900">Your Scripts</h2>

      <div className="grid grid-cols-1 gap-4">
        <Card className="script-card shadow-apple border-gray-200 rounded-3xl overflow-hidden">
          <div className="bg-blue-600 px-6 py-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">Option A</h3>
              <div className="flex items-center gap-2 no-print">
                <Button onClick={() => handleCopy(generatedScripts.scriptA, 'A')} variant="secondary" size="sm" className="rounded-xl">
                  {copiedScript === 'A' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copiedScript === 'A' ? 'Copied!' : 'Copy'}
                </Button>
                <Button onClick={handlePrint} variant="secondary" size="sm" className="rounded-xl">
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-base leading-relaxed whitespace-pre-line text-gray-700" data-script="A">
              {generatedScripts.scriptA}
            </p>
          </CardContent>
        </Card>

        <Card className="script-card shadow-apple border-gray-200 rounded-3xl overflow-hidden">
          <div className="bg-blue-700 px-6 py-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-white">Option B</h3>
              <div className="flex items-center gap-2 no-print">
                <Button onClick={() => handleCopy(generatedScripts.scriptB, 'B')} variant="secondary" size="sm" className="rounded-xl">
                  {copiedScript === 'B' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copiedScript === 'B' ? 'Copied!' : 'Copy'}
                </Button>
                <Button onClick={handlePrint} variant="secondary" size="sm" className="rounded-xl">
                  <Printer className="h-4 w-4" />
                  Print
                </Button>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <p className="text-base leading-relaxed whitespace-pre-line text-gray-700" data-script="B">
              {generatedScripts.scriptB}
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
