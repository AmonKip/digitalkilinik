import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Visit } from "../models/visit.model";
import { VitalSigns } from "../models/vitalsigns.model";
import { AppUser } from "../models/appuser.model";
import { Patient } from "../models/patient.model";
import { Assessment } from "../models/assessment.model";
import { Router, ActivatedRoute } from "@angular/router";
import { DoctorsOrder } from "../models/doctorsOrder.model"

@Component({
    selector: "visit-detail",
    templateUrl: "visitDetail.component.html"
})
export class VisitDetailComponent {

    constructor(private repo: Repository,
        router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getVisit(id);
            this.repo.getPatientByVisitId(id);
            this.repo.getVitalSigns(id);
            this.repo.getAssessment(id);
            this.repo.getDoctorOrders(id);
            this.repo.getNurseByVisitId(id);
            this.repo.getDoctorByVisitId(id);
           
        } else {
            router.navigateByUrl("/");
        }
        
    }

    get visit(): Visit {
        return this.repo.visit;
    }
    get patient(): Patient {
        return this.repo.patient;
    }
    get vitalSigns(): VitalSigns {
        return this.repo.vitalSigns;
    }
    get assessment(): Assessment {
        return this.repo.assessment;
    }
    get orders(): DoctorsOrder[] {
        return this.repo.doctorOrders;
    }
    get nurse(): AppUser {
      return this.repo.nurse;
    }
    get doctor(): AppUser {
      return this.repo.doctor;
    }

}
