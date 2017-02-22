import {Component, OnInit} from '@angular/core'
import {MdSnackBar} from '@angular/material'

@Component({
    selector: 'dashboard-view',
    templateUrl: './app/modules/dashboard/dashboard.html'
})
export class DashboardComponent  implements OnInit{
    constructor(public snackBar: MdSnackBar) {}
    name = 'Whatever';
    extraProp = "don't Care";

    ngOnInit(): void {
        // this.snackBar.open("Dashboard loaded", "Ok", {
        //     duration: 2000,
        // });
    }
}