import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Repository } from "./repository";
import { AuthenticationService } from "../auth/authentication.service";
import { Patient } from "./patient.model";

@Injectable()
export class PatientResolver implements Resolve<any>{
    constructor(private repo: Repository){}

     /// not used yet
    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Patient[]> {
        return this.repo.getAllPatients().length == 0 ? this.repo.getAllPatients() : null;
    }

}
