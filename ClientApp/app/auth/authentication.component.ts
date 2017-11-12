﻿import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Repository } from "../models/repository";

@Component({
    templateUrl: "authentication.component.html"
})
export class AuthenticationComponent {

    constructor(public authService: AuthenticationService, private repo: Repository) { }

    showError: boolean = false;

    login() {
        this.showError = false;
        this.authService.login().subscribe(result => {
            this.showError = !result;
            if (this.authService.authenticated) {
                this.repo.getPatients();
                this.repo.getVisits();
            }
            if (this.authService.isAdmin) {
                this.repo.getUsers();
                this.repo.getRoles();
            }
        });
    }
}