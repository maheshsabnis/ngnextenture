import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceOne {
  constructor() { }

}



@Injectable({providedIn: 'root'})
export class ServiceTwo {
  constructor() { }

}

@Injectable({providedIn: 'root'})
export class ServiceThree {
  constructor(private http:HttpClient) { }

}



@Injectable({providedIn:'root'})
export class FacadeService {
  constructor(private serv1:ServiceOne, private serv2:ServiceTwo, private serv3:ServiceThree){

  }
}
