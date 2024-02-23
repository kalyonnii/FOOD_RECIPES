import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashContentModule } from './dash-content/dash-content.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';


import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NavbarModule,
    FooterModule,
    HeaderModule,
    DashboardModule,
    DashContentModule,
    ReactiveFormsModule,
    FormsModule,
    SignupModule,
    LoginModule,
    HttpClientModule,
    MessageModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
