import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: "useradmin-create",
    templateUrl: "appUserCreateAdmin.Component.html"
})
export class AppUserCreateAdminComponent {

    newUser: AppUser = new AppUser();
    formSubmitted: boolean = false;

    constructor(private repo: Repository, private router: Router) {
        // this.repo.getAppUser;
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.createUser(this.newUser);
            this.newUser = new AppUser();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/admin");
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