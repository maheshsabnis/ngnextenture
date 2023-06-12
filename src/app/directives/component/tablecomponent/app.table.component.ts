import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './app.table.view.html'
})

export class TableComponent implements OnInit {
  @Input() DataSource:Array<any>;
  @Input() CanDelete:boolean;
  @Input() CanPaginate:boolean;
  @Input() PageSize:number;
  @Input() CanSort:boolean;
  headers:Array<any>;
  constructor() {
    this.DataSource = new Array<any>();
    this.CanDelete = false;
    this.headers = new Array<any>();
  }

  ngOnInit() {
    if(this.DataSource !== undefined || this.DataSource.length > 0){
      // Read the first Records from Arrau
      let firstObject = this.DataSource[0];
      this.headers = Object.keys(firstObject);
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
}
