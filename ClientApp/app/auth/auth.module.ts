import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationGuard } from "./authentication.guard";
import { AdminAuthGuard } from "./adminauthentication.guard";
import { ForgotPasswordComponent } from "./forgotpassword.component";
import { ResetPasswordComponent } from "./resetpassword.component";

@NgModule({
    imports: [RouterModule, FormsModule, BrowserModule],
    declarations: [AuthenticationComponent, ForgotPasswordComponent, ResetPasswordComponent],
    providers: [AuthenticationService, AuthenticationGuard, AdminAuthGuard],
    exports: [AuthenticationComponent]
})
export class AuthModule { }
