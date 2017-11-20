import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppRole } from "../models/AppRole.model";
import { Router } from "@angular/router";

@Component({
    selector: "roles-table",
    templateUrl: "rolestable.component.html"
})
export class RolesTableComponent {

    constructor(private repo: Repository, private router: Router) { this.repo.getRoles(); }

    get roles(): AppRole[] {
        return this.repo.appRoles;
    }

    selectRole(id: string) {
        //this.repo.getRole(id);
        this.repo.appRole = this.roles.find(r => r.id == id);
        this.router.navigateByUrl("/admin/roledetail");
    }

}