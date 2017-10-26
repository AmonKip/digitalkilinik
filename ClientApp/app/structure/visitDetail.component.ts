import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Visit } from "../models/visit.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "visit-detail",
    templateUrl: "visitDetail.component.html"
})
export class VisitDetailComponent {

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getVisit(id);
        } else {
            router.navigateByUrl("/");
        }
    }

    get visit(): Visit {
        return this.repo.visit;
    }
}