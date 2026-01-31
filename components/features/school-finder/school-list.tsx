'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSchoolStore } from '@/lib/stores/school-store';
import { isSchoolComplete } from '@/lib/utils/geolocation';
import { MapPin, Phone, Globe, ExternalLink, AlertCircle } from 'lucide-react';

export function SchoolList() {
  const { results, error } = useSchoolStore();
  const { clearResults } = useSchoolStore();

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="shadow-apple border-destructive/50">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Search Failed
                </h3>
                <p className="text-destructive body-md">{error}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => clearResults()}
                variant="outline"
                className="flex-1"
              >
                Try Again
              </Button>
              <Button
                onClick={() => window.location.href = '/script-builder'}
                variant="secondary"
                className="flex-1"
              >
                Try Other Tools
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="heading-lg">
            Found {results.length} schools
          </h2>
          <div className="text-sm text-muted-foreground">
            {results.filter((s) => typeof s.distanceMiles === 'number').length} distances calculated
          </div>
        </div>

        <div className="space-y-3">
          {results.map((school, index) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="shadow-apple hover:shadow-apple-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {/* Name and Distance */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="heading-md font-semibold">{school.name}</h3>
                      {typeof school.distanceMiles === 'number' && (
                        <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
                          <MapPin className="h-4 w-4 mr-1" />
                          {school.distanceMiles.toFixed(1)} mi
                        </div>
                      )}
                    </div>

                    {/* Location */}
                    <div className="body-sm text-muted-foreground">
                      {[school.city, school.state, school.zip]
                        .filter(Boolean)
                        .join(', ')}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-3">
                      {school.phone && (
                        <a
                          href={`tel:${school.phone}`}
                          className="flex items-center text-sm hover:text-primary-600 transition-colors"
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          {school.phone}
                        </a>
                      )}
                      {school.website && (
                        <a
                          href={school.website}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center text-sm hover:text-primary-600 transition-colors"
                        >
                          <Globe className="h-4 w-4 mr-1" />
                          Website
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>

                    {/* Notes */}
                    {school.notes && (
                      <p className="body-sm text-muted-foreground">
                        {school.notes}
                      </p>
                    )}

                    {/* Completeness Badge */}
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                        isSchoolComplete(school)
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}
                    >
                      {isSchoolComplete(school) ? 'Data Complete' : 'Some Information Missing'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
