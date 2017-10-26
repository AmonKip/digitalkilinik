import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "user-detail",
    templateUrl: "AppUserDetailAdmin.component.html"
})
export class AppUserDetailAdminComponent {

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getUser(id);
        } else {
            router.navigateByUrl("/");
        }
    }

    get user(): AppUser {
        return this.repo.appUser;
    }
}