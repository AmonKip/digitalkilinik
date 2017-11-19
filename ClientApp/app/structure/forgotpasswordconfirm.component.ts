import { Component } from "@angular/core";
//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";

@Component({
    templateUrl: "forgotpasswordconfirm.component.html"
})
export class ForgotPasswordConfirmComponent {

    constructor() { }

    message: string = "Email reset has been sent! Please check your inbox to reset your password.";

}