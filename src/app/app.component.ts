import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaliberTest';

  results = "these are where the results go";
  mydisplay = "";


  show() {
    this.mydisplay = this.results
  }
}
