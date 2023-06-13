
export class Person{
  [x:string]:any;
  constructor(
    public PersonId:string,
    public PersonName:string,
    public Address:string,
    public Email:string
  ){}
}

export class Employee{
  [x:string]:any;
  constructor(
    public EmpNo:number,
    public EmpName:string,
    public DeptName:string,
    public Email:string
  ){}
}
