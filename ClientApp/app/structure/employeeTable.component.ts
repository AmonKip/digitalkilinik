import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Employee } from "../models/employee.model";
import { Router } from "@angular/router";

@Component({
    selector: "employee-table",
    templateUrl: "employeeTable.component.html"
})
export class EmployeeTableComponent {

    constructor(private repo: Repository, private router: Router) { }

    get employees(): Employee[] {
        return this.repo.employees;
        
    }

    selectEmployee(id: number) {
        this.repo.getEmployee(id);
        this.router.navigateByUrl("/employeedetail");
    }

}