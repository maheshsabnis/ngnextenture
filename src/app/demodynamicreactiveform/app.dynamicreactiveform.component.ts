import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dynamireactiveform-domponent',
  templateUrl: './app.dynamicreactiveform.view.html'
})

export class DynamicReactiveFormComponent implements OnInit {
  fields:Array<string>;
  @Input()model:any;
  @Output()submit:EventEmitter<any>;
  dynamicForm:FormGroup | undefined;
  constructor() {
    this.fields = new Array<string>();
    this.model= {};
    this.submit = new EventEmitter<any>();
  }

  ngOnInit() {
    this.generateDynamicForm();
  }

  generateDynamicForm():void {
    const formFields = this.fieldsGenerator();
    this.dynamicForm = new FormGroup(formFields);
  }

  /* the method wthat will read all keys from the model */
  fieldsGenerator():any {
     const formFields = {};
     /* Iterator over keys of model and
       based on that generate formFild Object
       as well as the field names
     */
    Object.keys(this.model).forEach((field,index)=>{
      /* The form Field */
       formFields[field] = new FormControl('');
       /* An Array that will be used to have fieldNames*/
       this.fields.push(field);
    });
    /* FormControl */
     return formFields;
  }

  save():void {
    this.submit.emit(this.dynamicForm.value);
  }
}
