import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkerObject } from './shared/modules/workerObject';
import {WorkerForm} from './shared/modules/wokerForm';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class SearchService {

  constructor(private http: HttpClient) {
  }

  // For tests only
  searchByName(name: string, active: boolean): Observable<any> {
    return this.http
      .get(`api/elements/?name=${name}&active=${active}`);
  }

  // For tests only
  addNewElement(element: any): Observable<any> {
    return this.http
      .post(`api/elements`, element);
  }

  getAllWorkers(): Observable<any> {
    return this.http.get('api/workers');
  }

  getAllOrders(): Observable<any> {
    return this.http.get('api/orders');
  }

  getOrderById(id: string): Observable<any> {
    return this.http.get(`api/orders?id=${id}`);
  }

  getWorkers(workerForm: WorkerForm): Observable<any> {
    let url = 'api/workers?';
    Object.keys(workerForm).forEach(formKey => {
      if ((formKey === 'name' || formKey === 'lastName' || formKey === 'email')
      && workerForm[formKey]) {
        url += `${formKey}=${workerForm[formKey]}&`;
      }
    });
    return this.http.get(url);
  }

  getWorkerById(id: string): Observable<any> {
    return this.http.get(`api/workers?id=${id}`);
  }

  getAll(): Observable<any> {
    return this.http
      .get(`api/elements`);
  }
}
