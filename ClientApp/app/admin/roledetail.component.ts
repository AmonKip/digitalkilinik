import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppRole } from "../models/approle.model";
import { AppUser } from "../models/appuser.model";
import { RoleUser } from "../models/roleuser.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "role-detail",
    templateUrl: "roledetail.component.html"
})
export class RoleDetailComponent {
    roleName: string;
    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

       let id = activeRoute.snapshot.params["id"];
       if (id) {
           this.roleName = id;
           this.repo.getUsersInRole(id);
        } else {
            router.navigateByUrl("/admin");
        }
    }

    get users(): RoleUser[]{
        return this.repo.roleUsers;
    }
    get role(): AppRole
    {
        return this.repo.appRoles ? this.repo.appRoles.find(r => r.name == this.roleName) : [];
    }

}