'use client';

import * as React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export type DisclaimerVariant = 'medical' | 'informational';

interface DisclaimerBannerProps {
  variant: DisclaimerVariant;
  className?: string;
}

const disclaimerText = {
  medical: 'This tool is for informational purposes only and does not replace professional dental or medical advice. If you are experiencing a medical emergency, call 911 immediately.',
  informational: 'Costs and availability shown are estimates based on publicly available data. Always contact providers directly to verify current pricing and services.',
};

export function DisclaimerBanner({ variant, className }: DisclaimerBannerProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const Icon = variant === 'medical' ? AlertTriangle : Info;

  const bgColor = variant === 'medical' ? 'bg-amber-50' : 'bg-blue-50';
  const borderColor = variant === 'medical' ? 'border-amber-200' : 'border-blue-200';
  const iconColor = variant === 'medical' ? 'text-amber-600' : 'text-blue-600';

  return (
    <div
      className={cn(
        'rounded-xl border-2 p-4',
        bgColor,
        borderColor,
        className
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-start gap-3 text-left hover:opacity-80 transition-opacity"
        aria-expanded={isExpanded}
      >
        <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', iconColor)} />
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              'text-sm',
              isExpanded ? '' : 'line-clamp-2'
            )}
          >
            {disclaimerText[variant]}
          </p>
          {!isExpanded && (
            <span className="text-xs font-medium mt-1 inline-block underline">
              Read more
            </span>
          )}
        </div>
      </button>
    </div>
  );
}

interface EmergencyWarningBannerProps {
  className?: string;
}

export function EmergencyWarningBanner({ className }: EmergencyWarningBannerProps) {
  return (
    <div
      className={cn(
        'rounded-xl border-2 border-red-300 bg-red-50 p-4',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-600" />
        <p className="text-sm font-medium text-red-900">
          If symptoms are severe or worsening rapidly, go to the nearest emergency room or call 911.
        </p>
      </div>
    </div>
  );
}
