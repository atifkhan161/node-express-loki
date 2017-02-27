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
    employees = [];

    ngOnInit(): void {
        this.fetchData();
    }

    delete(id): void {
        this.empService
            .delete(id)
            .subscribe(emp  => {
                this.fetchData();
            });
        // .catch(error => this.error = error); // TODO: Display error message
    }

    fetchData() : void {
        this.empService.getAllEmployees().subscribe(
            data => this.employees = data,
        );
    }
}