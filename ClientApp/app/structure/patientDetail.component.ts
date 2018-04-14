import { Component, OnInit } from '@angular/core';
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Visit } from "../models/visit.model";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "patient-detail",
    templateUrl: "patientDetail.component.html"
})
export class PatientDetailComponent implements OnInit {
  ngOnInit(): void {
    //this.repo.getVisits().subscribe(visits => this.repo.visits == visits);
  }

  
  patient = {};
  id: number;

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

      this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
      if (this.id) {
        this.patient = this.repo.patients.filter(p => p.patientID == this.id)[0];
        } else {
            router.navigateByUrl("/");
        }
  }
    get totalVisits(): number {
        if (this.visits != null) {
          return this.visits.length;
        }
    }
    get visits() {
      return this.repo.visits.filter(p => p.patientID == this.id);
    }

}
