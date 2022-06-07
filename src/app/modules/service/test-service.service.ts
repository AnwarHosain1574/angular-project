import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  url = environment.personal.baseApiEndPoint;

  // constructor(private http: HttpClient) { }

  // getAllData(): Observable<any> {
  //   return this.http.get<any>(this.url).pipe(map((data: any) => data));
  // }

  getEmployeeList() {
    return [
      {"id": 1, "name": "Anwar Hosain", "age": 25},
      {"id": 2, "name": "Rakibul Hasan", "age": 26},
      {"id": 3, "name": "Jitu Islam", "age": 27},
      {"id": 4, "name": "Tanvirul Islam", "age": 28},
    ];
  }
}
