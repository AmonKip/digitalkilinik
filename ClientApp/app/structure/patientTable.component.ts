import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "../auth/authentication.service";


@Component({
    selector: "patient-table",
    templateUrl: "patientTable.component.html"
})
export class PatientTableComponent {
   
    constructor(private repo: Repository, private router: Router, private authService: AuthenticationService) {
        this.repo.getPatients();
        //while (!this.repo.patients) {
            //this.repo.getPatients();
       // }
    }

    get patients() {
       // this.spinnerService.hide();
        return this.repo.patients;
    }
    get patientCount(){
        return this.repo.patients ? this.repo.patients.length: [];
    }

    selectPatient(id: number) {
        this.repo.getPatient(id);
        this.router.navigateByUrl("/detail");
    }

    criteriaChange(value: string): void {
        if (value != '[object Event]')
            this.listFilter = value;
    }
    listFilter: string;
  
}