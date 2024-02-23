import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { ContentModule } from '../content/content.module';
import { AppRoutingModule } from '../app-routing.module';
import { FooterModule } from '../footer/footer.module';
import { DashContentModule } from '../dash-content/dash-content.module';
import { HomeContentModule } from '../home-content/home-content.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    ContentModule,
    AppRoutingModule,
    FooterModule,
    HomeContentModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
