import { NgModule } from '@angular/core';
import { SharedComponent } from './components/app.shared.component';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [SharedComponent],
  declarations: [SharedComponent],
  providers: [],
})
export class SharedModule { }
