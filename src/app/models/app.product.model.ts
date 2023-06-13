export class Product {
  [x:string]:any;
  constructor(
    public ProductId:number,
    public ProductName:string,
    public CategoryName: string,
    public Manufacturer: string,
    public Price: number
  ){}
}


export class EmployeeObj {
  constructor(
    public EmpNo:number,
    public EmpName:string
  ){}
}
