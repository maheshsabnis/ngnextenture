import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simplecontactform-component',
  templateUrl: './app.simplecontactform.view.html'
})

export class SImpleContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl('')
    });
  }
}
