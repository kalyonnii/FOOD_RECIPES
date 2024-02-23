import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { DashContentModule } from '../dash-content/dash-content.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
HeaderModule,
DashContentModule

  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
