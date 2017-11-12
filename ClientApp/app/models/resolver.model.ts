import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Repository } from "./repository";
import { AuthenticationService } from "../auth/authentication.service";
import { Patient } from "./patient.model";

@Injectable()
export class RepoResolver{
    constructor(private repo: Repository){}

    //abandoned project for the time being
   // resolve(route: ActivatedRouteSnapshot,
        //state: RouterStateSnapshot): Observable<Patient[]> {

        //return this.repo.patients.length == 0
           // ? this.repo.getPatients(): null;
   // }

}
