import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Patient } from "./models/patient.model";
import { ErrorHandlerService } from "./services/errorHandler.service";
import { AuthenticationService } from "./auth/authentication.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private lastError: string[];
    isLoggedIn = false;

    constructor(errorHandler: ErrorHandlerService, private authService: AuthenticationService) {
        errorHandler.errors.subscribe(error => {
            this.lastError = error;
        })
        //authService.login().subscribe(result => {
        //    this.isLoggedIn = result;
        //})

    }

    get error(): string[] {
        return this.lastError;
    }

    clearError() {
        this.lastError = null;
    }
    get loggedIn(): boolean{
        return this.authService.authenticated;
    }
    //template: string = `<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`

}
