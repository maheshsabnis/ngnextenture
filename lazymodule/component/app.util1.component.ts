import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-util1-component',
  template: `
    <div class="container">
       <h5>The Component in Lazy Module with u1</h5>
       {{message}}

    </div>
  `
})

export class Util1Component implements OnInit, OnDestroy {
  message:string;
  constructor() {
    this.message = 'I am the Util1 COmponent';
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
