import type { SchoolLocation, School } from '@/lib/types';
import { zipLimiter } from './rate-limiter';

// ============================================================================
// Types and Interfaces
// ============================================================================

interface ZipCacheEntry {
  lat?: number;
  lon?: number;
  value?: null;
  ts: number;
  source?: 'zippopotamus' | 'openstreetmap' | 'fallback';
}

type ZipLocalCache = Record<string, ZipCacheEntry>;

interface GeocodingError extends Error {
  code: 'INVALID_ZIP' | 'RATE_LIMIT' | 'TIMEOUT' | 'NETWORK_ERROR' | 'API_ERROR' | 'NOT_FOUND';
  isRetryable: boolean;
}

interface GeocodingResult {
  location: SchoolLocation | null;
  source: 'zippopotamus' | 'openstreetmap' | 'fallback' | 'cache';
  cached: boolean;
}

// ============================================================================
// Cache Configuration
// ============================================================================

const zipLocationCache = new Map<string, SchoolLocation | null>();
const zipCacheKey = 'gz';

// Configurable TTL settings
const CACHE_TTL = {
  SUCCESS: 1000 * 60 * 60 * 24 * 30, // 30 days for successful lookups
  FAILURE: 1000 * 60 * 60 * 24, // 1 day for failed lookups (shorter to retry)
  TEMPORARY_ERROR: 1000 * 60 * 5, // 5 minutes for temporary errors
};

const CACHE_SIZE_LIMIT = 1024 * 1024; // 1MB

// ============================================================================
// Cache Management
// ============================================================================

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
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        // Cache is full, clear old entries and retry
        clearExpiredCacheEntries();
        try {
          localStorage.setItem(zipCacheKey, JSON.stringify(zipLocalCache));
        } catch (retryError) {
          console.error('Failed to save ZIP cache even after cleanup:', retryError);
        }
      } else {
        console.error('Failed to save ZIP cache to localStorage:', error);
      }
    }
  }
}

function clearExpiredCacheEntries() {
  const now = Date.now();
  const entries = Object.entries(zipLocalCache) as [string, ZipCacheEntry][];

  // Remove expired entries
  for (const [key, entry] of entries) {
    const age = now - entry.ts;
    const ttl = entry.value === null ? CACHE_TTL.FAILURE : CACHE_TTL.SUCCESS;
    if (age > ttl) {
      delete zipLocalCache[key];
    }
  }
}

function manageCacheSize() {
  try {
    if (typeof window === 'undefined') return;

    clearExpiredCacheEntries();

    const cached = localStorage.getItem(zipCacheKey);
    if (!cached) return;

    const cacheSize = new Blob([cached]).size;

    // If cache is larger than 1MB, remove oldest 50%
    if (cacheSize > CACHE_SIZE_LIMIT) {
      const entries = Object.entries(zipLocalCache) as [string, ZipCacheEntry][];
      // Sort by timestamp (oldest first)
      entries.sort((a, b) => a[1].ts - b[1].ts);

      // Remove oldest 50%
      const toRemove = Math.floor(entries.length * 0.5);
      const newData = entries.slice(toRemove).reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as ZipLocalCache);

      zipLocalCache = newData;
      localStorage.setItem(zipCacheKey, JSON.stringify(newData));
    }
  } catch (error) {
    console.error('Failed to manage cache size:', error);
  }
}

function readZipLocalCache(zip: string): SchoolLocation | null {
  const entry = zipLocalCache[zip];
  if (!entry || !entry.ts) return null;

  const now = Date.now();
  const age = now - entry.ts;
  const ttl = entry.value === null ? CACHE_TTL.FAILURE : CACHE_TTL.SUCCESS;

  if (age > ttl) {
    // Entry expired, remove it
    delete zipLocalCache[zip];
    return null;
  }

  if (entry.value === null) return null;
  if (typeof entry.lat === 'number' && typeof entry.lon === 'number') {
    return { lat: entry.lat, lon: entry.lon };
  }
  return null;
}

function writeZipLocalCache(
  zip: string,
  value: SchoolLocation | null,
  source: 'zippopotamus' | 'openstreetmap' | 'fallback' = 'zippopotamus'
) {
  if (value) {
    zipLocalCache[zip] = { lat: value.lat, lon: value.lon, ts: Date.now(), source };
  } else {
    zipLocalCache[zip] = { value: null, ts: Date.now(), source };
  }
  saveZipLocalCache();
  manageCacheSize();
}

function invalidateZipCache(zip?: string) {
  if (zip) {
    delete zipLocalCache[zip];
    zipLocationCache.delete(zip);
  } else {
    // Clear all cache
    zipLocalCache = {};
    zipLocationCache.clear();
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(zipCacheKey);
      } catch (error) {
        console.error('Failed to clear ZIP cache:', error);
      }
    }
  }
}

// ============================================================================
// ZIP Code Normalization and Validation
// ============================================================================

/**
 * Normalizes ZIP codes from various formats
 * Supports: US (12345, 12345-6789), Canada (A1A 1A1), UK (SW1A 1AA), etc.
 */
export function normalizeZip(zip: string | number | null | undefined): string {
  if (zip === null || zip === undefined) return '';

  const zipStr = String(zip).trim().toUpperCase();

  // Remove all whitespace and special characters except alphanumeric
  const cleaned = zipStr.replace(/[\s\-]/g, '');

  // US ZIP codes: 5 digits or 5+4 format
  if (/^\d{5}(\d{4})?$/.test(cleaned)) {
    return cleaned.slice(0, 5);
  }

  // Canadian postal codes: A1A1A1 format
  if (/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleaned)) {
    return cleaned;
  }

  // UK postcodes: various formats, return cleaned for API to handle
  if (/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(cleaned)) {
    return cleaned;
  }

  // Return original cleaned format for other countries
  return cleaned.slice(0, 10); // Limit length
}

/**
 * Validates if a ZIP code is properly formatted
 */
export function isValidZipFormat(zip: string): boolean {
  if (!zip) return false;

  const normalized = normalizeZip(zip);

  // US: exactly 5 digits
  if (/^\d{5}$/.test(normalized)) return true;

  // Canada: 6 characters alphanumeric
  if (/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(normalized)) return true;

  // UK: 5-7 characters alphanumeric
  if (/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(normalized)) return true;

  return false;
}

/**
 * Detects the country from ZIP code format
 */
export function detectZipCountry(zip: string): 'US' | 'CA' | 'UK' | 'OTHER' {
  const normalized = normalizeZip(zip);

  if (/^\d{5}$/.test(normalized)) return 'US';
  if (/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(normalized)) return 'CA';
  if (/^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$/.test(normalized)) return 'UK';

  return 'OTHER';
}

// ============================================================================
// Error Handling
// ============================================================================

function createGeocodingError(
  message: string,
  code: GeocodingError['code'],
  isRetryable: boolean = false
): GeocodingError {
  const error = new Error(message) as GeocodingError;
  error.code = code;
  error.isRetryable = isRetryable;
  return error;
}

// ============================================================================
// Coordinate Validation
// ============================================================================

function isValidCoordinate(lat: number, lon: number): boolean {
  // Basic range check
  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    return false;
  }

  // Sanity checks for US coordinates (approximate bounds)
  if (lat >= 24 && lat <= 71 && lon >= -125 && lon <= -66) {
    return true; // Valid US coordinates
  }

  // Allow coordinates outside US for international ZIPs
  return Math.abs(lat) <= 90 && Math.abs(lon) <= 180;
}

function sanitizeCoordinate(value: string | number): number | null {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;

    const parsed = Number.parseFloat(trimmed);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

// ============================================================================
// Geocoding API Functions
// ============================================================================

/**
 * Retry logic with exponential backoff
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 2
): Promise<Response> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      lastError = error as Error;

      // Don't retry on abort or non-retryable errors
      if (error instanceof Error && error.name === 'AbortError') {
        throw createGeocodingError(
          'Request timed out. Please try again.',
          'TIMEOUT',
          true
        );
      }

      // Exponential backoff: 1s, 2s, 4s
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
      }
    }
  }

  throw createGeocodingError(
    'Network error. Please check your connection.',
    'NETWORK_ERROR',
    true
  );
}

/**
 * Primary geocoding API: Zippopotam.us (US only, fast and reliable)
 */
async function fetchFromZippopotamus(zip: string): Promise<SchoolLocation | null> {
  if (detectZipCountry(zip) !== 'US') {
    return null; // Only handles US ZIPs
  }

  const response = await fetchWithRetry(`https://api.zippopotam.us/us/${zip}`);

  if (response.status === 404) {
    return null; // ZIP not found
  }

  if (!response.ok) {
    throw createGeocodingError(
      'Geocoding service temporarily unavailable.',
      'API_ERROR',
      true
    );
  }

  const data = await response.json();

  // Validate response structure
  if (!data || typeof data !== 'object') {
    throw createGeocodingError('Invalid API response format', 'API_ERROR');
  }

  const place = data.places?.[0];
  if (!place || typeof place !== 'object') {
    return null;
  }

  // Extract and validate coordinates
  const lat = sanitizeCoordinate(place.latitude);
  const lon = sanitizeCoordinate(place.longitude);

  if (lat === null || lon === null) {
    return null;
  }

  if (!isValidCoordinate(lat, lon)) {
    throw createGeocodingError('Invalid coordinates from API', 'API_ERROR');
  }

  return { lat, lon };
}

/**
 * Backup geocoding API: Nominatim/OpenStreetMap (international, rate limited)
 */
async function fetchFromOpenStreetMap(zip: string): Promise<SchoolLocation | null> {
  const country = detectZipCountry(zip);
  let query = zip;

  // Add country code for better accuracy
  if (country !== 'OTHER') {
    query = `${zip}, ${country}`;
  }

  const response = await fetchWithRetry(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`,
    {},
    1 // Only 1 retry for backup API
  );

  if (!response.ok) {
    throw createGeocodingError(
      'Backup geocoding service unavailable.',
      'API_ERROR',
      true
    );
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const place = data[0];
  if (!place || typeof place !== 'object') {
    return null;
  }

  // Nominatim returns coordinates as strings
  const lat = sanitizeCoordinate(place.lat);
  const lon = sanitizeCoordinate(place.lon);

  if (lat === null || lon === null) {
    return null;
  }

  if (!isValidCoordinate(lat, lon)) {
    return null;
  }

  return { lat, lon };
}

/**
 * Fallback: Return null with caching to avoid repeated failed lookups
 */
async function fallbackToNull(zip: string): Promise<null> {
  return null;
}

// ============================================================================
// Main Geocoding Function
// ============================================================================

/**
 * Fetches location data for a ZIP code with multiple fallback strategies
 * @param zip - ZIP code (US, Canada, UK formats supported)
 * @returns Promise<SchoolLocation | null> - Coordinates or null if not found
 * @throws Error on rate limit or network errors (with isRetryable flag)
 */
export async function fetchZipLocation(
  zip: string | number | null | undefined
): Promise<SchoolLocation | null> {
  const normalized = normalizeZip(zip);

  // Validate format
  if (!normalized || !isValidZipFormat(normalized)) {
    throw createGeocodingError(
      'Invalid ZIP code format. Please enter a valid ZIP code.',
      'INVALID_ZIP',
      false
    );
  }

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
    throw createGeocodingError(
      `Too many requests. Please wait 60 seconds. Remaining: ${remaining}`,
      'RATE_LIMIT',
      true
    );
  }

  let result: SchoolLocation | null = null;
  let source: 'zippopotamus' | 'openstreetmap' | 'fallback' = 'zippopotamus';
  let lastError: Error | null = null;

  // Try primary API (Zippopotam.us)
  try {
    result = await fetchFromZippopotamus(normalized);
    if (result) {
      source = 'zippopotamus';
    }
  } catch (error) {
    lastError = error as Error;
    console.warn('Primary geocoding failed:', error);
  }

  // Fallback to OpenStreetMap if primary failed
  if (!result && (!lastError || lastError.message.includes('404'))) {
    try {
      result = await fetchFromOpenStreetMap(normalized);
      if (result) {
        source = 'openstreetmap';
      }
    } catch (error) {
      console.warn('Backup geocoding failed:', error);
    }
  }

  // Final fallback: cache the failure to avoid repeated lookups
  if (!result) {
    source = 'fallback';
    result = await fallbackToNull(normalized);
  }

  // Cache the result
  zipLocationCache.set(normalized, result);
  writeZipLocalCache(normalized, result, source);

  // Return null for not found (not an error)
  return result;
}

/**
 * Fetches location with detailed result information
 */
export async function fetchZipLocationWithDetails(
  zip: string | number | null | undefined
): Promise<GeocodingResult> {
  const normalized = normalizeZip(zip);

  // Check cache first
  if (zipLocationCache.has(normalized)) {
    const cached = zipLocationCache.get(normalized);
    return {
      location: cached || null,
      source: 'cache',
      cached: true
    };
  }

  const localCache = readZipLocalCache(normalized);
  if (localCache) {
    return {
      location: localCache,
      source: 'cache',
      cached: true
    };
  }

  // Fetch from API(s)
  const location = await fetchZipLocation(zip);

  // Determine source from cache entry
  const entry = zipLocalCache[normalized];
  const source = entry?.source || 'zippopotamus';

  return {
    location,
    source,
    cached: false
  };
}

// ============================================================================
// Distance Calculations
// ============================================================================

export function toRadians(value: number): number {
  return (value * Math.PI) / 180;
}

/**
 * Calculates distance between two coordinates using the Haversine formula
 * @param a - First coordinate
 * @param b - Second coordinate
 * @returns Distance in miles
 */
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

/**
 * Calculates distance in kilometers
 */
export function haversineKilometers(
  a: SchoolLocation,
  b: SchoolLocation
): number {
  const earthRadiusKm = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const sinLat = Math.sin(dLat / 2);
  const sinLon = Math.sin(dLon / 2);
  const calc =
    sinLat * sinLat + Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon;
  const c = 2 * Math.atan2(Math.sqrt(calc), Math.sqrt(1 - calc));
  return earthRadiusKm * c;
}

// ============================================================================
// School Utilities
// ============================================================================

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

// ============================================================================
// Cache Management Utilities
// ============================================================================

/**
 * Clears cached location data for a specific ZIP or all ZIPs
 */
export function clearLocationCache(zip?: string): void {
  invalidateZipCache(zip);
}

/**
 * Gets cache statistics for debugging
 */
export function getCacheStats(): {
  memorySize: number;
  localStorageSize: number;
  entries: number;
} {
  const memoryEntries = Array.from(zipLocationCache.entries());
  const localStorageEntries = Object.entries(zipLocalCache);

  let localStorageSize = 0;
  if (typeof window !== 'undefined') {
    try {
      const cached = localStorage.getItem(zipCacheKey);
      if (cached) {
        localStorageSize = new Blob([cached]).size;
      }
    } catch (error) {
      // Ignore
    }
  }

  return {
    memorySize: memoryEntries.length,
    localStorageSize,
    entries: localStorageEntries.length
  };
}
