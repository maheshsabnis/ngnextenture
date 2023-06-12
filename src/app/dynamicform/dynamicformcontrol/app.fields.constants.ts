export class FormModel {
  [x:string]:string | undefined;
  constructor( public FirstName:string,
  public MiddleName:string,
  public LastName:string,
  public Age:string){
  }
};
