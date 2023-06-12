import { Component, OnInit } from '@angular/core';
import { ProductLogic } from '../models/app.product.logic';
import { Product } from '../models/app.product.model';
import { Categories, Manufacturers } from '../models/app.constants';

@Component({
  selector: 'app-product-component',
  templateUrl: './app.product.view.html'
})

export class ProductComponent implements OnInit {
  private logic:ProductLogic
  products:Array<Product>;
  product:Product;
  categories = Categories;
  manufacturers = Manufacturers;
  headers:Array<string>;
  constructor() {
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
    this.product = new Product(0,'','','',0);
    this.headers = new Array<string>();
  }

  ngOnInit() {
    this.headers = Object.keys(this.product);
    this.products = this.logic.getProducts();
    //alert(JSON.stringify(this.products));
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
}
