import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BasicHttpService {

  constructor(private http: HttpClient) { }

  testngGet(): Observable<any> {
    return this.http.get("http://ec2-54-84-195-175.compute-1.amazonaws.com:8080/Project2/getNGTests.do");
  }

  testngGet2(): Observable<any> {
    return this.http.get("");
  }

  cukeGet(): Observable<any> {
    return this.http.get("http://ec2-54-84-195-175.compute-1.amazonaws.com:8080/Project2/getCukeTests.do");
  }

  cukeGet2(): Observable<any> {
    return this.http.get("");
  }

}
