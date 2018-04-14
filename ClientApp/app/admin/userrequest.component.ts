import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router } from "@angular/router";

@Component({
    selector: "UserRequest",
    templateUrl: "userrequest.component.html"
})
export class UserRequestComponent {

    request = true;
    returnUrl = "/admin/usersrequests";
    constructor(private repo: Repository, private router: Router) { this.repo.getAccountRequests(); }

    get users(): AppUser[] {
        return this.repo.appUserRequests;

    }

}
