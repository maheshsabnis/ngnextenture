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

@NgModule({
  declarations: [
    AppComponent, SImpleContactFormComponent,
    DynaicFormControlComponent, DynamicFormGeneratorComponent, ProductComponent,
    SelectComponent, TableComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
