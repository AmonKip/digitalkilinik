import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Visit } from "../models/visit.model";
import { Router } from "@angular/router";

@Component({
    selector: "visitsadmin-table",
    templateUrl: "visitsAdmin.component.html"
})
export class VisitAdminComponent {

    constructor(private repo: Repository, private router: Router) { this.repo.getVisits(); }

    get visits(): Visit[] {
        return this.repo.visits;
    }

    selectVisit(id: number) {
        this.repo.getVisit(id);
        this.router.navigateByUrl("/admin/visitdetail");
    }

}