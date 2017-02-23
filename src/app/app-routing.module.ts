import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardComponent} from './modules/dashboard/dashboard.component'
import {ClassComponent} from './modules/class/class.component'
import {EmpComponent} from './modules/employee/employee.component'


const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'class',  component: ClassComponent },
    { path: 'employee',  component: EmpComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}