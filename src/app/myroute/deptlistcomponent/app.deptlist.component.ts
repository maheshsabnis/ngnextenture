import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from 'src/app/models/app.dept.model';
import { DepartmentHttpService } from 'src/app/services/app.dept.http.service';

@Component({
  selector: 'app-deptlist-component',
  template: `
     <div class="container">
      <h3>List of Departments</h3>
      <table class="table table-bordered table-striped">
   <thead>
     <tr>
       <th *ngFor="let h of headers">{{h}}</th>
     </tr>
   </thead>
   <tbody>
     <tr *ngFor="let dept of depts">
         <td *ngFor="let h of headers">
           {{dept[h]}}
         </td>
         <td>
          <button class="btn btn-warning">
              <a [routerLink]="['edit/'+ dept.deptNo]">Edit</a>
          </button>
         </td>
     </tr>
   </tbody>
   <tfoot>
      <tr>
        <td>
        <a [routerLink]="['product']">Product</a>
        </td>
      </tr>
   </tfoot>
</table>
<router-outlet></router-outlet>
     </div>
  `
})

export class DeptListComponent implements OnInit, OnDestroy {
  depts: Array<Department>;
  headers:Array<string>;
  constructor(private serv: DepartmentHttpService) {
    this.depts = new Array<Department>();
    this.headers = new Array<string>();
    console.log('LIst COnstructor');
  }

  ngOnInit() {
    console.log('LIst Init');

    this.serv.getDepartments()
             .subscribe({
              next:(response)=>{
                  this.depts=response;
                  this.headers = Object.keys(this.depts[0]);
                }
             });
  }
  ngOnDestroy(): void {
    console.log('====================================');
    console.log('The List Component Destroyed');
    console.log('====================================');
    /* Cleaning Operations */
    this.serv = undefined;
}
}
