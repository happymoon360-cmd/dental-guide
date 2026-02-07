'use client';

import { useEffect, useState } from 'react';
import { ThumbsDown, ThumbsUp, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/utils/analytics';

interface FeedbackPromptProps {
  toolName: string;
  shouldShow?: boolean;
  onSubmit?: (rating: number, comment?: string) => void;
}

const COOLDOWN_DAYS = 7;

export function FeedbackPrompt({ toolName, shouldShow = true, onSubmit }: FeedbackPromptProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const key = `feedback_dismissed_${toolName}`;
      const stored = localStorage.getItem(key);
      if (!stored) return;
      const days = (Date.now() - Number(stored)) / (1000 * 60 * 60 * 24);
      if (days < COOLDOWN_DAYS) setDismissed(true);
    } catch {
      setDismissed(false);
    }
  }, [toolName]);

  if (!shouldShow || dismissed || submitted) {
    return null;
  }

  const dismiss = () => {
    try {
      localStorage.setItem(`feedback_dismissed_${toolName}`, String(Date.now()));
    } catch {}
    setDismissed(true);
  };

  const submit = () => {
    if (rating === null) return;
    trackEvent('feedback_submitted', {
      tool: toolName,
      rating,
      hasComment: comment.trim().length > 0,
    });
    onSubmit?.(rating, comment.trim() || undefined);
    try {
      localStorage.setItem(`feedback_dismissed_${toolName}`, String(Date.now()));
    } catch {}
    setSubmitted(true);
  };

  return (
    <Card className="feedback-prompt rounded-2xl border-blue-200 bg-blue-50">
      <CardContent className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-sm font-semibold text-gray-900">Was this helpful?</h3>
          <Button type="button" variant="ghost" size="sm" onClick={dismiss} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-3 grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant={rating === 1 ? 'primary' : 'outline'}
            onClick={() => setRating(1)}
            className={rating === 1 ? 'bg-green-600 hover:bg-green-700' : ''}
          >
            <ThumbsUp className="h-4 w-4" />
            Helpful
          </Button>
          <Button
            type="button"
            variant={rating === 0 ? 'primary' : 'outline'}
            onClick={() => setRating(0)}
            className={rating === 0 ? 'bg-red-600 hover:bg-red-700' : ''}
          >
            <ThumbsDown className="h-4 w-4" />
            Not Helpful
          </Button>
        </div>

        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="How can we improve this? (optional)"
          className="mb-3 min-h-[64px] w-full rounded-xl border border-gray-300 p-3 text-sm focus:border-blue-400 focus:outline-none"
          maxLength={200}
        />

        <Button type="button" onClick={submit} disabled={rating === null} className="w-full">
          Submit Feedback
        </Button>
      </CardContent>
    </Card>
  );
}
