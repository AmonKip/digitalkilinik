import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppRole } from "../models/approle.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: "rolesmanage-table",
    templateUrl: "createrole.Component.html"
})
export class CreateRoleComponent {

    newRole: AppRole = new AppRole();
    formSubmitted: boolean = false;

    constructor(private repo: Repository, private router: Router) {
        // this.repo.getAppUser;
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.addRole(this.newRole);
            this.newRole = new AppRole();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/admin/roleslist");
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