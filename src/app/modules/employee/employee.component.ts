import {Component, OnInit} from "@angular/core"

@Component({
    templateUrl: "./app/modules/employee/employee-view.html",
    selector: "emp-view"
})

export class EmpComponent implements OnInit {
    title = "Title loaded";

    ngOnInit(): void {
    }
}