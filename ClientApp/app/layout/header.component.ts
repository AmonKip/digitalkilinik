import { Component } from '@angular/core';
import decode from 'jwt-decode';
import { AuthenticationService } from '../auth/authentication.service';
@Component({
    selector: 'layout-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    name: string;
    isAdmin: boolean;
   // isLoggedIn: boolean = false;

    constructor(public authService: AuthenticationService) {
       // this.name = this.authService.name;
       // this.isAdmin = this.authService.isAdmin;
      this.isAdmin = !!sessionStorage.getItem("isAdmin");
      var token = sessionStorage.getItem('auth_token');
      if (token) {
        this.name = decode(token).sub;
      }
     
      //this.isLoggedIn = authService.authenticated;
    }

}
