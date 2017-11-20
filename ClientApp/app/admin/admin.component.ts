import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { AuthenticationService } from "../auth/authentication.service";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {

    constructor(private repo: Repository, public authService: AuthenticationService) {
        this.repo.getPatients();
        this.repo.getVisits();
        this.repo.getUsers();
        this.repo.getRoles();
        this.repo.getAccountRequests();
        //if (!this.repo.patients) {
        //    this.repo.getPatients();
        //}
        //if (!this.repo.visits) {
        //    this.repo.getVisits();
        //}
        //if (!this.repo.appUsers) {
        //    this.repo.getUsers();
        //}
        //if (!this.repo.appUserRequests) {
        //    this.repo.getAccountRequests();
        //}
        //if (!this.repo.appRoles) {
        //    this.repo.getRoles();
        //}
    }

}