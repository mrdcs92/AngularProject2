import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicHttpService } from './services/basic-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpservice: BasicHttpService) { }
  title = 'Badd CaliberTest';

  results = "these are where the results go";
  mydisplay = "";
  isBusy = false;

  testNgObj: Observable<any> = this.httpservice.testngGet();

  cuke1: Observable<any> = this.httpservice.cukeGet();

  myCukeResults = [];
  myNGResults = [];

  getTestNG1() {
    this.isBusy = true;
    this.testNgObj.subscribe(resp => { this.myNGResults = resp },
      err => console.log("big error"),
      () => { this.isBusy = false; console.log(this.myNGResults) });
  }

  getCuke1() {
    this.isBusy = true;
    this.cuke1.subscribe(
      resp => { this.myCukeResults = resp },
      err => console.log("massive error"),
      () => { this.isBusy = false; console.log(this.myCukeResults) });
  }

  show() {
    this.mydisplay = this.results
  }
}
