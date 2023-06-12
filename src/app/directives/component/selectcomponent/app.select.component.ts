import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './app.select.view.html'
})

export class SelectComponent implements OnInit {

  private _DataSource:Array<any>;
  @Output()change:EventEmitter<any>;

  constructor() {
    this._DataSource = Array<any>();
    this.change =new EventEmitter<any>();
  }
 /* This will be used for PROPERTY-BINDING
   [DataSource]
 */
  @Input()
  set DataSource(value:Array<any>) {
    if(value.length === 0 || value !== undefined){
       this._DataSource = [];
    } else {
      this._DataSource = value;
    }

  }

  get DataSource():Array<any>{
    return this._DataSource;
  }


  ngOnInit() { }

  onChange(val:any):void {
    alert(val.target.value);
    this.change.emit(val);
  }
}
