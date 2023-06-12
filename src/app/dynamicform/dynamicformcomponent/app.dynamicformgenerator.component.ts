import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamicformgenerator-component',
  templateUrl: './app.dynamicformgenerator.view.html'
})

export class DynamicFormGeneratorComponent implements OnInit {
  @Input() formModel: {};
  fields:Array<string>;
  dynamicForm!:FormGroup;
  constructor() {
    this.fields = new Array<string>();
    //this.formModel = {};
  }

  ngOnInit() {
    this.dynamicFormGenerator();
  }

  dynamicFormGenerator():void {
    const formFields = this.generateFormFieldsFromModel();

    this.dynamicForm = new FormGroup(formFields);
  }

  /* Method that will read allk properties and
    generate an object of FormControl
    as well as fields
  */
  generateFormFieldsFromModel():any {
    const formFields = {};
    // for(const field of Object.keys(this.formModel)){
    //   formFields[field] = new FormControl('');
    //   this.fields.push(field);
    // }

    Object.keys(this.formModel).forEach((field:string,index:number)=>{
      formFields[field] = new FormControl('');
      this.fields.push(field);
    });


    return formFields;
  }
}
