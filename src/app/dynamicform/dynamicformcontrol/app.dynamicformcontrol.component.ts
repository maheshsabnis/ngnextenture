import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModel } from './app.fields.constants';
import { Employee, Person } from 'src/app/models/app.person.model';

@Component({
  selector: 'app-dynamicformcontrol-component',
  templateUrl: './app.dynamicformcontrol.view.html'
})

export class DynaicFormControlComponent implements OnInit {
  fields:Array<string>;
  contactForm!:FormGroup;
  model: FormModel;
  person:Person;
  employee:Employee;
  constructor() {
    this.fields = new Array<string>();
    this.model = new FormModel('','','','');
    this.person = new Person('','','','');
    this.employee = new Employee(0,'','','');
  }

  ngOnInit() {
    this.dynamicFormGenerator();
  }

  dynamicFormGenerator():void {
    const formFields = this.generateFormFieldsFromModel();
    this.contactForm = new FormGroup(formFields);
  }

  /* Method that will read allk properties and
    generate an object of FormControl
    as well as fields
  */
  generateFormFieldsFromModel():any {
    const formFields = {};
    for(const field of Object.keys(this.model)){
      formFields[field] = new FormControl('');
      this.fields.push(field);
    }
    return formFields;
  }

  save():void {
    alert(JSON.stringify(this.contactForm.value));
  }

}
