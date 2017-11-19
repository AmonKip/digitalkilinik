import { Component } from "@angular/core";
//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";

@Component({
    templateUrl: "passwordresetconfirmation.component.html"
})
export class PasswordResetConfirmComponent {

    constructor() { }

    message: string = "Your password has been successfully reset!";

}