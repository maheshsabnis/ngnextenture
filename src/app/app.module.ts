import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SImpleContactFormComponent } from './dynamicform/simpleform/app.simplecontactform.component';
import { DynaicFormControlComponent } from './dynamicform/dynamicformcontrol/app.dynamicformcontrol.component';
import { DynamicFormGeneratorComponent } from './dynamicform/dynamicformcomponent/app.dynamicformgenerator.component';

import { ProductComponent } from './productcomponent/app.product.component';
import { SelectComponent } from './directives/component/selectcomponent/app.select.component';
import { TableComponent } from './directives/component/tablecomponent/app.table.component';
import { ProductReactiveFormComponent } from './productreactiveformcomponent/app.productreactiveform.component';
import { DynamicReactiveFormComponent } from './demodynamicreactiveform/app.dynamicreactiveform.component';
import { DynamicFormUserComponent } from './demodynamicreactiveform/app-dynmaicformuser.component';
import { CategoryComponent } from './communiocations/app.category.component';
import { ProductsComponent } from './communiocations/app.products.component';

import { Product } from './models/app.product.model';
import { Employee } from './models/app.person.model';
import { IdComponent } from './dynamicload/id/id.component';
import { UserCardComponent } from './dynamicload/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';

import { DeptHttpCallComponent } from './callservice/app.depthttpcall.component';
import { ColorDirective } from './directives/attribute/app.color.directive';
import { SharedModule } from 'lib/app.shared.module';
import { MainRoutingComponent } from './myroute/app.mainrouting.component';
import { DeptListComponent } from './myroute/deptlistcomponent/app.deptlist.component';
import { CreateDeptComponent } from './myroute/createdeptcomponent/app.createdept.component';
import { EditDeptComponent } from './myroute/editdeptcomponent/app.editdept.component';


@NgModule({
  declarations: [
    AppComponent, SImpleContactFormComponent,
    DynaicFormControlComponent, DynamicFormGeneratorComponent, ProductComponent,
    SelectComponent, TableComponent,
    ProductReactiveFormComponent,
    DynamicReactiveFormComponent,
    DynamicFormUserComponent,
    CategoryComponent,ProductsComponent,
    IdComponent,UserCardComponent,
    DeptHttpCallComponent, ColorDirective,
  MainRoutingComponent, DeptListComponent,
  CreateDeptComponent, EditDeptComponent
  ],
  /* AppRoutingModule: This is loading routetable at
    application level
  */
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    AppRoutingModule, HttpClientModule,
    SharedModule
  ],
  providers: [

  ],
  bootstrap: [MainRoutingComponent]
})
export class AppModule { }
