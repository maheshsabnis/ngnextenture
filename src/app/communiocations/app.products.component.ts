import { Component, OnInit } from '@angular/core';
import { Products } from '../models/app.constants';
import { CommunicaitonService } from '../services/app.communication.service';
@Component({
  selector: 'app-products-component',
  template: `
<div class="container">
       <h3>Products List</h3>
       <div class="container">
          List of Productn for Category {{catName}}
       </div>
       <table class="table table-bordered table-striped">
           <tr *ngFor="let prd of FiltredProducts">
              <td>{{prd.ProductId}}</td>
              <td>{{prd.ProductName}}</td>
              <td>{{prd.CategoryName}}</td>
           </tr>
       </table>
     </div>
  `
})

export class ProductsComponent implements OnInit {
  products = Products;
  private filteredProducts:Array<any>;
  catName:string;
  constructor(private serv:CommunicaitonService) {
    this.filteredProducts = Array<any>();
    this.catName = '';
  }

  ngOnInit() {
    /* Subsceibe to an event emitted by the service and accodingly filter data */
    this.serv.onDataReceived.subscribe((c)=>{
      console.log('====================================')
      console.log(`Recievd Category ${c}`)
      console.log('====================================')
      this.catName = c;
    })
  }

  get FiltredProducts():Array<any>{

    if(this.catName.length === 0){
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((p,i)=>{
         return p.CategoryName === this.catName;
      });
    }

    return this.filteredProducts;
  }
}
