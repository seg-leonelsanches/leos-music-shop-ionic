import { Injectable } from '@angular/core';
import { AnalyticsBrowser } from '@segment/analytics-next';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  analytics: AnalyticsBrowser;

  constructor() { 
    this.analytics = AnalyticsBrowser.load({ 
      writeKey: 'your-write-key-here'
    });
  }

  getAnalytics() {
    return this.analytics;
  }
}
