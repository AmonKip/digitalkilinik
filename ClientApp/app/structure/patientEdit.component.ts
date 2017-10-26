import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: "patient-edit",
    templateUrl: "patientEdit.component.html"
})
export class PatientEditComponent {

    //newPatient: Patient = new Patient();
    formSubmitted: boolean = false;
  
    constructor(private repo: Repository,
        private router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getPatient(id);
        } else {
            router.navigateByUrl("/");
        }
    }

    get patient(): Patient {
        return this.repo.patient;
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.replacePatient(this.patient);
            this.formSubmitted = false;
            this.router.navigateByUrl("/");
        }
    }

    getValidationMessages(state: any, thingName?: string) {
        let thing: string = state.path || thingName;
        let messages: string[] = [];
        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`Required`);
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