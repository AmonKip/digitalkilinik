import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "../auth/authentication.service";


@Component({
    selector: "patient-table",
    templateUrl: "patientTable.component.html"
})
export class PatientTableComponent {

      isCheckedIn: Boolean = false;
      filteredPatients;
    constructor(private repo: Repository, private router: Router, private authService: AuthenticationService, private route: ActivatedRoute) {
      this.repo.getPatients();
      this.registeredPatients();
    }

    get patients() : Patient[] {
      return this.filteredPatients;
    }

    set patients(value) {
      this.patients = value;
    }

    get patientCount(){
        return this.repo.patients ? this.repo.patients.length: [];
    }

    get checkedInPatientsCount() {
      return this.repo.patients.filter(p => p.current == 1).length;
    }

    selectPatient(id: number) {
        this.repo.getPatient(id);
        this.router.navigateByUrl("/detail");
    }
    checkedInPatients() {
      this.isCheckedIn = true;
      this.filteredPatients = this.repo.patients.filter(p => p.current == 1);
      return this.patients = this.filteredPatients;
      
    }
     registeredPatients() {
       this.filteredPatients = this.repo.patients.filter(p => p.current == 0);
       this.isCheckedIn = false;
     }

    criteriaChange(value: string): void {
        if (value != '[object Event]')
            this.listFilter = value;
    }
    listFilter: string;
  
}
