import { Component, OnInit } from '@angular/core';
import { EmployeeObj, Product } from '../models/app.product.model';


@Component({
  selector: 'app-dynamicformuser-component',
  template: `
    <table class="table table-bordered">
       <tr>
         <td>
            <app-dynamireactiveform-domponent
             [model]="product" (submit)="onProductSave($event)"
            ></app-dynamireactiveform-domponent>
         </td>
       </tr>
       <tr>
       <td>
            <app-dynamireactiveform-domponent
             [model]="employee" (submit)="onEmployeeSave($event)"
            ></app-dynamireactiveform-domponent>
         </td>

       </tr>
    </table>
  `
})

export class DynamicFormUserComponent implements OnInit {
  product:Product;
  employee:EmployeeObj;
  constructor() {
    this.product  =new Product(0,'','','',0);
    this.employee = new EmployeeObj(0,'');
  }

  ngOnInit() { }

  onProductSave($event:any):void{
    alert(`Product ${JSON.stringify($event)}`);
  }

  onEmployeeSave($event:any):void{
    alert(`Employee ${JSON.stringify($event)}`);
  }

}
