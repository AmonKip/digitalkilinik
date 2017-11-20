import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Visit } from "../models/visit.model";
import { AppUser } from "../models/appuser.model";
import { AppRole } from "../models/approle.model";

@Component({
    selector: "patientAdmin-table",
    templateUrl: "patientAdmin.component.html"
})

export class PatientAdminComponent {

    constructor(private repo: Repository) { this.repo.getPatients(); }

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