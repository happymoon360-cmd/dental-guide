import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SchoolWithDistance, School, SchoolSearchParams } from '@/lib/types';
import { dentalSchools } from '@/lib/data/schools';
import { communityClinics } from '@/lib/data/community-clinics';
import { fetchUsZipInfo, fetchZipLocation, haversineMiles, isSchoolComplete, getUniqueStates } from '@/lib/utils/geolocation';

interface SchoolState {
  schools: School[];
  results: SchoolWithDistance[];
  isLoading: boolean;
  error: string | null;
  zip: string;
  state: string;
  onlyComplete: boolean;
  includeCommunityClinics: boolean;
  setZip: (zip: string) => void;
  setState: (state: string) => void;
  setOnlyComplete: (onlyComplete: boolean) => void;
  setIncludeCommunityClinics: (includeCommunityClinics: boolean) => void;
  searchSchools: () => Promise<void>;
  clearResults: () => void;
  getStates: () => string[];
}

const SCHOOL_OVERRIDE_KEY = 'guerillaSchoolOverrides';

function getSchoolOverrides(): Record<string, Partial<School>> {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const stored = localStorage.getItem(SCHOOL_OVERRIDE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load school overrides:', error);
  }
  return {};
}

function getEffectiveSchools(includeCommunity = false): School[] {
  const overrides = getSchoolOverrides();
  const schools = dentalSchools.map((school) => ({
    ...school,
    ...(overrides[school.name] || {}),
  })).filter((school) => !school.hidden);

  if (includeCommunity) {
    return [...schools, ...communityClinics];
  }
  return schools;
}

export const useSchoolStore = create<SchoolState>()(
  persist(
    (set, get) => ({
      schools: getEffectiveSchools(false),
      results: [],
      isLoading: false,
      error: null,
      zip: '',
      state: 'ALL',
      onlyComplete: false,
      includeCommunityClinics: false,

      setZip: (zip: string) => {
        set({ zip });
      },

      setState: (state: string) => {
        set({ state });
      },

      setOnlyComplete: (onlyComplete: boolean) => {
        set({ onlyComplete });
      },

      setIncludeCommunityClinics: (includeCommunityClinics: boolean) => {
        set({ includeCommunityClinics, schools: getEffectiveSchools(includeCommunityClinics) });
      },

      searchSchools: async () => {
        const { zip, state, onlyComplete, schools } = get();
        set({ isLoading: true, error: null });

        try {
          let filtered = [...schools];

          // Filter by state
          if (state && state !== 'ALL') {
            filtered = filtered.filter((school) => school.state === state);
          }

          // Filter by completeness
          if (onlyComplete) {
            filtered = filtered.filter((school) => isSchoolComplete(school));
          }

          // Get user location from ZIP
          const userZipInfo = zip ? await fetchUsZipInfo(zip) : null;
          const userLocation = userZipInfo?.location || null;

          if (zip && !userLocation) {
            set({
              isLoading: false,
              error: 'Please enter a valid ZIP code.',
              results: [],
            });
            return;
          }

          // If user entered a ZIP and did not pick a state, default to the ZIP state (US only).
          if (userLocation && (!state || state === 'ALL') && userZipInfo?.stateAbbr) {
            filtered = filtered.filter((school) => school.state === userZipInfo.stateAbbr);
          }

          // Priority-based lazy loading: load up to 10 schools first (rate limiter is 10 per minute)
          if (userLocation && filtered.length > 10) {
            // Sort by distance first for priority
            const withPriority = await Promise.all(
              filtered.slice(0, 10).map(async (school) => {
                if (!school.zip) {
                  return { ...school, distanceMiles: undefined, priority: Infinity };
                }
                const schoolLocation = await fetchZipLocation(school.zip);
                const distanceMiles = schoolLocation ? haversineMiles(userLocation, schoolLocation) : undefined;
                return { ...school, distanceMiles, priority: distanceMiles || Infinity };
              })
            );

            const getVerificationPriority = (school: SchoolWithDistance): number => {
              if (!school.lastVerified) return 3;
              const daysSinceVerification = (Date.now() - new Date(school.lastVerified).getTime()) / (1000 * 60 * 60 * 24);
              if (daysSinceVerification > 180) return 2;
              if (school.verificationStatus === 'verified') return 0;
              if (school.verificationStatus === 'unverified') return 1;
              return 3;
            };

            withPriority.sort((a, b) => {
              const distanceA = a.priority ?? Infinity;
              const distanceB = b.priority ?? Infinity;
              if (distanceA !== distanceB) {
                return distanceA - distanceB;
              }
              const verificationA = getVerificationPriority(a);
              const verificationB = getVerificationPriority(b);
              if (verificationA !== verificationB) {
                return verificationA - verificationB;
              }
              return a.name.localeCompare(b.name);
            });

             set({
               isLoading: false,
               results: withPriority,
               error: null,
             });
          } else {
            // Load all schools immediately (less than 10)
            const withDistance = await Promise.all(
              filtered.map(async (school) => {
                if (!school.zip) {
                  return { ...school, distanceMiles: undefined };
                }
                const schoolLocation = await fetchZipLocation(school.zip);
                const distanceMiles =
                  userLocation && schoolLocation
                    ? haversineMiles(userLocation, schoolLocation)
                    : undefined;
                return { ...school, distanceMiles };
              })
            );

            const sorted = withDistance.sort((a, b) => {
              const distanceA = a.distanceMiles ?? Number.POSITIVE_INFINITY;
              const distanceB = b.distanceMiles ?? Number.POSITIVE_INFINITY;
              if (distanceA === distanceB) {
                return a.name.localeCompare(b.name);
              }
              return distanceA - distanceB;
            });

            set({
              isLoading: false,
              results: sorted,
              error: null,
            });
          }
        } catch (error) {
          console.error('Failed to search schools:', error);
          set({
            isLoading: false,
            error: 'An error occurred while searching.',
            results: [],
          });
        }
      },

      clearResults: () => {
        set({ results: [], error: null });
      },

      getStates: () => {
        return getUniqueStates(get().schools);
      },
    }),
    {
      name: 'dental-school-storage',
      partialize: (state) => ({
        zip: state.zip,
        state: state.state,
        onlyComplete: state.onlyComplete,
        includeCommunityClinics: state.includeCommunityClinics,
      }),
    }
  )
);
