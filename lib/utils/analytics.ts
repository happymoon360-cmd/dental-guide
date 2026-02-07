'use client';

/**
 * Analytics event types for tracking feature usage
 */
export type AnalyticsEventType =
  | 'script_generated'
  | 'school_search'
  | 'cost_estimate'
  | 'emergency_triage_viewed'
  | 'feedback_submitted'
  | 'copy_script'
  | 'school_website_click';

/**
 * Analytics event structure
 */
export interface AnalyticsEvent {
  id: string;
  timestamp: number;
  type: AnalyticsEventType;
  metadata?: Record<string, unknown>;
}

/**
 * Maximum number of events to store in localStorage
 */
const MAX_EVENTS = 1000;

/**
 * LocalStorage key for analytics events
 */
const STORAGE_KEY = 'dental_guide_analytics';

/**
 * Track an analytics event
 * @param type - The type of event to track
 * @param metadata - Optional metadata associated with the event
 */
export function trackEvent(
  type: AnalyticsEventType,
  metadata?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  try {
    const events = getEvents();
    const newEvent: AnalyticsEvent = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      type,
      metadata,
    };

    events.push(newEvent);

    // Keep only the most recent MAX_EVENTS events
    const trimmedEvents = events.slice(-MAX_EVENTS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedEvents));

    // Send to Plausible Analytics (if available)
    const plausible = (window as any).plausible;
    if (plausible && typeof plausible === 'function') {
      plausible(type, { props: metadata });
    }
  } catch (error) {
    // Silently fail if localStorage is not available
    console.warn('Failed to track analytics event:', error);
  }
}

/**
 * Get all analytics events from localStorage
 * @returns Array of analytics events
 */
export function getEvents(): AnalyticsEvent[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    const events = JSON.parse(stored) as AnalyticsEvent[];
    return Array.isArray(events) ? events : [];
  } catch (error) {
    console.warn('Failed to retrieve analytics events:', error);
    return [];
  }
}

/**
 * Get events filtered by type
 * @param type - The event type to filter by
 * @returns Array of events of the specified type
 */
export function getEventsByType(type: AnalyticsEventType): AnalyticsEvent[] {
  return getEvents().filter((event) => event.type === type);
}

/**
 * Get event counts grouped by type
 * @returns Record with event types as keys and counts as values
 */
export function getEventCounts(): Record<AnalyticsEventType, number> {
  const events = getEvents();
  const counts: Partial<Record<AnalyticsEventType, number>> = {};

  for (const event of events) {
    counts[event.type] = (counts[event.type] || 0) + 1;
  }

  return {
    script_generated: counts.script_generated || 0,
    school_search: counts.school_search || 0,
    cost_estimate: counts.cost_estimate || 0,
    emergency_triage_viewed: counts.emergency_triage_viewed || 0,
    feedback_submitted: counts.feedback_submitted || 0,
    copy_script: counts.copy_script || 0,
    school_website_click: counts.school_website_click || 0,
  };
}

/**
 * Clear all analytics events from localStorage
 */
export function clearEvents(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear analytics events:', error);
  }
}

/**
 * Export analytics events as JSON string
 * @returns JSON string of all events
 */
export function exportEventsAsJSON(): string {
  const events = getEvents();
  return JSON.stringify(events, null, 2);
}

/**
 * Get the most recent N events
 * @param count - Number of recent events to retrieve
 * @returns Array of the most recent events
 */
export function getRecentEvents(count: number = 50): AnalyticsEvent[] {
  const events = getEvents();
  return events.slice(-count).reverse();
}
