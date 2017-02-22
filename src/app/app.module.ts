import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {DashboardComponent} from './modules/dashboard/dashboard.component'
import {ClassComponent} from './modules/class/class.component'
import {EmpComponent} from './modules/employee/employee.component'

@NgModule({
  imports:      [
      BrowserModule,
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      ClassComponent,
      EmpComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
