import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Visit } from "../models/visit.model";
import { Router } from "@angular/router";

@Component({
    selector: "visit-table",
    templateUrl: "visitTable.component.html"
})
export class VisitTableComponent {

    constructor(private repo: Repository, private router: Router) {
        this.repo.getVisits();
    }

    get visits(): Visit[] {
        return this.repo.visits;
    }

    selectVisit(id: number) {
        this.repo.getVisit(id);
        this.router.navigateByUrl("/visitdetail");
    }

}