'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  Phone,
  XCircle,
} from 'lucide-react';
import type { School } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ReportIssueDialog } from './report-issue-dialog';
import { useSchoolStore } from '@/lib/stores/school-store';
import { isSchoolComplete } from '@/lib/utils/geolocation';
import { trackEvent } from '@/lib/utils/analytics';

function formatDate(dateString?: string): string {
  if (!dateString) return 'Never';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getFreshnessLabel(school: School): { text: string; className: string; icon: typeof CheckCircle2 } {
  if (!school.lastVerified) {
    return {
      text: 'Not recently verified - please confirm details with school',
      className: 'text-gray-600',
      icon: Clock,
    };
  }

  const days = (Date.now() - new Date(school.lastVerified).getTime()) / (1000 * 60 * 60 * 24);
  if (days <= 90) {
    return {
      text: `Verified ${formatDate(school.lastVerified)}`,
      className: 'text-green-700',
      icon: CheckCircle2,
    };
  }

  if (days <= 180) {
    return {
      text: `Last checked ${formatDate(school.lastVerified)}`,
      className: 'text-amber-700',
      icon: Clock,
    };
  }

  return {
    text: 'Not recently verified - please confirm details with the school',
    className: 'text-gray-600',
    icon: XCircle,
  };
}

function getVerificationBadge(school: School): string {
  const status = school.verificationStatus;
  const lastVerified = school.lastVerified;

  const daysSinceVerification = lastVerified
    ? Math.floor((Date.now() - new Date(lastVerified).getTime()) / (1000 * 60 * 60 * 24))
    : null;

  if (status === 'verified') {
    if (daysSinceVerification !== null && daysSinceVerification <= 30) {
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    }
    return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  }

  if (status === 'unverified') {
    if (daysSinceVerification !== null) {
      if (daysSinceVerification <= 180) {
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      }
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
    return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  }

  return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
}

function getVerificationBadgeTooltip(school: School): string {
  const lastVerified = school.lastVerified;

  if (!lastVerified) {
    return 'No verification date available';
  }

  const daysSinceVerification = Math.floor((Date.now() - new Date(lastVerified).getTime()) / (1000 * 60 * 60 * 24));

  return `Last verified: ${formatDate(lastVerified)} (${daysSinceVerification} days ago)`;
}

export function SchoolList() {
  const { results, error, clearResults } = useSchoolStore();

  if (error) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Card className="shadow-apple border-destructive/50">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-destructive mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Search Failed</h3>
                <p className="text-destructive">{error}</p>
              </div>
            </div>
            <Button onClick={clearResults} variant="outline" className="w-full">Try Again</Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (results.length === 0) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="heading-lg">Found {results.length} schools</h2>
          <div className="text-sm text-muted-foreground">
            {results.filter((school) => typeof school.distanceMiles === 'number').length} distances calculated
          </div>
        </div>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-xs text-gray-600">
          School information is periodically verified. Always call ahead to confirm availability, pricing, and appointment requirements.
        </div>

        <div className="space-y-3">
          {results.map((school, index) => {
            const freshness = getFreshnessLabel(school);
            const FreshnessIcon = freshness.icon;

            return (
              <motion.div
                key={`${school.name}-${school.zip}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="shadow-apple transition-shadow hover:shadow-apple-lg" data-testid="school-card">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-1 group relative">
                           <div>
                             <h3 className="heading-md font-semibold">{school.name}</h3>
                             {school.verificationStatus && (
                               <div
                                 className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getVerificationBadge(school)}`}
                                 title={getVerificationBadgeTooltip(school)}
                               >
                                 {school.verificationStatus === 'verified' ? 'Verified' : school.verificationStatus}
                               </div>
                             )}
                           </div>
                        </div>
                      </div>

                      <div className="body-sm text-muted-foreground">
                        {[school.city, school.state, school.zip].filter(Boolean).join(', ')}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {school.phone && (
                          <a href={`tel:${school.phone}`} className="flex items-center text-sm transition-colors hover:text-primary-600">
                            <Phone className="mr-1 h-4 w-4" />
                            {school.phone}
                          </a>
                        )}
                        {school.website && (
                          <a
                            href={school.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('school_website_click', { school: school.name, state: school.state })}
                            className="flex items-center text-sm transition-colors hover:text-primary-600"
                          >
                            <Globe className="mr-1 h-4 w-4" />
                            Website
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>

                      {school.notes && <p className="body-sm text-muted-foreground">{school.notes}</p>}

                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <div className={`inline-flex items-center gap-1 ${freshness.className}`}>
                          <FreshnessIcon className="h-3.5 w-3.5" />
                          <span>{freshness.text}</span>
                        </div>

                        <div
                          className={`rounded-md px-2 py-1 font-medium ${
                            isSchoolComplete(school)
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          }`}
                        >
                          {isSchoolComplete(school) ? 'Complete data' : 'Partial data'}
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-2">
                        <ReportIssueDialog
                          schoolName={school.name}
                          trigger={
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500 hover:text-gray-700">
                              <AlertCircle className="mr-1.5 h-3.5 w-3.5" />
                              Report Issue
                            </Button>
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
