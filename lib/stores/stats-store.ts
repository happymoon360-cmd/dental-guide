import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Stats } from '@/lib/types';

interface StatsState extends Stats {
  bumpStat: (key: keyof Stats) => void;
  bumpBucket: (bucketKey: keyof Stats, valueKey: string) => void;
  recordScriptUsage: (values: Record<string, unknown>) => void;
  recordSchoolSearch: (params: {
    zipProvided: boolean;
    state?: string;
    onlyComplete?: boolean;
    invalidZip: boolean;
  }) => void;
  recordDataChange: (type: 'edit' | 'delete' | 'import' | 'finalize') => void;
  recordChecklistToggle: (label: string) => void;
  recordCostEstimate: (procedure: string, region: string) => void;
  reset: () => void;
}

const initialStats: Stats = {};

function bumpBucket(stats: Stats, bucketKey: keyof Stats, valueKey: string): void {
  if (!valueKey) return;
  const bucket = (stats[bucketKey] as Record<string, number>) || {};
  bucket[valueKey] = (bucket[valueKey] || 0) + 1;
  (stats as Record<string, unknown>)[bucketKey] = bucket;
}

export const useStatsStore = create<StatsState>()(
  persist(
    (set, get) => ({
      ...initialStats,

      bumpStat: (key) => {
        const stats = get();
        const currentValue = stats[key] as number | undefined;
        set({ [key]: (currentValue || 0) + 1 } as Partial<Stats>);
      },

      bumpBucket: (bucketKey, valueKey) => {
        const stats = get();
        const bucket = (stats[bucketKey] as Record<string, number>) || {};
        bucket[valueKey] = (bucket[valueKey] || 0) + 1;
        set({ [bucketKey]: bucket } as Partial<Stats>);
      },

      recordScriptUsage: (values) => {
        const stats = get();
        stats.bumpStat('scriptGenerations');
        stats.bumpBucket('scriptByProcedure', String(values.procedure));
        stats.bumpBucket('scriptByScenario', String(values.scenario));
        stats.bumpBucket('scriptByChannel', String(values.channel));
        stats.bumpBucket('scriptByLanguage', String(values.lang || 'en'));
        stats.bumpBucket('scriptByPayment', String(values.payment));
        stats.bumpBucket('scriptByUrgency', String(values.urgency));
        stats.bumpBucket('scriptByTone', String(values.tone));
        stats.bumpBucket('scriptByBudget', String(values.budget));
        stats.bumpBucket('scriptByLength', values.isShort ? 'short' : 'standard');
      },

      recordSchoolSearch: ({ zipProvided, state, onlyComplete, invalidZip }) => {
        const stats = get();
        stats.bumpStat('schoolSearches');
        if (zipProvided) {
          stats.bumpStat('schoolSearchWithZip');
        }
        if (invalidZip) {
          stats.bumpStat('schoolSearchInvalidZip');
        }
        stats.bumpBucket('schoolSearchByState', state || 'all');
        stats.bumpBucket('schoolSearchByOnlyComplete', onlyComplete ? 'complete_only' : 'all');
      },

      recordDataChange: (type) => {
        const stats = get();
        if (type === 'edit') stats.bumpStat('dataEdits');
        if (type === 'delete') stats.bumpStat('dataDeletes');
        if (type === 'import') stats.bumpStat('dataImports');
        if (type === 'finalize') stats.bumpStat('dataFinalizes');
      },

      recordChecklistToggle: (label) => {
        const stats = get();
        stats.bumpStat('checklistToggles');
        stats.bumpBucket('checklistByItem', label || 'unknown');
      },

      recordCostEstimate: (procedure, region) => {
        const stats = get();
        stats.bumpStat('costEstimates');
        stats.bumpBucket('costByProcedure', procedure || 'unknown');
        stats.bumpBucket('costByRegion', region || 'unknown');
      },

      reset: () => {
        set(initialStats);
      },
    }),
    {
      name: 'dental-stats-storage',
    }
  )
);
