'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertCircle, Loader2 } from 'lucide-react';

const issueTypes = [
  { value: 'website_down', label: 'Website down' },
  { value: 'wrong_phone', label: 'Wrong phone number' },
  { value: 'wrong_address', label: 'Wrong address' },
  { value: 'pricing_changed', label: 'Pricing changed' },
  { value: 'data_outdated', label: 'Data is outdated' },
  { value: 'other', label: 'Other' },
] as const;

type IssueType = (typeof issueTypes)[number]['value'];

interface ReportIssueDialogProps {
  schoolName: string;
  trigger?: React.ReactNode;
}

export function ReportIssueDialog({ schoolName, trigger }: ReportIssueDialogProps) {
  const [open, setOpen] = useState(false);
  const [issueType, setIssueType] = useState<IssueType | ''>('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!issueType) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/report-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          schoolName,
          issueType,
          description,
          reporterEmail: email || undefined,
        }),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setOpen(false);
          setIssueType('');
          setDescription('');
          setEmail('');
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setIssueType('');
      setDescription('');
      setEmail('');
      setSubmitStatus('idle');
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
            <AlertCircle className="h-4 w-4 mr-1" />
            Report Issue
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Report an Issue</DialogTitle>
            <DialogDescription>
              Help us keep our data accurate. Report any issues with {schoolName}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="issue-type">Issue Type *</Label>
              <Select
                value={issueType}
                onValueChange={(value) => setIssueType(value as IssueType)}
                required
              >
                <SelectTrigger id="issue-type">
                  <SelectValue placeholder="Select an issue type" />
                </SelectTrigger>
                <SelectContent>
                  {issueTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please provide details about the issue..."
                className="flex min-h-[100px] w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-base text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-none"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Your Email (optional)</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
              <p className="text-xs text-gray-500">
                We may contact you for clarification if needed.
              </p>
            </div>
          </div>
          
          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
              Thank you! Your report has been submitted successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
              Something went wrong. Please try again later.
            </div>
          )}
          
          <DialogFooter>
            <Button
              type="submit"
              disabled={!issueType || isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
