import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './app.table.view.html'
})

export class TableComponent implements OnInit {
  private _DataSource:Array<any>;
  @Input() CanDelete:boolean;
  @Input() CanPaginate:boolean;
  @Input() PageSize:number;
  @Input() CanSort:boolean;
  colSpan:number;
  headers:Array<any>;
  constructor() {
    this._DataSource = new Array<any>();
    this.CanDelete = false;
    this.headers = new Array<any>();
    this.colSpan = 0;
  }

  ngOnInit() {
    console.log('c');
    if(this._DataSource !== undefined || this._DataSource.length > 0){
      // Read the first Records from Arrau
      let firstObject = this._DataSource[0];
      this.headers = Object.keys(firstObject);
      this.colSpan = this.headers.length;
    }
    else {
      this.headers =[]; /* No Columns */
    }

    /*
       Read DataSOurce to Generate Pages
     */
  }
  /*
    The Change EVent that will show next-page data from DataSource
  */

    @Input()
    set DataSource(v:Array<any>){
      console.log('Set Updated...');
      this._DataSource = v;
    }
    get DataSource():Array<any>{
      console.log('Get Updated...');
      return this._DataSource;
    }
}
