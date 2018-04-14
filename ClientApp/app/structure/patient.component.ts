import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Patient } from "../models/patient.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: "patient",
    templateUrl: "patient.component.html"
})
export class PatientComponent {

    //newPatient: Patient = new Patient();
  id
  isEdit: Boolean;
  patient = {};
    formSubmitted: boolean = false;
  
    constructor(private repo: Repository,
      private router: Router,
      activeRoute: ActivatedRoute) {

      this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
      if (this.id) {
        this.patient = this.repo.patients.filter(p => p.patientID == this.id)[0];
        this.isEdit = true;
      } 
    }


    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
          if (this.isEdit) {
            this.repo.replacePatient(this.patient);
          } else {
            this.repo.createPatient(this.patient);
          }
            this.formSubmitted = false;
            this.router.navigateByUrl("/table");
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
