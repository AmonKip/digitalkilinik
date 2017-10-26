import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Visit } from "../models/visit.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "visitsadmin-detail",
    templateUrl: "visitsDetailAdmin.component.html"
})
export class VisitDetailAdminComponent {

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getVisit(id);
        } else {
            router.navigateByUrl("/admin");
        }
    }

    get visit(): Visit {
        return this.repo.visit;
    }
}