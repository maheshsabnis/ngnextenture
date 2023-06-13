import { EventEmitter, Injectable } from '@angular/core';

/* a state object that will be responsible to store data
received from the sender

a method usig which sender will pass data

an event that will be subscribed  by the received
to receid data from the sender

*/
@Injectable({providedIn: 'root'})
export class CommunicaitonService {
  /* State Object */
  data:any;
  /* an event this will be subscribed by the receiver */
  onDataReceived:EventEmitter<any>;
  constructor() {
    this.data = '';
    this.onDataReceived = new EventEmitter<any>();
  }

  /* method invoked by sender to pass the data */
  acceptData(d:any):void{
    this.data = d;
    this.onDataReceived.emit(this.data);
  }


}
