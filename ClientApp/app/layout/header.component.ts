import { Component } from '@angular/core';
import { AuthenticationService } from "../auth/authentication.service";

@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(public authService: AuthenticationService) { }

}