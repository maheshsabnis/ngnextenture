import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/app.dept.model';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class DepartmentHttpService {
  private url:string;
  /* the HttpClient is resolved using HttpClientModule */
  constructor(private httpClient: HttpClient) {
    this.url = "http://localhost:4000";
  }

  getDepartments():Observable<Department[]>{
     let response:Observable<Department[]>;
     response = this.httpClient.get<Department[]> (`${this.url}/api/Departments`);
     return response;
  }

  getDepartment(id:number):Observable<Department>{
    let response:Observable<Department>;
    response = this.httpClient.get<Department> (`${this.url}/api/Departments/${id}`);
    return response;
  }
  postDepartment(dept:Department):Observable<Department>{
    let response:Observable<Department>;
    response = this.httpClient.post<Department> (`${this.url}/api/Departments`, dept, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  putDepartment(id:number, dept:Department):Observable<Department>{
    let response:Observable<Department>;
    response = this.httpClient.put<Department> (`${this.url}/api/Departments/${id}`, dept, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    return response;
  }

  deleteDepartment(id:number):Observable<Department>{
    let response:Observable<Department>;
    response = this.httpClient.delete<Department> (`${this.url}/api/Departments/${id}`);
    return response;
  }

}
