import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardComponent} from './modules/dashboard/dashboard.component'
import {ClassComponent} from './modules/class/class.component'
import {EmpComponent} from './modules/employee/employee.component'
import {AddEmpComponent} from './modules/employee/employee.add.component'

const routes: Routes = [
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'class',  component: ClassComponent },
    { path: 'employee',  component: EmpComponent },
    { path: 'employee-add',  component: AddEmpComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}