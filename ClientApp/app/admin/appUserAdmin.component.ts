import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router } from "@angular/router";

@Component({
    selector: "appUserAdmin-table",
    templateUrl: "appUserAdmin.component.html"
})
export class AppUserAdminComponent {

    constructor(private repo: Repository, private router: Router) { }

    get users(): AppUser[] {
        return this.repo.appUsers;

    }

    //selectEmployee(id: number) {
    //    this.repo.getEmployee(id);
    //    this.router.navigateByUrl("/employeedetail");
    //}

}