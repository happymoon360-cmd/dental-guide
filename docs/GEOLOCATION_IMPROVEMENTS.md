# Geolocation System Improvements

## Overview

The ZIP code distance calculation system has been significantly enhanced to improve accuracy, reliability, and user experience. This document details the improvements made to `/lib/utils/geolocation.ts`.

## Key Improvements

### 1. Enhanced Coordinate Mapping Accuracy

**Multiple API Fallback Strategy:**
- **Primary API**: Zippopotam.us (US-only, fast and reliable)
- **Backup API**: OpenStreetMap Nominatim (international support)
- **Smart Fallback**: Automatically tries backup API when primary fails

**Benefits:**
- Higher success rate for ZIP code lookups
- International ZIP code support (Canada, UK, etc.)
- Better handling of edge cases and malformed data

### 2. Better Exception Handling

**Structured Error Types:**
```typescript
interface GeocodingError extends Error {
  code: 'INVALID_ZIP' | 'RATE_LIMIT' | 'TIMEOUT' | 'NETWORK_ERROR' | 'API_ERROR' | 'NOT_FOUND';
  isRetryable: boolean;
}
```

**Error Categories:**
- `INVALID_ZIP`: Malformed ZIP code (not retryable)
- `RATE_LIMIT`: Too many requests (retryable)
- `TIMEOUT`: Request took too long (retryable)
- `NETWORK_ERROR`: Connection issues (retryable)
- `API_ERROR`: Service problems (retryable)

**User-Friendly Messages:**
- "Invalid ZIP code format. Please enter a valid ZIP code."
- "Too many requests. Please wait 60 seconds."
- "Request timed out. Please try again."

### 3. Improved Caching Strategy

**Multi-Level Caching:**
1. **In-Memory Cache**: Fastest, per-session
2. **localStorage Cache**: Persists across sessions

**Configurable TTL:**
```typescript
const CACHE_TTL = {
  SUCCESS: 30 days,      // Successful lookups cached longer
  FAILURE: 1 day,        // Failed lookups expire sooner
  TEMPORARY_ERROR: 5 min // Short-lived for transient errors
};
```

**Automatic Cache Management:**
- Expired entries automatically removed
- QuotaExceededError handling with cleanup
- Size-based eviction (removes oldest 50% when >1MB)

**Cache Invalidation:**
```typescript
// Clear specific ZIP
clearLocationCache('90210');

// Clear all cached locations
clearLocationCache();
```

### 4. International ZIP Code Support

**Supported Formats:**

| Country | Format | Example | Pattern |
|---------|--------|---------|---------|
| US | 5 digits | 90210 | `^\d{5}$` |
| US | ZIP+4 | 90210-1234 | `^\d{5}-\d{4}$` → `90210` |
| Canada | A1A 1A1 | K1A 0B1 | `^[A-Z]\d[A-Z]\d[A-Z]\d$` |
| UK | SW1A 1AA | SW1A 1AA | `^[A-Z]{1,2}\d[A-Z\d]?\d[A-Z]{2}$` |

**Country Detection:**
```typescript
detectZipCountry('90210');  // 'US'
detectZipCountry('K1A0B1'); // 'CA'
detectZipCountry('SW1A1AA'); // 'UK'
```

### 5. Fallback Mechanisms

**Three-Tier Fallback System:**

1. **Try Primary API** (Zippopotam.us)
   - Fast, free, no rate limiting
   - US ZIP codes only

2. **Try Backup API** (OpenStreetMap)
   - Slower, rate limited
   - International support
   - Only 1 retry to preserve rate limits

3. **Cache Failure**
   - Prevents repeated failed lookups
   - Shorter TTL (1 day) for retry

### 6. Request Retry Logic

**Exponential Backoff:**
- Max 2 retries for primary API
- Max 1 retry for backup API
- Delays: 1s, 2s, 4s

**Timeout Handling:**
- 8-second timeout per request
- Automatic abort and retry on timeout

### 7. Coordinate Validation

**Sanity Checks:**
- Range validation: lat [-90, 90], lon [-180, 180]
- US coordinate bounds checking
- Type-safe coordinate parsing

**Example:**
```typescript
// Rejects invalid coordinates
isValidCoordinate(200, 200); // false (out of range)

// Accepts valid US coordinates
isValidCoordinate(40.7128, -74.0060); // true (New York)

// Accepts international coordinates
isValidCoordinate(51.5074, -0.1278); // true (London)
```

## New Public API

### Functions

#### `normalizeZip(zip: string | number | null | undefined): string`
Normalizes ZIP codes from various formats to a standard format.

#### `isValidZipFormat(zip: string): boolean`
Validates if a ZIP code is properly formatted.

#### `detectZipCountry(zip: string): 'US' | 'CA' | 'UK' | 'OTHER'`
Detects the country from ZIP code format.

#### `fetchZipLocation(zip: string | number | null | undefined): Promise<SchoolLocation | null>`
Fetches location data with automatic fallback and caching. Throws `GeocodingError` for invalid inputs.

#### `fetchZipLocationWithDetails(zip: string | number | null | undefined): Promise<GeocodingResult>`
Fetches location with detailed metadata (source, cache status).

#### `haversineMiles(a: SchoolLocation, b: SchoolLocation): number`
Calculates distance in miles using Haversine formula.

#### `haversineKilometers(a: SchoolLocation, b: SchoolLocation): number`
Calculates distance in kilometers.

#### `clearLocationCache(zip?: string): void`
Clears cached location data for specific ZIP or all ZIPs.

#### `getCacheStats(): CacheStats`
Returns cache statistics for debugging.

## Usage Examples

### Basic ZIP Lookup

```typescript
import { fetchZipLocation } from '@/lib/utils/geolocation';

try {
  const location = await fetchZipLocation('90210');
  console.log(location); // { lat: 34.07, lon: -118.44 }
} catch (error) {
  if (error.code === 'INVALID_ZIP') {
    // Show validation error
  } else if (error.isRetryable) {
    // Show retry option
  }
}
```

### Distance Calculation

```typescript
import { fetchZipLocation, haversineMiles } from '@/lib/utils/geolocation';

const userZip = '90210';
const schoolZip = '90095'; // UCLA

const userLocation = await fetchZipLocation(userZip);
const schoolLocation = await fetchZipLocation(schoolZip);

const distance = haversineMiles(userLocation, schoolLocation);
console.log(`Distance: ${distance.toFixed(1)} miles`);
```

### Cache Management

```typescript
import { getCacheStats, clearLocationCache } from '@/lib/utils/geolocation';

// Check cache size
const stats = getCacheStats();
console.log(`Cached ${stats.entries} ZIP codes`);

// Clear specific ZIP
clearLocationCache('90210');

// Clear all cache
clearLocationCache();
```

### International Support

```typescript
import { fetchZipLocation, detectZipCountry } from '@/lib/utils/geolocation';

// Canadian postal code
const caLocation = await fetchZipLocation('K1A0B1');
console.log(detectZipCountry('K1A0B1')); // 'CA'

// UK postcode
const ukLocation = await fetchZipLocation('SW1A1AA');
console.log(detectZipCountry('SW1A1AA')); // 'UK'
```

## Backward Compatibility

All existing code continues to work without changes:

- `fetchZipLocation()` still returns `SchoolLocation | null`
- Error handling is more specific but maintains the same behavior
- Cache format is backward compatible
- All exported functions have the same signatures

## Testing

A comprehensive test suite is available at `/tests/geolocation.test.ts` covering:

- ZIP code normalization
- Format validation
- Country detection
- Distance calculations
- Cache management
- Error handling

## Performance Considerations

**Cache Hit Rates:**
- First lookup: API call (500-1000ms)
- Subsequent lookups: Cache read (<1ms)
- localStorage persistence: Instant on page load

**Rate Limiting:**
- Respects existing `zipLimiter` configuration
- Backup API has reduced retries (1 instead of 2)
- Failed lookups cached to prevent spam

**Memory Usage:**
- In-memory cache: ~100 bytes per ZIP
- localStorage cache: Automatically managed at 1MB limit
- Automatic cleanup of expired entries

## Future Enhancements

Potential improvements for future iterations:

1. **Offline Fallback Data**: Include a small database of major city coordinates
2. **Batch Lookup**: Fetch multiple ZIPs in a single request
3. **Precise Coordinates**: Use more accurate geocoding for school-specific addresses
4. **Distance by Route**: Consider driving distance vs. straight-line distance
5. **Timezone Detection**: Add timezone information for each ZIP

## Troubleshooting

**ZIP code not found:**
- Check format with `isValidZipFormat()`
- Verify country with `detectZipCountry()`
- Try backup API automatically triggered

**Rate limit errors:**
- Wait 60 seconds before retrying
- Cache is working, reducing API calls
- Consider implementing server-side caching

**Cache issues:**
- Use `getCacheStats()` to inspect cache
- Use `clearLocationCache()` to reset
- localStorage quota issues handled automatically

## Files Modified

- `/lib/utils/geolocation.ts` - Core improvements
- `/tests/geolocation.test.ts` - Test suite (new file)

## Summary

The geolocation system now provides:
- Better accuracy through multiple APIs
- Robust error handling with user-friendly messages
- Intelligent caching with configurable TTL
- International ZIP code support
- Automatic fallback mechanisms
- Retry logic with exponential backoff

These improvements significantly enhance the reliability and user experience of the dental school finder's distance calculation feature.
