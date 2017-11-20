import { Component } from "@angular/core";
//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";

@Component({
    templateUrl: "requestconfirmation.component.html"
})
export class RequestConfirmComponent {

    constructor() { }

    message: string = "Your account request has been successfully submitted. Your request will be reviewed for approval as soon as possible.";

}