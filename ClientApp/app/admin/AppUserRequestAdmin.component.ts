import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router } from "@angular/router";

@Component({
    selector: "appUserRequestAdmin-table",
    templateUrl: "AppUserRequestAdmin.component.html"
})
export class AppUserRequestAdminComponent {

    request = true;
    returnUrl = "/admin/usersrequests";
    constructor(private repo: Repository, private router: Router) { this.repo.getAccountRequests(); }

    get users(): AppUser[] {
        return this.repo.appUserRequests;

    }

}