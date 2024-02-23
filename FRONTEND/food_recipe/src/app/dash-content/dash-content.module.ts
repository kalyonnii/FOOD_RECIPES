import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashContentComponent } from './dash-content.component';



@NgModule({
  declarations: [
    DashContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashContentComponent
  ]
})
export class DashContentModule { }
