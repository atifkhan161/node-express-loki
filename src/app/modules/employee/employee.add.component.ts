import {Component, OnInit, Input} from "@angular/core"
import {EmpService} from "./employee.service"
import {Employee} from "./employee.model"

@Component({
    templateUrl: "./app/modules/employee/employee-add.html",
    selector: "emp-add",
    providers: [EmpService]
})

export class AddEmpComponent implements OnInit {
    constructor(private empService: EmpService){}
    @Input() employee: Employee;
    title = "Title loaded";

    ngOnInit(): void {
       // this.employee = new Employee();
    }

    save(): void {
        this.empService
            .save(this.employee)
            .subscribe(emp  => {
                window.history.back();
            });
            // .catch(error => this.error = error); // TODO: Display error message
    }
}