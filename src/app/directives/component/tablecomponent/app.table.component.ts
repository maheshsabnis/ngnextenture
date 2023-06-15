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
  message:string;
  colSpan:number;
  headers:Array<any>;
  constructor() {
    this._DataSource = new Array<any>();
    this.CanDelete = false;
    this.headers = new Array<any>();
    this.colSpan = 0;
    this.message = '';
  }

  ngOnInit() {
    console.log('c');
  }
  /*
    The Change EVent that will show next-page data from DataSource
  */

    @Input()
    set DataSource(v:Array<any>){

      this._DataSource  = v;
      if(this._DataSource !== undefined && this._DataSource.length > 0){

        let firstObject = this._DataSource[0];
        this.headers = Object.keys(firstObject);
        this.colSpan = this.headers.length;
      } else {
        this.message = 'No Data';
      }

    }
    get DataSource():Array<any>{

      return this._DataSource;
    }
}
