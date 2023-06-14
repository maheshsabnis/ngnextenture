import { Component, OnInit } from '@angular/core';
import { DepartmentHttpService } from '../services/app.dept.http.service';
import { Department } from '../models/app.dept.model';

@Component({
  selector: 'app-depthttpcall-component',
  templateUrl: './app.depthttpcall.view.html'
})

export class DeptHttpCallComponent implements OnInit {
  departments: Array<Department>;
  message:string;
  /* The Service Injection */
  constructor(private serv: DepartmentHttpService) {
    this.departments = new Array<Department>();
    this.message = '';
  }

  ngOnInit() {
    /* The Resource Intensice call */
    this.serv.getDepartments().subscribe({
        next: (response)=>{
          console.log('====================================');
          console.log(JSON.stringify(response));
          console.log('====================================');
           this.departments = response;
        },
        error:(error)=>{
           this.message = `Error ${error}`
        },
        complete:()=>{
          this.message += 'Call Completed'
        }
    });
  }

  createDept():void {
     const dept = new Department(9002, 'Dept-9002', 'Pune', 222);
     this.serv.postDepartment(dept).subscribe({
      next: (response)=>{
         this.departments = [...this.departments, response];
      },
      error:(error)=>{
         this.message = `Error ${error}`
      },
      complete:()=>{
        this.message += 'Call Completed'
      }
     });
  }
}
