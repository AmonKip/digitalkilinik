import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: "user-edit",
    templateUrl: "AppUserEditAdmin.component.html"
})
export class AppUserEditAdminComponent {

    //newPatient: Patient = new Patient();
    formSubmitted: boolean = false;

    constructor(private repo: Repository,
        private router: Router,
        activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getUser(id);
        } else {
            router.navigateByUrl("/");
        }
    }

    get user(): AppUser {
        return this.repo.appUser;
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.replaceUser(this.user);
            this.formSubmitted = false;
            this.router.navigateByUrl("/admin/userslist");
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