import { Component } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "resetpassword.component.html"
})

export class ResetPasswordComponent {

    constructor(public authService: AuthenticationService, 
                 private route: ActivatedRoute) {
            
          this.route
          .queryParams
          .subscribe(params => {
           this.code = params['code'];
      });  

 }

    showError: boolean = false;
    code: string;

    resetpassword() {
        this.showError = false;
        this.authService.code = this.code;
        this.authService.resetPassword().subscribe(result => {
            this.showError = !result;
        });
    }
}
