import { Product } from "./app.product.model";

export class ProductLogic {
   private products:Array<Product>;
   constructor() {
    this.products = new Array<Product>();
    this.products.push(new Product(1, 'Laptop', 'ECT', 'MS',100000));
    this.products.push(new Product(2, 'SSD', 'ECT', 'LS',10000));
   }

   getProducts(): Array<Product> {
    return this.products ;
   }
   addProduct(prd:Product): Array<Product> {
    this.products.push(prd);
    return this.products ;
   }
}
