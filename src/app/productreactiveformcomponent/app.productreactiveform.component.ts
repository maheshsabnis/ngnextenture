import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductLogic } from '../models/app.product.logic';
import { Product } from '../models/app.product.model';
import { Categories, Manufacturers } from '../models/app.constants';

import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './app.custom.validator';

@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html',

})

export class ProductReactiveFormComponent implements OnInit, OnChanges {
  private logic:ProductLogic
  products:Array<Product>;
  product:Product;
  categories = Categories;
  manufacturers = Manufacturers;
  headers:Array<string>;
  frmProduct:FormGroup;
  constructor() {
    this.products = new Array<Product>();
    this.logic = new ProductLogic();
    this.product = new Product(0,'','','',0);
    this.headers = new Array<string>();

    /* defining the FormGroup */
    this.frmProduct = new FormGroup({
      ProductId: new FormControl(this.product.ProductId, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(8), Validators.pattern('[0-9]+'), CustomValidator.even])),
      ProductName: new FormControl(this.product.ProductName),
      CategoryName: new FormControl(this.product.CategoryName),
      Manufacturer: new FormControl(this.product.Manufacturer),
      Price: new FormControl(this.product.Price)
    })
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
    this.product = this.frmProduct.value;
    this.products = this.logic.addProduct(this.product);
    alert(JSON.stringify(this.frmProduct.value));
  }

  categoryChange(evt:any):void{
    this.product.CategoryName = evt.target.value;
  }
  manufacturerChange(evt:any):void{
    this.product.Manufacturer = evt.target.value;
  }
}
