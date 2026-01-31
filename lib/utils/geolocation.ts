import type { SchoolLocation, School } from '@/lib/types';
import { zipLimiter } from './rate-limiter';

// In-memory cache for ZIP location data
const zipLocationCache = new Map<string, SchoolLocation | null>();
const zipCacheKey = 'gz';
const zipCacheTtlMs = 1000 * 60 * 60 * 24 * 30; // 30 days

// Cache management: remove old entries when cache exceeds 1MB
function manageCacheSize() {
  try {
    if (typeof window === 'undefined') return;

    const cached = localStorage.getItem(zipCacheKey);
    if (!cached) return;

    const data = JSON.parse(cached);
    const cacheSize = new Blob([cached]).size;

    // If cache is larger than 1MB, remove oldest 50%
    if (cacheSize > 1024 * 1024) {
      const entries = Object.entries(data) as [string, ZipCacheEntry][];
      // Sort by timestamp (oldest first)
      entries.sort((a, b) => a[1].ts - b[1].ts);

      // Remove oldest 50%
      const toRemove = Math.floor(entries.length * 0.5);
      const newData = entries.slice(toRemove).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as ZipLocalCache);

      localStorage.setItem(zipCacheKey, JSON.stringify(newData));
    }
  } catch (error) {
    console.error('Failed to manage cache size:', error);
  }
}

interface ZipCacheEntry {
  lat?: number;
  lon?: number;
  value?: null;
  ts: number;
}

type ZipLocalCache = Record<string, ZipCacheEntry>;

let zipLocalCache: ZipLocalCache = {};

// Load from localStorage if available (client-side only)
if (typeof window !== 'undefined') {
  try {
    const cached = localStorage.getItem(zipCacheKey);
    if (cached) {
      zipLocalCache = JSON.parse(cached);
    }
  } catch (error) {
    console.error('Failed to load ZIP cache from localStorage:', error);
  }
}

function saveZipLocalCache() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(zipCacheKey, JSON.stringify(zipLocalCache));
    } catch (error) {
      console.error('Failed to save ZIP cache to localStorage:', error);
    }
  }
}

function readZipLocalCache(zip: string): SchoolLocation | null {
  const entry = zipLocalCache[zip];
  if (!entry || !entry.ts) return null;
  if (Date.now() - entry.ts > zipCacheTtlMs) return null;
  if (entry.value === null) return null;
  if (typeof entry.lat === 'number' && typeof entry.lon === 'number') {
    return { lat: entry.lat, lon: entry.lon };
  }
  return null;
}

function writeZipLocalCache(zip: string, value: SchoolLocation | null) {
  if (value) {
    zipLocalCache[zip] = { lat: value.lat, lon: value.lon, ts: Date.now() };
  } else {
    zipLocalCache[zip] = { value: null, ts: Date.now() };
  }
  saveZipLocalCache();
  manageCacheSize();
}

export function normalizeZip(zip: string | number | null | undefined): string {
  return String(zip || '')
    .trim()
    .replace(/\D/g, '')
    .slice(0, 5);
}

export async function fetchZipLocation(
  zip: string | number | null | undefined
): Promise<SchoolLocation | null> {
  const normalized = normalizeZip(zip);
  if (!normalized || normalized.length !== 5) return null;

  // Check in-memory cache first
  if (zipLocationCache.has(normalized)) {
    return zipLocationCache.get(normalized) || null;
  }

  // Check localStorage cache
  const cached = readZipLocalCache(normalized);
  if (cached) {
    zipLocationCache.set(normalized, cached);
    return cached;
  }

  // Rate limit check
  if (!zipLimiter.canMakeRequest('zip-api')) {
    const remaining = zipLimiter.getRemainingRequests('zip-api');
    throw new Error(
      `Too many requests. Please wait 60 seconds. Remaining requests: ${remaining}`
    );
  }

  try {
    // Add timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`https://api.zippopotam.us/us/${normalized}`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }

    const data = await response.json();

    // Validate response structure
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid API response format');
    }

    const place = data.places && data.places[0];
    if (!place || typeof place !== 'object') {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }

    // Validate coordinate fields
    const { latitude, longitude } = place;
    if (
      typeof latitude !== 'string' ||
      typeof longitude !== 'string' ||
      !latitude.trim() ||
      !longitude.trim()
    ) {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }

    const lat = Number.parseFloat(latitude);
    const lon = Number.parseFloat(longitude);

    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      zipLocationCache.set(normalized, null);
      writeZipLocalCache(normalized, null);
      return null;
    }

    // Validate coordinate ranges
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      const errorMsg = 'Invalid coordinates from API';
      throw new Error(errorMsg);
    }

    const value = { lat, lon };
    zipLocationCache.set(normalized, value);
    writeZipLocalCache(normalized, value);
    return value;
  } catch (error) {
    // Improved error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('ZIP lookup failed:', errorMessage);

    if (errorMessage.includes('abort') || errorMessage.includes('timeout')) {
      const errorMsg = 'Request timed out. Please try again.';
      throw new Error(errorMsg);
    }

    zipLocationCache.set(normalized, null);
    writeZipLocalCache(normalized, null);
    return null;
  }
}

export function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}

export function haversineMiles(
  a: SchoolLocation,
  b: SchoolLocation
): number {
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const calc =
    sinLat * sinLat + Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon;
  const c = 2 * Math.atan2(Math.sqrt(calc), Math.sqrt(1 - calc));
  return earthRadiusMiles * c;
}

export function isSchoolComplete(school: School): boolean {
  const requiredFields: (keyof School)[] = ['name', 'city', 'state', 'zip', 'phone', 'website'];
  return requiredFields.every((field) => {
    const value = school[field];
    return typeof value === 'string' && value.trim().length > 0;
  });
}

export function getMissingFields(school: School): string[] {
  const requiredFields: (keyof School)[] = ['name', 'city', 'state', 'zip', 'phone', 'website'];
  const fieldLabels: Record<keyof School, string> = {
    name: 'School Name',
    city: 'City',
    state: 'State',
    zip: 'ZIP Code',
    phone: 'Phone',
    website: 'Website',
    notes: 'Notes',
    hidden: 'Hidden',
  };

  return requiredFields.filter((field) => {
    const value = school[field];
    return typeof value !== 'string' || value.trim().length === 0;
  }).map((field) => fieldLabels[field]);
}

export function normalizeSchoolName(name: string): string {
  return (name || '').trim().toLowerCase();
}

export function getUniqueStates(schools: School[]): string[] {
  return Array.from(
    new Set(schools.map((school) => school.state).filter(Boolean))
  ).sort();
}
