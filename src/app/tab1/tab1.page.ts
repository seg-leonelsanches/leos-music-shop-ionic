import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AnalyticsBrowser } from '@segment/analytics-next';
import { SegmentService } from '../services/segment.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page implements OnInit {
  analytics: AnalyticsBrowser;
  
  constructor(private segmentService: SegmentService) {
    this.analytics = this.segmentService.getAnalytics();
  }

  ngOnInit(): void {
    console.log('Identifying user');
    this.analytics.identify('123', { name: 'Leo' }).then((response) => console.log(response));
  }
}
