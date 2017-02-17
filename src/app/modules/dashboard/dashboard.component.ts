import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'dashboard-view',
    templateUrl: './app/modules/dashboard/dashboard.html'
})
export class DashboardComponent  implements OnInit{
    name = 'Whatever';
    extraProp = "don't Care";

    ngOnInit(): void {

    }
}