import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  templateUrl: './app.select.view.html'
})

export class SelectComponent implements OnInit {

  private _DataSource:Array<any>;
  @Output()change:EventEmitter<any>;


  private formControl:FormControl;

  constructor() {
    this._DataSource = ['IT','MECH','CIVIL'];
    this.change =new EventEmitter<any>();
  }

  @Input()
  set MyFormControl(v:FormControl){
    this.formControl = v;

    console.log(`Value = ${v.value}`);
  }

  get MyFormControl():FormControl{
    return this.formControl;
  }



 /* This will be used for PROPERTY-BINDING
   [DataSource]
 */
  @Input()
  set DataSource(value:Array<any>) {
    if(value.length === 0 || value !== undefined){
       this._DataSource = [];
       console.log(`Is Data Siurce Emopty`);
    } else {
      this._DataSource = value;
      console.log(`In Select COmponent ${JSON.stringify(this._DataSource)}`);
    }

  }

  get DataSource():Array<any>{
    console.log(`In Select COmponent ${JSON.stringify(this._DataSource)}`);
    return this._DataSource;
  }


  ngOnInit() {

    console.log(`In Select COmponent ${JSON.stringify(this._DataSource)}`);
  }

  onChange(val:any):void {
    alert(val.target.value);
    this.change.emit(val);
  }
}
