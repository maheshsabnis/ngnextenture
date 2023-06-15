import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/app.dept.model';
import { DepartmentHttpService } from 'src/app/services/app.dept.http.service';

@Component({
  selector: 'app-editdept-component',
  templateUrl: './app.editdept.view.html'
})

export class EditDeptComponent implements OnInit, OnDestroy {
  dept:Department;
  id:number;
  constructor(private serv:DepartmentHttpService,
       private router:Router, private act:ActivatedRoute) {
    this.dept = new Department(0,'','',0);
    this.id = 0;
  }

  ngOnInit() {

    this.act.params.subscribe((param)=>{
       this.id = param['id'];
       console.log(this.id);
    });

    this.serv.getDepartment(this.id)
    .subscribe({
      next:(response)=>{
           this.dept = response;
      }
    });
  }

  clear():void {
    this.dept = new Department(0,'','',0);
  }
  save():void {
    this.serv.putDepartment(this.id,this.dept)
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
