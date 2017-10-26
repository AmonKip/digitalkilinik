import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Visit } from "../models/visit.model";
import { AppUser } from "../models/appuser.model";
import { AppRole } from "../models/approle.model";

@Component({
    templateUrl: "overview.component.html"
})

export class OverviewComponent {

    constructor(private repo: Repository) { }

    get patients(): Patient[] {
        return this.repo.patients;
    }
    get visits(): Visit[] {
        return this.repo.visits;
    }
    get users(): AppUser[] {
        return this.repo.appUsers;
    }
    get roles(): AppRole[] {
        return this.repo.appRoles;
    }
}