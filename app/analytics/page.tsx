'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  getEvents,
  getEventCounts,
  getRecentEvents,
  clearEvents,
  exportEventsAsJSON,
  type AnalyticsEvent,
} from '@/lib/utils/analytics';
import { BarChart3, Download, Trash2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const eventLabels: Record<string, string> = {
  script_generated: 'Scripts Generated',
  school_search: 'School Searches',
  cost_estimate: 'Cost Estimates',
  emergency_triage_viewed: 'Emergency Triage Views',
};

export default function AnalyticsPage() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({
    script_generated: 0,
    school_search: 0,
    cost_estimate: 0,
    emergency_triage_viewed: 0,
  });
  const [recentEvents, setRecentEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setEvents(getEvents());
    setCounts(getEventCounts());
    setRecentEvents(getRecentEvents(50));
  };

  const handleExport = () => {
    const json = exportEventsAsJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dental-guide-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all analytics data? This cannot be undone.')) {
      clearEvents();
      loadData();
    }
  };

  const totalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const maxCount = Math.max(...Object.values(counts), 1);

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-6">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">Usage Analytics</h1>
              <p className="text-sm text-gray-600">
                Privacy-focused local analytics - no data is sent to external servers
              </p>
            </div>

            {/* Total Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-apple border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600">Total Events</p>
                      <p className="text-4xl font-bold text-blue-900">{totalCount}</p>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Events by Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="shadow-apple border-gray-200 rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <BarChart3 className="h-6 w-6 text-gray-700" />
                    <h2 className="text-xl font-bold text-gray-900">Events by Type</h2>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(counts).map(([type, count]) => (
                      <div key={type} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">
                            {eventLabels[type] || type}
                          </span>
                          <span className="text-sm font-bold text-gray-900">{count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${(count / maxCount) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card className="shadow-apple border-gray-200 rounded-3xl">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Events</h2>
                  {recentEvents.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-8">
                      No events recorded yet. Start using the app features to see analytics data.
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {recentEvents.map((event) => (
                        <div
                          key={event.id}
                          className="p-3 bg-gray-50 rounded-xl border border-gray-200"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                {eventLabels[event.type] || event.type}
                              </p>
                              <p className="text-xs text-gray-500">{formatTimestamp(event.timestamp)}</p>
                            </div>
                            {event.metadata && Object.keys(event.metadata).length > 0 && (
                              <div className="text-xs text-gray-600 text-right">
                                {Object.entries(event.metadata).slice(0, 2).map(([key, value]) => (
                                  <div key={key}>
                                    <span className="font-medium">{key}:</span>{' '}
                                    <span className="text-gray-500">
                                      {String(value).substring(0, 20)}
                                      {String(value).length > 20 ? '...' : ''}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <Button
                onClick={handleExport}
                className="h-14 text-lg rounded-2xl bg-green-600 hover:bg-green-700"
                size="lg"
                disabled={totalCount === 0}
              >
                <Download className="mr-2 h-5 w-5" />
                Export Data
              </Button>
              <Button
                onClick={handleClear}
                className="h-14 text-lg rounded-2xl bg-red-600 hover:bg-red-700 text-white"
                size="lg"
                disabled={totalCount === 0}
              >
                <Trash2 className="mr-2 h-5 w-5" />
                Clear Data
              </Button>
            </motion.div>
          </div>
        </Container>
      </main>
    </div>
  );
}
