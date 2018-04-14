import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Visit } from "../models/visit.model";

@Component({
    selector: "patient-detailAdmin",
    templateUrl: "patientDetailAdmin.component.html"
})
export class PatientDetailAdminComponent {

    //singlePatientVisits: Visit[];
    patient: Patient;
    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

      let id = Number.parseInt(activeRoute.snapshot.params["id"]);
      console.log(id);
        if (id) {
            //this.repo.getPatient(id);
          this.patient = <Patient> this.repo.patients.filter(p => p.patientID == id);
          this.repo.getPatientVisits(id);
          console.log(this.patient);
        } else {
            router.navigateByUrl("/");
        }
        //repo.getVisits();
    }

    //get patient(): Patient {
    //    return this.repo.patient;
    //}
    get singlePatientVisits(): Visit[] {
        return this.repo.singlePatientVisits;
    }
    get totalVisits(): number {
        if (this.singlePatientVisits != null) {
            return this.singlePatientVisits.length;
        }
    }
}
