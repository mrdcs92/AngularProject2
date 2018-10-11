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
  title = 'CaliberTest';

  results = "these are where the results go";
  mydisplay = "";

  testNgObj: Observable<any> = this.httpservice.testngGet();
  testNgObj2: Observable<any> = this.httpservice.testngGet2();

  cuke1: Observable<any> = this.httpservice.cukeGet();
  cuke2: Observable<any> = this.httpservice.cukeGet2();

  getTestNG1() {
    this.testNgObj.subscribe(resp => console.log(resp), err => console.log("big error"));
  }
  getTestNG2() {
    this.testNgObj2.subscribe(resp => console.log(resp), err => console.log("huge error"));
  }

  getCuke1() {
    this.cuke1.subscribe(resp => console.log(resp), err => console.log("massive error"));
  }
  getCuke2() {
    this.cuke2.subscribe(resp => console.log(resp), err => console.log("monstrous error"));
  }


  show() {
    this.mydisplay = this.results
  }
}
