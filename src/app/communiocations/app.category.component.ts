import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/app.constants';
import { CommunicaitonService } from '../services/app.communication.service';
@Component({
  selector: 'app-category-component',
  template: `
     <div class="container">
       <h3>Category List</h3>
       <table class="table table-bordered table-striped">
           <tr *ngFor="let c of categories"
            (click)="onRowClick(c)">
              <td>{{c}}</td>
           </tr>
       </table>
     </div>
  `
})

export class CategoryComponent implements OnInit {
  categories = Categories;
  constructor(private serv:CommunicaitonService) { }

  ngOnInit() { }

  onRowClick(c:string):void {
    /* Pass data to service */
    this.serv.acceptData(c);
  }
}
