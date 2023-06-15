import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-util-component',
  template: `
    <div class="container">
       <h5>The Component in Lazy Module</h5>
       {{message}}
       <hr/>
       <a [routerLink]="['u1']">Util 1</a>
    </div>
  `
})

export class UtilComponent implements OnInit, OnDestroy {
  message:string;
  constructor() {
    this.message = 'I am the Util COmponent';
    console.log('====================================');
    console.log('lazy ctor');
    console.log('====================================');
   }

  ngOnInit() {

    console.log('====================================')
    console.log('Lazy Init')
    console.log('====================================')
  }
  ngOnDestroy(): void {
      console.log('lazy destroy');

  }
}
