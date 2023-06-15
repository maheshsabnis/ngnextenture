import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/app.dept.model';
import { DepartmentHttpService } from 'src/app/services/app.dept.http.service';

@Component({
  selector: 'app-createdept-component',
  templateUrl: './app.createdept.view.html'
})

export class CreateDeptComponent implements OnInit, OnDestroy {
  dept:Department;
  constructor(private serv:DepartmentHttpService,
       private router:Router) {
    this.dept = new Department(0,'','',0);
  }

  ngOnInit() { }

  clear():void {
    this.dept = new Department(0,'','',0);
  }
  save():void {
    this.serv.postDepartment(this.dept)
            .subscribe({
              next:(response)=>{
                  this.router.navigate(['']);
              }
            });
  }

  ngOnDestroy(): void {
      console.log('====================================');
      console.log('The Create Component Destroyed');
      console.log('====================================');
  }

}
