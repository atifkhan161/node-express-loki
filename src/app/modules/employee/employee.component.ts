import {Component, OnInit} from "@angular/core"
import {EmpService} from "./employee.service"
import {Employee} from "./employee.model"

@Component({
    templateUrl: "./app/modules/employee/employee-view.html",
    selector: "emp-view",
    providers: [EmpService]
})

export class EmpComponent implements OnInit {
    constructor(private empService: EmpService){}

    title = "Title loaded";
    employees = [
    ];

    ngOnInit(): void {
        this.empService.getAllEmployees().subscribe(
            data => this.employees = data,
        );
    }
}