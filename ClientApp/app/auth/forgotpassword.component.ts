import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Component({
    templateUrl: "forgotpassword.component.html"
})
export class ForgotPasswordComponent {

    constructor(public authService: AuthenticationService) { }

    showError: boolean = false;

    forgotpassword() {
        this.showError = false;
        this.authService.forgotPassword().subscribe(result => {
            this.showError = !result;
        });
    }
}