import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static even(ctrl:AbstractControl):any{
    let value = parseInt(ctrl.value);
    if(value % 2 === 0)
      return null; //valid
    return {
       even:false // Invalid
    }
  }
}
