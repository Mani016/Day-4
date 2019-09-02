import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = false;
  title = 'Hello Title will be shown if you did not click';
  body = 'This is the body content and will be shown only if you click';
}
