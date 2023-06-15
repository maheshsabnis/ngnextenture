import { NgModule } from '@angular/core';
import { UtilComponent } from './component/app.util.component';
import { RouterModule, Routes } from '@angular/router';
import { Util1Component } from './component/app.util1.component';


const routes:Routes = [
  {path:'', component:UtilComponent},
  {path:'u1', component:Util1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [UtilComponent, Util1Component],
  providers: [],
})
export class LazyModule { }
