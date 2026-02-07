class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests = 10;
  private windowMs = 60000;

  canMakeRequest(key: string): boolean {
    const now = Date.now();
    const recent = this.requests.get(key) || [];
    const valid = recent.filter(t => now - t < this.windowMs);

    if (valid.length >= this.maxRequests) {
      return false;
    }

    valid.push(now);
    this.requests.set(key, valid);
    return true;
  }

  getRemainingRequests(key: string): number {
    const now = Date.now();
    const recent = this.requests.get(key) || [];
    const valid = recent.filter(t => now - t < this.windowMs);
    return Math.max(0, this.maxRequests - valid.length);
  }

  reset(key?: string): void {
    if (key) {
      this.requests.delete(key);
    } else {
      this.requests.clear();
    }
  }
}

const zipLimiter = new RateLimiter();

export { zipLimiter, RateLimiter };
