import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Visit } from "../models/visit.model";
import { VitalSigns } from "../models/vitalSigns.model";
import { DoctorsOrder } from "../models/doctorsOrder.model";
import { Assessment } from "../models/assessment.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: 'visit-create',
    templateUrl: './patientVisitCreate.component.html'
})
export class PatientVisitCreate {

    newVisit: Visit = new Visit();
    newVitalSigns: VitalSigns = new VitalSigns();
    newAssessment: Assessment = new Assessment();
    newDoctorsOrder: DoctorsOrder = new DoctorsOrder();

    formSubmitted: boolean = false;

    constructor(private repo: Repository, private router: Router, activeRoute: ActivatedRoute) {

        let patientId = Number.parseInt(activeRoute.snapshot.params["id"]);
        this.newVisit.patientID = patientId;
    }


    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            console.log(this.newVisit);
            this.repo.createVisit(this.newVisit);
            this.newVisit = new Visit();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/requestconfirm");
        }
    }

    getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`The field is required`);
                        break;
                    case "minlength":
                        messages.push(`A ${thing} must be at least ${state.errors['minlegth'].requiredLength} characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${thing} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }
}