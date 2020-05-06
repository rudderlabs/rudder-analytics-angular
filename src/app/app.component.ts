import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trackClickEvent() {
    window.rudderanalytics.track('Learn Angular Link Clicked');
  }
}
