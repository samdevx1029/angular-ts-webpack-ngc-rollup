import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<hpt-header></hpt-header><h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
}
