import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class SearchService {

  constructor(private http: HttpClient) {
  }

  searchByName(name: string, active: boolean): Observable<any> {
    return this.http
      .get(`api/elements/?name=${name}&active=${active}`);
  }

  getAll(): Observable<any> {
    return this.http
      .get(`api/elements`);
  }
}
