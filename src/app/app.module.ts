import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material'
import {HttpModule, JsonpModule} from "@angular/http"
import { FormsModule }   from '@angular/forms';

import {AppComponent}  from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {DashboardComponent} from './modules/dashboard/dashboard.component'
import {ClassComponent} from './modules/class/class.component'
import {EmpComponent} from './modules/employee/employee.component'
import {AddEmpComponent} from './modules/employee/employee.add.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        AppRoutingModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ClassComponent,
        EmpComponent,
        AddEmpComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
