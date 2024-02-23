import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food_recipe';


  isShow=true;
showHide(event:any){
    if(event instanceof DashboardComponent) {this.isShow=false}else{ this.isShow=true};
 }




}
