import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductLogic } from '../models/app.product.logic';
import { Product } from '../models/app.product.model';
import { Categories, Manufacturers } from '../models/app.constants';

@Component({
  selector: 'app-product-component',
  templateUrl: './app.product.view.html'
})

export class ProductComponent implements OnInit, OnChanges {
  private logic:ProductLogic
  products:Array<Product>;
  product:Product;
  categories = Categories;
  manufacturers = Manufacturers;
  color:string;
  headers:Array<string>;
  constructor() {
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
    this.product = new Product(0,'','','',0);
    this.headers = new Array<string>();
    this.color = '';
  }

  ngOnInit() {
    this.headers = Object.keys(this.product);
    this.products = this.logic.getProducts();
    //alert(JSON.stringify(this.products));
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  clear():void {
    this.product = new Product(0,'','','',0);
  }
  save():void {
    this.products = this.logic.addProduct(this.product);
  }

  categoryChange(evt:any):void{
    this.product.CategoryName = evt.target.value;
  }
  manufacturerChange(evt:any):void{
    this.product.Manufacturer = evt.target.value;
  }

  selectRecord(prd:Product):void {
    this.product = Object.assign({}, prd);
  }
}
