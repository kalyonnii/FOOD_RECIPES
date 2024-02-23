import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { FormsModule,  } from '@angular/forms';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
  FormsModule,
  MessageModule,
  BrowserAnimationsModule
  ],
  providers:[MessageService],
  exports:[
    SignupComponent
  ]
})
export class SignupModule { }
