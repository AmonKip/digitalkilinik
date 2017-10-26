import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Employee } from "../models/employee.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "employee-detail",
    templateUrl: "employeeDetail.component.html"
})
export class EmployeeDetailComponent {

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getEmployee(id);
        } else {
            router.navigateByUrl("/");
        }
    }

    get employee(): Employee {
        return this.repo.employee;
    }
}