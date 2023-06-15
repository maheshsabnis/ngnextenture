import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainrouting-component',
  template: `
    <div class="container">
       <h1>The Routing App</h1>
       <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>
                <a [routerLink]="['']">Department List</a>
              </td>
              <td>
                <a [routerLink]="['create']">Create Department</a>
              </td>
              <td>
                <a [routerLink]="['lazy']">Lazy Module</a>
              </td>
            </tr>
          </tbody>
       </table>
       <router-outlet></router-outlet>
    </div>
  `
})

export class MainRoutingComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
