import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: "user",
    templateUrl: "user.component.html"
})
export class UserComponent {

    //newPatient: Patient = new Patient();
  id: number;
  user = {};
  isEdit: Boolean;
  formSubmitted: boolean = false;

    constructor(private repo: Repository,
        private router: Router,
        activeRoute: ActivatedRoute) {

        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (this.id) {
          this.user = this.repo.appUsers.filter(u => u.userDetailsID == this.id)[0];
          this.isEdit = true;
        } 
       
    }

    //get user(): AppUser {
    //    return this.repo.appUser;
    //}

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
          if (this.isEdit) {
            this.repo.replaceUser(this.user);
          } else {
            this.repo.createUser(this.user);
          }
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
