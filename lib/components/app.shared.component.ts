import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-component',
  template: `
    <div class="container">
       <h5>I am a component from Shared Module</h5>
    </div>
  `
})

export class SharedComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
