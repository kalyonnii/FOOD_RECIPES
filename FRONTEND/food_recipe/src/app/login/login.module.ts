import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
FormsModule,
BrowserAnimationsModule,

  ],
  providers:[MessageService],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
