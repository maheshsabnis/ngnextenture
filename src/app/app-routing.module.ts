import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptListComponent } from './myroute/deptlistcomponent/app.deptlist.component';
import { CreateDeptComponent } from './myroute/createdeptcomponent/app.createdept.component';
import { EditDeptComponent } from './myroute/editdeptcomponent/app.editdept.component';
import { ProductComponent } from './productcomponent/app.product.component';
/* The ROute Table */
const routes: Routes = [
  {path:'', component:DeptListComponent, children:[{
    path:'product', component:ProductComponent
  }] } ,
  {path:'create', component:CreateDeptComponent},
  {path:'edit/:id', component:EditDeptComponent},
  {path:'lazy', loadChildren:()=> import('./../../lazymodule/app.lazy.module')
  .then(m=>m.LazyModule) },
  {path:'**', redirectTo:''}
];

/* The forRoot will export the root level routing
 this is allied for currently loaded angular app
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
